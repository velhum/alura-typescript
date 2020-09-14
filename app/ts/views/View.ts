// Como esta clase não pode ser instanciada, pois depende da implementação
// do método template, ela deve ser do tipo 'abstract'
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(
        seletor: string,
        escapar: boolean = false
    ){
        this._elemento = $(seletor);
        this._escapar = escapar
    }

    @logarTempoDeExecucao(true)
    update(modelo: T): void {

        let template = this.template(modelo);
        if(this._escapar) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);
    }

    // Como o método 'template' irá ser desenvolvido na classe filha,
    // ele também deve ser do tipo 'abstract' e sem o corpo '{}'
    // Desta maneira, se o desenvolvedor esquecer de implemtar o método
    // em sua classe filha o código não será compilado
    abstract template(modelo: T): string;
}
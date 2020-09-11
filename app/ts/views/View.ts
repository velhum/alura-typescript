// Como esta clase não pode ser instanciada, pois depende da implementação
// do método template, ela deve ser do tipo 'abstract'

export abstract class View<T> {

    private _elemento: Element;

    constructor(
        seletor: string
    ){
        this._elemento = document.querySelector(seletor);
    }

    update(modelo: T): void {

        this._elemento.innerHTML = this.template(modelo);
    }

    // Como o método 'template' irá ser desenvolvido na classe filha,
    // ele também deve ser do tipo 'abstract' e sem o corpo '{}'
    // Desta maneira, se o desenvolvedor esquecer de implemtar o método
    // em sua classe filha o código não será compilado
    abstract template(modelo: T): string;
}
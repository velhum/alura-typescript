import { NegociacoesView, MensagemView  } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject } from '../helpers/decorators/index';
export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery
    @domInject('#quantidade')
    private _inputQuantidade: JQuery
    @domInject('#valor')
    private _inputValor: JQuery
    private _negociacoes = new Negociacoes;
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        // atualiza a view para exibir os dados do modelo, vazio
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this.ehDiaUtil(data)){
            this._mensagemView.update('Negociações só podem ser incluidas em dias úteis.');
            return
        }

        const negociacao = new Negociacao(
            data, 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação incluída com sucesso.')
    };

    private ehDiaUtil (data: Date) : boolean {
        return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado
    }

}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta, 
    Quinta, 
    Sexta, 
    Sabado, 
}

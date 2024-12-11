export class NegociacoesView {
    constructor(selector) {
        this.elemente = document.querySelector(selector);
    }
    template(model) {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
        ${model.lista().map(negociacao => {
            return `
            <tr>
              <td>${'?'}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>
            `;
        }).join()}
        </tbody>
      </table>
    `;
    }
    update(model) {
        const template = this.template(model);
        this.elemente.innerHTML = template;
    }
}

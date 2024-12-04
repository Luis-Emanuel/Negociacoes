export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        this.saldo = 100;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
export class Fatura {
    constructor(criadaEm, quantidade, valor) {
        this.criadaEm = criadaEm;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}

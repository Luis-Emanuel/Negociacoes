export class Negociacao {
  private saldo: number = 100;
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
  }

  get data(): Date {
    const data = new Date(this._data.getTime())
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}


export class Fatura {
  constructor(
    private readonly criadaEm: Date,
    private quantidade: number,
    private valor: number
  ) { }
}
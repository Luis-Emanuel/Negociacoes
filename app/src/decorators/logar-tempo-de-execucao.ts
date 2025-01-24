export function logarTempoDeExecucao(emSegundois: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      // Determinar divisor e unidade com base no parâmetro
      let divisor = 1;
      let unidade = "minutos";
      if(emSegundois){
        divisor = 1000;
        unidade = "segundos";
      }
      const t1 = performance.now(); // Marca o tempo inicial
      // Chama o método original preservando o contexto (this) e passando os parâmetros
      const retorno = metodoOriginal.apply(this, args)
      const t2 = performance.now(); // Marca o tempo final
      console.log(`${propertyKey} tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
      return retorno; // Retorna o valor original do método
    }
  }
}

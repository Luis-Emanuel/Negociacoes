export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOrigial = descriptor.value;
    descriptor.value = function (...args: any[]) {
      // Loga informações do método
      console.log(`--- Método: ${propertyKey}`);
      console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
      // Executa o método original
      const retorno = metodoOrigial.apply(this, args);
      console.log(`------ Retorno: ${JSON.stringify(retorno)}`); 
      // Retorna o resultado original
      return retorno;
    }
    return descriptor
  }
}
export function logarTempoDeExecucao(emSegundois = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "minutos";
            if (emSegundois) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        };
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map
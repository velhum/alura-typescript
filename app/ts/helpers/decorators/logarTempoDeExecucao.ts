export function logarTempoDeExecucao(emSegundos: boolean = false){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let unidade = 'ms';
            let divisor = 1;

            if (emSegundos) {
                unidade = 's';
                divisor = 1000;
            }

            console.log(`------ Método: ${propertyKey} -----------------`);
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Resultado do método: ${JSON.stringify(resultado)}` );
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`);
            console.log('--------------------------------------------');
            return resultado;        }

        return descriptor;
    }
}
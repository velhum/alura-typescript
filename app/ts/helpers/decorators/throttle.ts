export function throttle(milissegundos = 500){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        if (event) event.preventDefault();
        let timer = 0;
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }
        return descriptor;
    }
}
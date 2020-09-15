function processaToken(token: string | number) {
    // muda o dígito 2 por X!
    if(typeof(token) === 'string') {

        // typescript entende que é o tipo string e faz autocomplete para este tipo. A função replace só existe em string
        return token.replace(/2/g,'X');
    } else {
        // toFixed só existe em number!
        return token.toFixed().replace(/2/g,'X');
    }
}
const tokenProcessado = processaToken('1234');
const tokenProcessadoNumber = processaToken(1234);
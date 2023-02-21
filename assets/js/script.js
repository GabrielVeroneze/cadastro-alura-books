async function buscaEndereco() {
    try {
        var consultaCep = await fetch('https://viacep.com.br/ws/01001001/json/')
        var cepConvertido = await consultaCep.json()

        if(cepConvertido.erro) {
            throw Error('CEP não existente!')
        }
        console.log(cepConvertido)
    } catch (erro) {
        console.log(erro)
    }
}

buscaEndereco()
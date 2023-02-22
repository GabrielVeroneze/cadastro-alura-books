async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var cepConvertido = await consultaCep.json()

        if(cepConvertido.erro) {
            throw Error('CEP não existente!')
        }
        // console.log(cepConvertido)
        return cepConvertido
    } catch (erro) {
        // console.log(erro)
        return erro
    }
}


let listaCep = ['01001000', '01001001', '99999999', '111111111']

let resultadoCep = listaCep.map(cep => {
    return buscaEndereco(cep)
})

Promise.all(resultadoCep).then(respostas => console.log(respostas))
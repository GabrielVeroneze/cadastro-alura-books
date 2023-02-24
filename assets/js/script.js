const cep = document.querySelector('#cep')
var endereco = document.querySelector('#endereco')
var numero = document.querySelector('#numero')
var complemento = document.querySelector('#complemento')
var bairro = document.querySelector('#bairro')
var cidade = document.querySelector('#cidade')
var estado = document.querySelector('#estado')


cep.addEventListener('focusout', async () => {

    const dados = await buscaEndereco(cep.value)

    manipulaDados(dados)
})


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


function manipulaDados(dados) {
    console.log(dados)
    endereco.value = dados.logradouro

    complemento.value = dados.complemento
    bairro.value = dados.bairro
    cidade.value = dados.localidade
}




// console.log(endereco)
// console.log(numero)
// console.log(complemento)
// console.log(bairro)
// console.log(cidade)
// console.log(estado)
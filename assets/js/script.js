const cep = document.querySelector('#cep')

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
        
        return cepConvertido
    } catch (erro) {
        return erro
    }
}

function manipulaDados(dados) {
    const endereco = document.querySelector('#endereco')
    const complemento = document.querySelector('#complemento')
    const bairro = document.querySelector('#bairro')
    const cidade = document.querySelector('#cidade')
    const estado = document.querySelector('#estado')
    const mensagemErro = document.querySelector('#erro')
    
    if (dados instanceof Error) {
        console.log(dados)
        mensagemErro.innerHTML = 'CEP inválido. Tente novamente!'

        endereco.value = ''
        complemento.value = ''
        bairro.value = ''
        cidade.value = ''
        return
    }

    mensagemErro.innerHTML = ''
    
    endereco.value = dados.logradouro
    complemento.value = dados.complemento
    bairro.value = dados.bairro
    cidade.value = dados.localidade
    estado.value = dados.uf
}
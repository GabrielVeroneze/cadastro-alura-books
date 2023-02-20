async function buscaEndereco() {
    var consultaCep = await fetch('https://viacep.com.br/ws/01001000/json/')
    var consultaCepConvertido = await consultaCep.json()
    console.log(consultaCep)
    console.log(consultaCepConvertido)
}

buscaEndereco()
var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(dados => {
        if (dados.erro) {
            throw Error('Esse cep não existe!')
        } else {
            console.log(dados)
        }
    })
    .catch(erro => console.log(erro))


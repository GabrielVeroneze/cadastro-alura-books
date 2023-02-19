var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(dados => {
        if (dados.erro) {
            throw Error('Esse CEP não existe!')
        } else {
            console.log(dados)
        }
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído!'))
var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
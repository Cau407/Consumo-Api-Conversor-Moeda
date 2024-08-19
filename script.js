const moedaBase = document.getElementById('moedaBase')
const moedaBaseValor = moedaBase.value
const moedaDestino = document.getElementById('moedaDestino')
const moedaDestinoValor = moedaDestino.value
const valorConverter = document.getElementById('valor')
const valorConvertido = document.getElementById('valorConvertido')
const converterBtn = document.getElementById
const apiKey = "cab3719e66a36afbb56a0f6cdb4c8366"
const apiUrl = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`

function fetchApi() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('A solicitação da API não foi bem sucedida')
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            alert('Erro: ' + error.message)
        })
}
fetchApi()
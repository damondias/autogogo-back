import axios from 'axios'
import dayjs from 'dayjs'

axios.post('http://localhost:5000/home', {
    nome: "Gol",
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2010,
    km: 100000,
    qntDonos: 2,
    infoExtra: "Sofreu apenas um acidente, mas o carro concertou e funciona perfeitamente",
    valor: 35000,
    insertedDate: dayjs().format('DD/MM/YYYY HH:mm:s'),
    createdBy: "id do usuário que tava logado e que inseriu"}).then(res =>{
    console.log(res.data)
}).catch(err => {
    console.log(err.response.data)
})
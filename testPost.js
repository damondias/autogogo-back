import axios from 'axios'

axios.post('http://localhost:5000/home', {data: "oi"}).then(res =>{
    console.log(res)
}).catch(err => {
    console.log(err.response.data)
})
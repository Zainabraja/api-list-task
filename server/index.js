import express from 'express'
import fetch from "node-fetch"
import cors from "cors"

const app = express()
const corsOptions ={
   origin:'*', 
   credentials:true,         
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    res.send(data)
  });

})

app.listen(3000,()=> {
  console.log("Listening on port 3000!")
})
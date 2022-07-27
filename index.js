const { query } = require('express')
const express = require('express')
const app = express()
const port = 3000

const mydb = require("./models/dbAdapter")

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get('/getResult', (req, res) => {

  let fname = "Shiraz"

  async function myProgram(fname) {
    await mydb.findName(fname).then((result)=>res.send(result))
  }
  myProgram(fname)

})

app.get('/getCandidate', (req, res) => {
  var newCandidate = {
    name:req.query.fname,
    address:req.query.address,
    email:req.query.email,
    phoneNumber:req.query.phone,
    message:req.query.message,
    myfile:req.query.myfile
  }

  async function mysave(candidateDetails) {
    await mydb.saveCandidate(candidateDetails).then((result) => res.send(result));
  }

  mysave(newCandidate);
})

app.get('/getProduct', (req, res) => {
  async function myProduct() {
    await mydb.getProducts().then((result) => { res.send(result)});
  }
  myProduct();
})






const UserRouter = require("./Server/routes/userRouter");
const ProductRouter = require("./Server/routes/productsRouter")
const express = require('express')
const axios = require('axios')
const { query } = require('express')
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express()
const port = 3000
const mydb = require("./Server/models/dbAdapter")
require("dotenv").config()
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000", exposedHeaders: "auth-token" }));
app.use(express.static('public'))


const BASE_URL = "http://localhost:3000"
api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },

  withCredentials: true,
});

//db connection --------------------------------------------------------------
mongoose.connect(process.env.ATLAS_URI)
const connection = mongoose.connection;
app.use(express.urlencoded({ extended: false }));

connection.once("open", () => {
  console.log("database connetion established");
  add()
});



// Routing 
app.use('/users',UserRouter)
app.use('/products',ProductRouter)
app.listen(port,()=>{console.log(`Server is listening on ${port}`)})

function add(){
  user={
    username:"shiraz",
    password:"shiraz",
  }
  res = api.post("users/add",user).then(res => console.log(res)).catch(err => console.error(err))
}


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

app.get('/getOrder', (req,res) => {
  var newOrder = {
    product:req.query.productsInCart,
    totalPrice:req.query.price
  }

  async function mysave1(orderDetails) {
    await mydb.saveOrder(orderDetails).then((result) => res.send(result));
  }

  mysave1(newOrder);
})








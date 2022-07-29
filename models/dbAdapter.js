const {MongoClient} = require("mongodb");
const uri = "mongodb://localhost:27017/";
const Client = new MongoClient(uri);

async function findMongoDoc (fname) {

    //connect
    await Client.connect();
    console.log("connect succes");

    //check
    await Client.db("admin").command({ping : 1 })

    //find one
    const myResult = await Client.db("SukenikHairDesign")
    .collection("customers")
    .findOne({name : `${fname}` });


    //close
    await Client.close();

    return myResult;

}

async function saveCandidate(candidateDetails) {
    var Client = new MongoClient(uri);
    await Client.connect();
    var col = Client.db("SukenikHairDesign").collection("candidates");
    var result = await col.insertOne(candidateDetails);
    Client.close();
    return result;
}

async function getProducts() {
    await Client.connect();
    const db = Client.db("SukenikHairDesign");
    let collection = db.collection('products');
    let res = await collection.find({}).toArray();
    console.log(res);

    return res;
}

async function saveOrder(orderDetails) {
    var Client = new MongoClient(uri);
    await Client.connect();
    var col = Client.db("SukenikHairDesign").collection("orders");
    var result = await col.insertOne(orderDetails);
    Client.close();
    return result;
}

exports.findName = findMongoDoc;
exports.saveCandidate = saveCandidate;
exports.getProducts = getProducts;
exports.saveOrder = saveOrder;
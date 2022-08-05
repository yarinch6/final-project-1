const Products = require("../models/product.model");

const getAll = async () => {
  return await Products.find();
};

const getProductById = async (id) => {
  return await Products.findById(id);
};


const addProduct = async (prodcut) => {
  
  const name = prodcut.name;
  const tag = prodcut.tag;
  const price = prodcut.price;
  const img = prodcut.img
  const newProduct = new Products({ name , tag,price,img });
  return await newProduct.save();
};
const updateProduct= async (id, product) => {
  return await Products.findByIdAndUpdate(id, product, { new: true });
};
const deleteProduct = async (id) => {
  return await Products.findByIdAndDelete(id);
};
module.exports = { getAll, getProductById, addProduct, updateProduct, deleteProduct };

const router = require("express").Router();
const productService = require("../service/productService");


router.get("/all", async (req, res) => {
  const qType = req.query.type;
  if (qType) {
    const result = await productService.getByType(qType);
    res.status(200).json(result);
    return;
  }
  const product = await productService.getAll();
  res.json(product);
});


router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await productService.getById(id);
  res.json(product);
});


router.get("/:field/:value", async (req, res) => {
  const products = await productService.getByField(req.params.field, req.params.value);
  res.json(products);
});


router.post("/add", async (req, res) => {
  const product = await productService.addProduct(req.body);
  res.json(product);
});



router.patch("/update/:id", async (req, res) => {
  const product = await productService.update(req.params.id, req.body);
  res.json(product);
});


router.delete("/delete/:id", async (req, res) => {
  const product = await productService.remove(req.params.id);
  res.json(product);
});

module.exports = router;

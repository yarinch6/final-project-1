const router = require('express').Router();
const bcrypt = require("bcrypt");
const userService = require("../service/userService");
const { verifyAuth, verifyAuthAdmin } = require("../Validation/tokenVerify");

router.post("/add ",async (req,res) =>{
  console.log("inside ROUTER")

  try{
    const result = await userService.addUser(req.body)
    res.status(200).json(result);
  }catch(error){
    res.status(500).json(error)
  }
})

router.patch("/:id", verifyAuth, async (req, res) => {
    if (req.body.password) {
      const hashedpassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedpassword;
    }
    try {
      const result = await userService.updateUser(req.params.id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.delete("/:id", verifyAuth, async (req, res) => {
    try {
      const result = await userService.deleteUser(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.get("/find/:id", verifyAuth, async (req, res) => {
    try {
      const result = await userService.getUserById(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.get("/all", async (req, res) => {
    try {
      const result = await userService.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  module.exports = router;
  
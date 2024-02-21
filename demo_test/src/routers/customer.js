const express = require('express');
const router = new express.Router();
const Customer = require("../model/customers");

router.get("/", (req, res) => res.status(201).send("This is Home Page."));

router.post("/addCustomer", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const createCustomer = await customer.save();
    res.status(201).send(createCustomer);
  } catch (e) {
    res.status(400).send(e)
  }
});

router.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(201).send(customers);
  } catch (e) {
    res.status(400).send(e)
  }
});

router.get("/customers/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const customerOne = await Customer.findOne({ name: name });
    res.status(201).send(customerOne);
  } catch (e) {
    res.status(400).send(e)
  }
});

router.patch("/customers/update/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const findCustomer = await Customer.findOne({name:name});
    const updateCustomer = await Customer.findByIdAndUpdate(findCustomer.id, req.body, {new:true});
    res.status(201).send(updateCustomer);
  } catch (e) {
    res.status(400).send(updateCustomer);
  }
});
router.patch("/customers/delete/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const findCustomer = await Customer.findOne({name:name});
    const updateCustomer = await Customer.findByIdAndUpdate(findCustomer.id, req.body, {new:true});
    res.status(201).send(updateCustomer);
  } catch (e) {
    res.status(400).send(updateCustomer);
  }
});


module.exports = router;
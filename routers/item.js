const express = require('express');
const Item = require('../models/item');
const router = new express.Router();

router.get('/', async (req, res) => {
  try {
    const items = await Item.find({});
    console.log(items);
    res.status(200).send(items);
  } catch (e) {
    res.status(404).send();
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(200).send(item);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

module.exports = router;

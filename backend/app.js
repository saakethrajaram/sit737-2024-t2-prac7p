const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());

const Item = mongoose.model('Item', { name: String });

app.post('/items', async (req, res) => {
    const item = new Item({ name: req.body.name });
    await item.save();
    res.status(201).send(item);
});

app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

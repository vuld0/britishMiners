const express = require('express');
const PORT = 8080;

const app = express();

// creating a get request
app.get('/', (req, res) => {
    res.send('chick chick boom!');
});

// middleware
app.use(express.json());

app.post('/card/:id', (req, res) => {
    const { id } = req.params;
    const { seller } = req.body;

    if (!seller) {
        res.status(418).send({ message: 'Please provide a seller' });
    }

    res.send({
        seller: `Graphics card with your seller ${seller} and ID of ${id} is here!`
    });

});
    
console.log('The App is running!!');
app.listen(PORT);
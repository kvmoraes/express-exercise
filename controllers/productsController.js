const { dataTshirts } = require('../db/products/tshirts');

const getProduct = async (req, res) => {
    const {id, size} = req.query;
    const selectTShirtId = dataTshirts.filter(tshirt => tshirt.id === id);
    console.log('Route: Products - TShirts GET');
    res.status(200).send(selectTShirtId);
} 

const createProduct = async (req, res) => {
    console.log('Route: Products - TShirts POST');
    const newDataTshirts = [...dataTshirts, req.body];
    res.status(200).send(newDataTshirts);
}

module.exports = {
    getProduct,
    createProduct
}
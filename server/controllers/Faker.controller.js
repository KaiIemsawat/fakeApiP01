const ProductModel = require("../models/Faker.model");

module.exports.getProduct = (req, resp) => {
    console.log(req.body);
    resp.json(ProductModel);
};

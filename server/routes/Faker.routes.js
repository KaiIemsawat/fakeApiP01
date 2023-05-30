const FakerController = require("../controllers/Faker.controller");

module.exports = (app) => {
    app.get("/api/products", FakerController.getProduct);
};

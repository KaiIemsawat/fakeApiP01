// we can create a function to return a random / fake "Product"
const { faker } = require("@faker-js/faker");

const ProductModel = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: faker.commerce.price({ min: 20, max: 100, dec: 0, symbol: "$" }),
        department: faker.commerce.department(),
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
    };
    return newFake;
};

module.exports = ProductModel();

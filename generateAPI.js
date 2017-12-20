module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        products:_.times(50,function(n){
            return {
                id: n,
                category: faker.commerce.department(),
                color:  faker.commerce.color(),
                name:faker.commerce.productName(),
                productAdjective:faker.commerce.productAdjective(),
                product: faker.commerce.product(),
                price:faker.commerce.price(),
                material:faker.commerce.productMaterial(),
                images : faker.image.abstract(),
                short_description: faker.lorem.sentence(),
                long_description: faker.lorem.paragraph()

                
            }
        })
    }
}
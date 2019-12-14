const { SubCategory } = require("./subcategory");

const resolvers = {
    Query: {
        subCategories: () => SubCategory.all()
    }
};

module.exports = {
  resolvers
};
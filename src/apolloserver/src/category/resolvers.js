const { Category } = require("./category");

const resolvers = {
    Query: {
        categories: () => Category.all()
    }
};

module.exports = {
    resolvers
}
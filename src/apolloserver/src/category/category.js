const { categories } = require("./data");

class Category {
    static all() {
        return categories;
    }
}

module.exports = {
    Category
};
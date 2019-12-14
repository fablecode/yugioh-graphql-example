const { SubCategoryData } = require("./data");

class SubCategory {
    static all() {
        return SubCategoryData.getAllSubCategories();
    }
}

module.exports = {
    SubCategory
};
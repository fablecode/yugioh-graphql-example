const MINUTE = 60;

class SubCategoryData {
    static getAllSubCategories() {

        const knex = require('knex')({
            client: 'mssql',
            connection: {
                connectionString: "Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=ygo;Data Source=msi",
                server: 'msi'
            }
        });

        return knex("SubCategory")
            .select()
            .finally(() => {
                knex.destroy();
            });
    }
}

module.exports = {
    SubCategoryData
};
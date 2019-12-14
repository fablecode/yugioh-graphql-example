const { gql } = require("apollo-server");

const typeDef = gql`
    type SubCategory {
        id: Int,
        name: String
    }
    
    extend type Query {
        subCategories: [SubCategory]
    }
`;

module.exports = {
    typeDef
};
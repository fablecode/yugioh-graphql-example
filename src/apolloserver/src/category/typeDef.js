const { gql } = require("apollo-server");

const typeDef = gql`
    type Category {
        id: Int
        name: String
    }
    
    extend type Query {
        categories: [Category]
    }
`;

module.exports = {
    typeDef
};
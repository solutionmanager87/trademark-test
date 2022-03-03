const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        trademarks: [Trademark]
        trademark(text: String!): [Trademark]
    }
    type Mutation {
        addTrademark(transactionCode: String!, kindMark: String!, markFeature: String!, markVerbalElementText: String!, registrationDate: String!): TrademarkResponse
        updateTrademark(id: ID!, transactionCode: String, kindMark: String, markFeature: String, markVerbalElementText: String, registrationDate: String): TrademarkResponse
        deleteTrademark(id: ID!): TrademarkResponse
    }
    type Trademark {
        id                   : ID!
        transactionCode      : String!
        kindMark             : String!
        markFeature          : String!
        markVerbalElementText: String!
        registrationDate     : String!
    }
    type TrademarkResponse {
        data : Trademark
        error: String
        ok   : Boolean
    }
`)

module.exports = schema
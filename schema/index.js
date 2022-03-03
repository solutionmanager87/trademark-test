const schema = require('./schema')
const query = require('./query')
const mutation = require('./mutation')

const resolvers = {
    ...query, ...mutation,
}

module.exports.resolver = resolvers
module.exports.schema = schema
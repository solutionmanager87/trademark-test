const db = require('./connect')
const TrademarkModel = require('./trademarks')
const trademarks = require('./dbUtils')

module.exports = {
    db,
    TrademarkModel,
    trademarks
}
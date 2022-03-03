const { trademarks } = require('../db/')

const query = {
    trademarks: async ({}, context) => {
        return await trademarks.getAllTrademarks()
    },
    trademark: async ({text}, context) => {
        return await trademarks.getTrademarkByMarkVerbalElementText(text)
    }
}

module.exports = query
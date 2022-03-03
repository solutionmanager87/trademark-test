const TrademarkModel = require('./trademarks')

const getAllTrademarks = async () => {
    return await TrademarkModel.find()
}

const getTrademarkByMarkVerbalElementText = async (text) => {
    return await TrademarkModel.fuzzySearch(text)
}

const createTrademark = async ({ transactionCode, kindMark, markFeature, markVerbalElementText, registrationDate }) => {
    return await TrademarkModel.create({ transactionCode, kindMark, markFeature, markVerbalElementText, registrationDate })
}

const updateTrademark = async (id, { transactionCode, kindMark, markFeature, markVerbalElementText, registrationDate }) => {
    const set = {};
    if (transactionCode) set.transactionCode = transactionCode
    if (kindMark) set.kindMark = kindMark
    if (markFeature) set.markFeature = markFeature
    if (markVerbalElementText) set.markVerbalElementText = markVerbalElementText
    if (registrationDate) set.registrationDate = registrationDate

    return await TrademarkModel.findByIdAndUpdate(id, set)
}

const deleteTrademark = async (id) => {
    return await TrademarkModel.findByIdAndDelete(id)
}

module.exports = {
    getAllTrademarks,
    getTrademarkByMarkVerbalElementText,
    createTrademark,
    updateTrademark,
    deleteTrademark
}
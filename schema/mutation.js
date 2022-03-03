const { trademarks } = require('../db/')

const mutation = {
    addTrademark: async ({ transactionCode, kindMark, markFeature, markVerbalElementText, registrationDate }, context) => {
        try {
            const trademark = await trademarks.createTrademark({ transactionCode, kindMark, markFeature, markVerbalElementText, registrationDate })
            return {
                data : trademark,
                ok   : true,
                error: ''
            };
        } catch (error) {
            return {
                data : null,
                ok   : false,
                error: error.message
            }
        }
    },

    updateTrademark: async ({ id, transactionCode, kindMark, markFeature, markVerbalElementText, registrationDate }, context) => {
        try {
            const trademark = await trademarks.updateTrademark(id, { transactionCode, kindMark, markFeature, markVerbalElementText, registrationDate })

            return {
                data : trademark,
                ok   : true,
                error: ''
            }
        } catch (error) {
            return {
                data : null,
                ok   : false,
                error: error.message
            }
        }
    },

    deleteTrademark: async ({ id }, context) => {
        try {
            const trademark = await trademarks.deleteTrademark(id)
            if (!trademark) {
                return {
                    data : null,
                    ok   : false,
                    error: 'Trademark not found'
                }
            }

            return {
                data : trademark,
                ok   : true,
                error: ''
            }
        } catch (error) {
            return {
                data : null,
                ok   : false,
                error: error.message
            }
        }
    }
};

module.exports = mutation
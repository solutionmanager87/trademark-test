const { Schema, model } = require('mongoose')
const fuzzy = require('mongoose-fuzzy-searching')

const tradeSchema = new Schema({
    transactionCode: {
        type    : String,
        required: true,
    },
    kindMark: {
        type    : String,
        required: true,
    },
    markFeature: {
        type    : String,
        required: true,
    },
    markVerbalElementText: {
        type    : String,
        required: true,
    },
    registrationDate: {
        type    : Date,
        required: true,
    }
})

tradeSchema.plugin(fuzzy, { fields: [ 'markVerbalElementText' ] })

module.exports = new model('Trademarks', tradeSchema)
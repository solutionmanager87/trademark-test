const { TrademarkModel } = require('../db/index')

const docs = [
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Figurative', markVerbalElementText: 'Hongtoo', registrationDate: new Date('2020-05-22') },
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Figurative', markVerbalElementText: 'M', registrationDate: new Date('2020-05-22') },
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Figurative', markVerbalElementText: 'ALOHA MEDICINALS natural products', registrationDate: new Date('2020-05-22') },
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Word', markVerbalElementText: 'OCYTOCIN', registrationDate: new Date('2020-05-22') },
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Word', markVerbalElementText: 'POLYPLEX', registrationDate: new Date('2020-05-27') },
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Figurative', markVerbalElementText: 'Siltec Silikon-Technik Siltec', registrationDate: new Date('2020-07-04') },
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Figurative', markVerbalElementText: 'REDMAGIC', registrationDate: new Date('2020-06-11') },
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Word', markVerbalElementText: 'M-FORCE', registrationDate: new Date('2020-06-17') },
  { transactionCode: 'EM-Trade Mark', kindMark: 'Individual', markFeature: 'Figurative', markVerbalElementText: 'L-UNICO', registrationDate: new Date('2020-07-18') },
];

module.exports = {
  async up(db, client) {

    const session = client.startSession();

    try {
      await session.withTransaction(async () => {
        for (let i = 0; i < docs.length; i ++) {
          const trademark = new TrademarkModel(docs[i])
          await trademark.save();
        }

        console.log('Number of documents inserted: ' + docs.length);
      })
    } finally {
      await session.endSession();
    }
  },

  async down(db, client) {
    const session = client.startSession();
    try {
      await session.withTransaction(async () => {
        await db.collection('trademarks').drop(function(err, delOk){
          if (err) throw err
          if (delOk) console.log('Collection deleted')
        })
      })
    } finally {
      await session.endSession();
    }
  }
};

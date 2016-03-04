/**
 * Module dependencies.
 */
var pesapal = require('../lib')({
  consumerKey: process.env.PESAPAL_KEY,
  consumerSecret: process.env.PESAPAL_SECRET,
  testing: true,
});


describe('pesapal', function(){

  describe('postDirectOrder', function(){

    it('create order', function(done){

      var postParams = {
        'oauth_callback': 'www.myorder.co.ke/oauth_callback'
      };
      var requestData = {
        'Amount': '1',
        'Description': '1',
        //'Type': '',
        'Reference': '1',
        'PhoneNumber': '254700111000',
        'LineItems': [
          {
            'uniqueid': '1',
            'particulars': 'PS4',
            'quantity': '1',
            'unitcost': '50000',
            'subTotal': '50000',
          }, {
            'uniqueId': '2',
            'particulars': 'Driveclub',
            'quantity': '1',
            'unitcost': '3000',
            'subTotal': '3000',
          }
        ]
      };

      console.log(pesapal.postDirectOrder(postParams, requestData));

      done();

    });

  });

  describe('queryPaymentStatus', function(){

    it('create order', function(done){

      var params = {
        'pesapal_merchant_reference': '000',
        'pesapal_transaction_tracking_id': '000'
      }

      console.log(pesapal.queryPaymentStatus(params))

      done();

    });

  });

  describe('queryPaymentStatusByMerchantRef', function(){

    it('create order', function(done){

      var params = {
        'pesapal_merchant_reference': '000'
      }

      console.log(pesapal.queryPaymentStatusByMerchantRef(params))

      done();

    });

  });

  describe('queryPaymentDetails', function(){

    it('create order', function(done){

      var params = {
        'pesapal_merchant_reference': '000',
        'pesapal_transaction_tracking_id': '000'
      }

      console.log(pesapal.queryPaymentDetails(params))

      done();

    });

  });

});

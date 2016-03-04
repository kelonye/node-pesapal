
## Install

    $ npm install pesapal --save


## Getting started

- Signup for a business account at [pesapal.com](http://www.pesapal.com).
- Note the credentials sent via email.

```js

var pesapal = require('pesapal')({
  consumerKey: 'consumer_key',
  consumerSecret: 'consumer_secret',
  testing: false,
});


// post a direct order

var postParams = {
  'oauth_callback': 'https://www.example.com/post_payment_page/'
}
var requestData = {
  'Amount': '100',
  'Description': 'E-book purchase',
  'Type': 'MERCHANT',
  'Reference': '12erwe',
  'PhoneNumber': '0700111000'
}
var url = pesapal.postDirectOrder(postParams, requestData)


// get order status

var postParams = {
  'pesapal_merchant_reference': '000',
  'pesapal_transaction_tracking_id': '000'
}
var url = pesapal.queryPaymentStatus(postParams)

// get order status by ref

var postParams = {
  'pesapal_merchant_reference': '000'
}
var url = pesapal.queryPaymentStatusByMerchantRef(postParams)


// get detailed order status

var postParams = {
  'pesapal_merchant_reference': '000',
  'pesapal_transaction_tracking_id': '000'
}
var url = pesapal.queryPaymentDetails(postParams)


// once you've generated the url
// make request to pesapal

var request = require('superagent');
request()
  .get(url)
  .end(function(err, response){
    if (err) // handle error
    console.log(request.body); // parse response as documented at http://developer.pesapal.com/how-to-integrate/api-reference
  });

```

## Express

For a more opionated solution, checkout [express-pesapal](https://github.com/kelonye/express-pesapal)(WIP).

## Api

### consumerKey

configurable consumer key

### consumerSecret

configurable consumer secret

### testing
  
variable that sets the base api url as http://demo.pesapal.com/api/ or https://www.pesapal.com/api/

### postDirectOrder(postParams, requestData)
  
returns order url

`postParams` is a dictionary containing:

  - Amount
  - Description
  - Type
  - Reference
  - Email or/and PhoneNumber
  - Currency ( optional )
  - FirstName ( optional )
  - LastName ( optional )
  - LineItems ( optional )

#### Line Items

This is an array of the products contained in the order:

```js

{
  LineItems: [
    {
      'uniqueid': '',
      'particulars': '',
      'quantity': '',
      'unitcost': '',
      'subTotal': ''
    }
  ]
}

```

`requestData` is a dictionary containing:
  
  - oauth_callback

### queryPaymentStatus(options)

returns url to retrive payment status

`options` is a dictionary containing:

  - pesapal_merchant_reference
  - pesapal_transaction_tracking_id

### queryPaymentStatusByMerchantRef(options)

returns url to retrive payment status

`options` is a dictionary containing:
  
  - pesapal_merchant_reference

### queryPaymentDetails(options)

returns url to retrive a detailed status of a payment

`options` is a dictionary containing:

  - pesapal_merchant_reference
  - pesapal_transaction_tracking_id

## Test

    $ make test

## Similar

## License

MIT

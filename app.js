var paypal = require('paypal-rest-sdk');
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
  'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
});




var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "credit_card",
        "funding_instruments": [{
            "credit_card": {
                "type": "visa",
                "number": "4417119669820331",
                "expire_month": "11",
                "expire_year": "2018",
                "cvv2": "874",
                "first_name": "Joe",
                "last_name": "Shopper",
                "billing_address": {
                    "line1": "52 N Main ST",
                    "city": "Johnstown",
                    "state": "OH",
                    "postal_code": "43210",
                    "country_code": "US"
                }
            }
        }]
    },
    "transactions": [{
        "amount": {
            "total": "7",
            "currency": "USD",
            "details": {
                "subtotal": "5",
                "tax": "1",
                "shipping": "1"
            }
        },
        "description": "This is the payment transaction description."
    }]
};
//console.log('here');

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        //console.log("Create Payment Response");
        //console.log(payment);
    }
});


var search_attr = {
    "start_invoice_date": "2010-05-10 PST",
    "end_invoice_date": "2014-04-10 PST",
    "page": 1,
    "page_size": 3,
    "total_count_required": true
};

paypal.invoice.search(search_attr, function (error, results) {
    if (error) {
        throw error;
    } else {
        //console.log("Invoice Search Response");
        //console.log(results);
    }
});

var accountSid = 'AC07275e4294f1b0d42623c3ec9559911e';
var authToken = "650d049a9bd99323fb899ce4b9e84fcc";
var client = require('twilio')(accountSid, authToken);
client.messages.create({
    body: "Alarm",
    to: "+16692269411",
    from: "+14694164117"
}, function(err, message) {
    //console.log(err);
    console.log(message);
     
});
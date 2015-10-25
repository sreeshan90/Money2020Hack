var paypal = require('paypal-rest-sdk');
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AeKFTEWOLJ3zEjq116kQAXhVy2-RINQNC7Er4aakfhFWkaOmDL4yZS3IkbG7RaZqPolH60G7e4wOIII5',
  'client_secret': 'EJctgdv0F9vbM04pcf5TiUmwkI-XRZsumjhA-yBhjNHc_fIMEdr-nOXHhkZ_bHXavTQXAhSv074fsZv5'
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



paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});


var listPayment = {
    'count': '3',
    'start_index': '1'
};


paypal.payment.list(listPayment, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("List Payments Response");
        console.log(payment);
    }
});

var creditCardId = "CARD-2MW305457R2279623KYWLDAI";

paypal.creditCard.get(creditCardId, function (error, credit_card) {
    if (error) {
        throw error;
    } else {
        console.log("Retrieve Credit Card Response");
        console.log(JSON.stringify(credit_card));
    }
});

/*
var accountSid = 'AC07275e4294f1b0d42623c3ec9559911e';
var authToken = "650d049a9bd99323fb899ce4b9e84fcc";
var client = require('twilio')(accountSid, authToken);
client.messages.create({
    body: "Alarm",
    to: "+14694509828",
    from: "+14694164117"
}, function(err, message) {
    //console.log(err);
    console.log(message);
     
});*/
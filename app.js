var app = require('express')();
var express = require('express');
var cfenv = require('cfenv');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var paypal = require('paypal-rest-sdk');
var accountSid = 'AC07275e4294f1b0d42623c3ec9559911e';
var authToken = "650d049a9bd99323fb899ce4b9e84fcc";
var client = require('twilio')(accountSid, authToken);
app.use(cors());
app.use(bodyParser.json());

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
  'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
});
app.listen(1337, '127.0.0.1', function() {
    console.log("server starting on " + 1337);
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
var flag=false;
app.get('/createPayment',function(req,res){
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            flag=true;
            res.end();
        }
    });
});

var search_attr = {
    "start_invoice_date": "2010-05-10 PST",
    "end_invoice_date": "2014-04-10 PST",
    "page": 1,
    "page_size": 3,
    "total_count_required": true
};

app.get('/checkPayment',function(req,res){
    paypal.invoice.search(search_attr, function (error, results) {
        if (error) {
            throw error;
        } else {
            if(flag){
                flag=false;
                res.end('1');
            }
            else
                res.end('0');
        }
    });
});

app.get("/sendSms", function(req, res) {
    console.log(req.query.number);
    client.messages.create({
        body: "Your Bill is ",
        to: "+1"+req.query.number,
        from: "+14694164117"
    }, function(err, message) {
        console.log(message);
        res.end();
    });
});
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { endpoint } = require("firebase-tools/lib/utils");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51KLhpISEcZwIqVhYbKpZuFVFPBKNhYyL5B9PENAEnbDQYVSlKjrpCCNDcTENAG37iVqcKxOZi4tFw4fiamuYPuda00c54O9LcM")
// Above is the Secret key in Developers API section in Stripe website

// STEPS FOR API :-
//  - App Config
//  - Middlewares
//  - API routes
//  - Listen command


//  App Config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//  API routes
app.get('/', (request, response) => response.status(200).send('hello world'))


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    })

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//  Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/unofficial-a6378/us-central1/api
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: 'sandbox', // Change this to 'live' for production
  client_id: "",
  client_secret: "",
});

module.exports = paypal;

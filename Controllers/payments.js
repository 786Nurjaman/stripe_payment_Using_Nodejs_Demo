const stripe = require('stripe')('sk_test_51KPkZ4SGVKVKwIBFhTFwU0vsRRXYkqR46EqnGDH0KmUrMbELKpFDEqwwgvkUxuFtaGKtfBiUbvgVE7yZjT4wzplO00W0s6Dr6a')


exports.payment = async (req, res) => {
    const product = await stripe.products.create({
         name: 'Nodejs Book ',
    });
    const price = await stripe.prices.create({
        product: product.id,
        unit_amount: 20000.00,
        currency: 'inr',
    });
const session = await stripe.checkout.sessions.create({
  line_items: [{
    price: price.id,
    quantity: 1,
  }],
  mode: 'payment',
  success_url: 'http://localhost:8484/success',
  cancel_url: 'http://localhost:8484/err',
});
    
  res.redirect(303, session.url);
}

exports.success = (req, res) => {
    res.sendFile(__dirname + '/success.html');
}

exports.fail = (req, res) => {
    res.sendFile(__dirname + '/err.html');
}
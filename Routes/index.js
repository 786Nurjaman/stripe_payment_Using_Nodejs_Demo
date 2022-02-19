const express = require('express')
const router = express.Router();

const PaymentController = require('../Controllers/payments')

router.post('/payment', PaymentController.payment)
router.get('/success',PaymentController.success)
router.get('/fail',PaymentController.fail)

module.exports = router;

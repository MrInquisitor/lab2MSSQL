const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
router
    .route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.createNewCustomer);
router
    .route('/:id')
    .get(customerController.getCustomersByID)
    .patch(customerController.patchCustomersById)
    .delete(customerController.deleteCustomersByID);
module.exports = router;
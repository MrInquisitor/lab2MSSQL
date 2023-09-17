const express = require('express');
const router = express.Router();
const customerController = require('../controllers/salesController');
router
    .route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.createNewSutomers);
router
    .route('/:id')
    .get(customerController.getCustomerByID)
    .patch(customerController.patchCustomersById)
    .delete(customerController.deleteCustomersByID);
module.exports = router;
const express = require('express')
const router = express.Router()
const enquiryFormController = require('../controllers/enquiryForm')



router.post('/',enquiryFormController.store)
router.get('/',enquiryFormController.fetch)
router.delete('/',enquiryFormController.deleteData)

module.exports = router



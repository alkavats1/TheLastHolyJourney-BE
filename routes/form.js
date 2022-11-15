const express = require('express')
const router = express.Router()
const FormController = require('../controllers/RegistrationController')



router.post('/',FormController.store)
router.get('/',FormController.fetch)
router.delete('/',FormController.deleteData)

module.exports = router



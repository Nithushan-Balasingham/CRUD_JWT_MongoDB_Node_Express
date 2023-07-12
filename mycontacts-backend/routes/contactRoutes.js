const express = require("express")
const router = express.Router()
const {getContacts,getContact,deleteContact,updateContact,createContact} = require("../controllers/contactController")
const validToken = require("../middleware/validateToken")

router.use(validToken)
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports = router
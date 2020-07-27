const express = require("express");
const router = express.Router();

//@route    GET api/contacts
//@desc     Get all user contacts
//@access   Private
router.get("/", (req, res) => res.send("Get all contacts"));

//@route    POST api/contacts
//@desc     Add new contacts
//@access   Private
router.post("/", (req, res) => res.send("Add contacts"));

//@route    PUT api/contacts/:id
//@desc     Update Contacts
//@access   Private
router.put("/:id", (req, res) => res.send("Update contacts"));

//@route    DELETE api/contacts/:id
//@desc     Delete Contacts
//@access   Private
router.delete("/:id", (req, res) => res.send("Delete contacts"));

module.exports = router;

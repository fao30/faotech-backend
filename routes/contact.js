const router = require("express").Router();
const {
  createContact,
  getAllContact,
  getContactByUuid,
  updateContact,
  deletedContact,
} = require("../controller/contactCont");
const passport = require("passport");

// get all contacts info
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllContact
);

// get contact by uuid
router.get(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  getContactByUuid
);

// create a new contact
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createContact
);

// update contact
router.patch(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  updateContact
);

// delete contact
router.delete(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  deletedContact
);

// error handling
router.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = router;

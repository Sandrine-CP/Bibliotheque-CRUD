const express = require("express");

const router = express.Router();

require("dotenv").config();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const bookRouter = require("./book/bookRouter");

router.use("/book", bookRouter);

/* ************************************************************************* */

module.exports = router;

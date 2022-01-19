const { Router } = require('express');

const { checkDate } = require("../middlewares/middlewares");

const {
  getIndex,
  getDate
} = require('../controllers/controllers');

const router = Router();

router.get("/", getIndex);

router.get("/api/:date?", checkDate, getDate);

module.exports = router;
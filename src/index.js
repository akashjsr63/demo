const express = require('express');
const router = express.Router();
const DataModel = require('../models/dataModel');
const MsgModel = require('../models/msgModel'); 
const multer = require('multer');
const upload = multer();
const path = require('path');
const hbs = require('hbs')
router.use(express.static(path.resolve('./public')));

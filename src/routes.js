const express = require ('express');
const multer = require ('multer');
const uploadConfig = require ('./config/upload');

const SessionController = require('./controllers/SessionCOntroller');
const SpotController = require('./controllers/SpotController');
const routes = express.Router();
const upload = multer (uploadConfig);
routes.post('/sessions', SessionController.store);

routes.post('/spot',  upload.single ('thumbnail'), SessionController.store)
    module.exports = routes

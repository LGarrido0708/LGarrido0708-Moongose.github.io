module.exports = function (app) {

	var express = require("express");
	var router = express.Router();

	const create = require('../controller/create.js');
	const retrieve = require('../controller/retrieve.js');
	const update = require('../controller/update.js');
	const deleted = require('../controller/delete.js');

	var path = __basedir + '/views/';

	router.use(function (req, res, next) {
		console.log("/" + req.method);
		next();
	});

	app.get('/', (req, res) => {
		res.sendFile(path + "index.html");
	});

	app.get("/item/retrieve/:item", (req, res) => {
		if (req.params.item != "all") {
			// Retrieve  Item
			retrieve.findId(res, req.params.item)
		}
		else {
			// Retrieve all Item
			retrieve.findAll(res)
		}

	})
	app.post('/item/create', (req, res) => {
		create.save(req.body, res)
	});

	app.get('/item/delete/:id', (req, res) => {
		deleted.delete(req.params.id, res)
	});

	app.post('/item/update/:id', (req, res) => {
		update.update(req.params.id, res)
	});

}
(function () {

	var router = require('express').Router();
	var db = require('./db');

// router.route('/managers/:id?')
// .get(getManagers)
// .post(createManager)
// .put(updateManager)

router.route('/employees/:id?')
.get(getEmployees)
.post(createEmployee)
.put(updateEmployee)

	
	router.use(defaultErrorHandler);

	// function getManagers(req, res, next) {

	// 	db.getMangers().then(
	// 		function (managers) {
	// 			res.json({
	// 				ok: true,
	// 				data: managers
	// 			});
	// 		}
	// 	);
	// }	
	
	// function createManager(req, res, next) {

	// 	db.addManager(req.body.name, req.body.description).then(
	// 		function (manager) {
	// 			res.json({
	// 				ok: true,
	// 				data: manager
	// 			});
	// 		}
	// 	);
	// }	
	
	// function updateManager(req, res, next) {

	// 	db.saveManager(req.body).then(
	// 		function (manager) {
	// 			res.json({
	// 				ok: true,
	// 				data: manager
	// 			});
	// 		}
	// 	);
	// }
	
	function getEmployees(req, res, next) {

		db.getEmployees().then(
			function (employees) {
				res.json({
					ok: true,
					data: employees
				});
			}
		);
	}	
	
	function createEmployee(req, res, next) {

		db.addEmployee(req.body.summary, req.body.detail).then(
			function (employee) {
				res.json({
					ok: true,
					data: employee
				});
			}
		);
	}	
	
	function updateEmployee(req, res, next) {

		db.saveEmployee(req.body).then(
			function (employee) {
				res.json({
					ok: true,
					data: employee
				});
			}
		);
	}	
	
	
		
	
	function defaultErrorHandler(err, req, res, next) {
		
		res.json({
			ok: false,
			error: err
		});
	}

	exports.router = router;
	
})();

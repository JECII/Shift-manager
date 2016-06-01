(function () {

	var path = require('path');	
	var uuid = require('node-uuid');	
	var JSData = require('js-data');	
	var DSSqlAdapter = require('js-data-sql');
	
	var store = new JSData.DS();
	// var schemator = new Schemator();
	var adapter = new DSSqlAdapter({
		lient: 'mysql',
			acquireConnectionTimeout: 10000,
			connection: {
				host:"127.0.0.1",
				port:3306,
				user:"root",
				password:"Thursday66",
				database:"friends"
			}
	});

	store.registerAdapter('sql', adapter, { default: true });

	// var Manager = store.defineResource({
	// 	name: 'manager',
	// 	filepath: path.join(__dirname, '/data/managerData.db'),
	// 	relations: {
	// 		hasMany: {
	// 			employee: {
	// 				localField: 'employees',
	// 				foreignKey: 'managerId'
	// 			}
	// 		}
	// 	}
	// });	
	
	var Employee = store.defineResource({
		name: 'employee',
		filepath: path.join(__dirname, '/data/employeeData.db'),
		relations: {
			belongsTo: {
				employees: {
					localField: 'employee',
					foreignKey: 'employeeId'
				}
			}
		}
	});	

	function getEmployee() {

		var params = {};
		
		var options = {
			with: ['employee']
		};
		
		return Employees.findAll(params, options);	
	}
	
	// function addManager(name, description) {

	// 	return Manager.create({
	// 		id: uuid.v4(),
	// 		name: name
	// 	});			
	// }	
	
	// function saveManager(manager) {

	// 	return Manager.update(manager.Id, manager);				
	// }	
	
	// function deleteManager(manager) {

	// 	return Manager.destroy(manager.Id);				
	// }	
	
	function getEmployees() {
		
		return Employee.findAll();	
	}
	
	function addEmployee(employeeId, summary, detail) {

		return Employee.create({
			id: uuid.v4(),
			managerId: employeeId,
			summary: summary,
			detail: detail
		});		
	}	
	
	function saveEmployee(employee) {

		return Employees.update(employee.Id, employee);				
	}	
	
	function deleteEmployee(employee) {

		return Employee.destroy(employee.Id);				
	}	
	
	module.exports = {
		// getManagers: getManagers,
		// addManager: addManager,
		// saveManager: saveManager,
		// deleteManager: deleteManager,
		getEmployees: getEmployees,
		addEmployee: addEmployee,
		saveEmployee: saveEmployee,
		deleteEmployee: deleteEmployee
	};
})();
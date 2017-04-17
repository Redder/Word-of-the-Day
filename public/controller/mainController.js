var wordOfTheDayApp = angular.module('wordOfTheDayApp', []);

wordOfTheDayApp.controller('mainCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {
	$log.debug('Starting...');
	var mC = this;	// Setting mC as this

	var socket = io.connect('http://localhost:3000', { reconnect: true}, function(s) {
		$log.error(s);
	});	// Connects to socket!
	
	socket.on('message', function(data) {
		// If we have data then we are connected if not, tell the user we are not connected
		if (data) {
			$log.info('Connected to Server'); //Log Conneced to the Server

		} else {
			$log.error('Could not connect to Server!');	// log error
			alert('Could not connect to Server! \n I will refresh the page');
			location.reload();
		}
	
	});


		
	aC.addContact = function() {
		$http.post("/api/addContact", JSON.stringify(aC.contact)).then(function(res){
			$log.debug('Adding Contact...');
			if (res.status === 200) {
				$log.info('Added Contact...');

				aC.contact.name = '';
				aC.contact.email = '';
				aC.contact.number = '';

				console.log(res.data);
				aC.refreshList();
			} else {
				$log.error('Did not receive 200 Status Code');
			};
		});
	}
	aC.refreshList = function() {
		$http.get('/contactList').then(function(res) {
			$log.debug('Refreshing List...');
			console.log(res);
			if (res.status === 200) {
				$log.info('Refreshed List...');
				aC.contactList = res.data
			} else {
				$log.error('Did not receive 200 Status Code');
			};
			
		});
	}

	aC.remove = function(id) {
		$log.debug('Removing ' + id);
		$http.delete('/contactList/' + id).then(function(res) {
			console.log(res);
			aC.refreshList();
		});
	}
	aC.refreshList();
}]);


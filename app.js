var app = angular.module('guess', ['angular-timeline']);

app.controller('GuessController', function GuessController($scope,$timeout) {
    $scope.counter = 0;
    $scope.onTimeout = function(){
        $scope.counter++;
        mytimeout = $timeout($scope.onTimeout,1000);
    }

    $scope.verify = function () {
        $scope.difference = $scope.original - $scope.user;
        $scope.tries = $scope.tries + 1;
    }
    $scope.initializeGame = function () {
        $scope.tries = 0;
        $scope.original = Math.floor((Math.random() * 1000) + 1);
        $scope.user = null;
        $scope.difference = null;
    }
    $scope.reloadRoute = function() {
    	location.reload();
	}

    $scope.addEvent = function() {
    if ($scope.difference > 0) {x = 'Your try is lower ';}
    else if ($scope.difference < 0){x = 'Your try is higher';}
    else {x = "Hohoho! We have a winner";}
	$scope.events.push({
		badgeClass: 'info',
		badgeIconClass: 'glyphicon-check',
		title: $scope.user,
		when: $scope.counter,
		content: x
		});
	}
	$scope.events = [ ];
    $scope.initializeGame();
});


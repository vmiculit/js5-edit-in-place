
angular.module("js5",[])

angular.module("js5")
	.controller("js5Troller",["$scope","$timeout", function($scope, $timeout) {

		$scope.user = {
			name : "John Doe",
			email : "john@someplace.com",
			password : "secret"
		}

		$scope.inputSwitch = [
			false,
			false,
			false
		]

		$scope.textboxSwitch = [
			true,
			true,
			true
		]

		$scope.swapFieldsOn = function(n, event) {

			$scope.inputSwitch[n] = !$scope.inputSwitch[n]
			$scope.textboxSwitch[n] = !$scope.textboxSwitch[n]

			$timeout(function() {
				event.target.nextElementSibling.focus()
			})

		}

		$scope.swapFieldsOff = function(n, event) {

			$scope.inputSwitch[n] = !$scope.inputSwitch[n]
			$scope.textboxSwitch[n] = !$scope.textboxSwitch[n]

		}


}])

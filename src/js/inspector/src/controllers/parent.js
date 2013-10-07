angular.module('inspector.controllers')

    .controller('ParentCtrl', ['$scope', 'logger', '$window', function ($scope, logger, $window) {

        $scope.name = {
            first: 'ControllerFirstName',
            last: 'ControllerLastName'
        };
        $scope.description = "ControllerDescription";

    }]);
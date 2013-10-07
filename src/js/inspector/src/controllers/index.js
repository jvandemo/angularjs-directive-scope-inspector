angular.module('inspector.controllers')

    .controller('IndexCtrl', ['$scope', 'logger', '$window', function ($scope, logger, $window) {

        logger.info('IndexCtrl loaded!');

    }]);
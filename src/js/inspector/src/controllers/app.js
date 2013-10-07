/**
 * Main controller that holds some global data
 */

angular.module('inspector.controllers')

    .controller('AppCtrl', ['$scope', 'logger', '$window', function ($scope, logger, $window) {

        logger.info('AppCtrl loaded!');

    }]);
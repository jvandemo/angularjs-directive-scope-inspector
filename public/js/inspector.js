/**
 * @license JobberID
 * (c) 2013 JobberID http://www.jobberid.com
 * @author Jurgen Van de Moere
 */
(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('inspector.config', [])
    .value('inspector.config', {
        debug: true,
        linkingFn: function (scope, iElement, iAttrs) {
            scope.name = scope.name || {};
            scope.name.first = 'DirectiveFirstName';
            scope.toys = [
                'DirectiveToy1',
                'DirectiveToy2'
            ];
            scope.description = "DirectiveDescription";
        }
    });

// iServe
angular.module('inspector.controllers', []);
angular.module('inspector.directives', []);
angular.module('inspector.filters', []);
angular.module('inspector.models', []);
angular.module('inspector.services', []);
angular.module('inspector',
    [
        'inspector.config',
        'inspector.controllers',
        'inspector.directives',
        'inspector.filters',
        'inspector.models',
        'inspector.services'
    ]);
/**
 * Main controller that holds some global data
 */

angular.module('inspector.controllers')

    .controller('AppCtrl', ['$scope', 'logger', '$window', function ($scope, logger, $window) {

        logger.info('AppCtrl loaded!');

    }]);angular.module('inspector.controllers')

    .controller('IndexCtrl', ['$scope', 'logger', '$window', function ($scope, logger, $window) {

        logger.info('IndexCtrl loaded!');

    }]);angular.module('inspector.controllers')

    .controller('ParentCtrl', ['$scope', 'logger', '$window', function ($scope, logger, $window) {

        $scope.name = {
            first: 'ControllerFirstName',
            last: 'ControllerLastName'
        };
        $scope.description = "ControllerDescription";

    }]);angular.module('inspector.directives')

    .directive('childScope', ['inspector.config', function (inspectorConfig) {
        return {
            restrict: 'A',
            scope: true,
            link : inspectorConfig.linkingFn,
            templateUrl: 'tplDirective'
        };
    }]);angular.module('inspector.directives')

    .directive('highlight', ['inspector.config', function (inspectorConfig) {
        return {
            require: '?ngModel',
            link: function (scope, iElement, iAttrs, ngModelController) {
                if (!ngModelController) {
                    return;
                }

                ngModelController.$render = function () {
                    iElement.val(ngModelController.$viewValue || '');
                    // iElement.css('color', '#ff0000');
                    iElement.addClass('inspector-highlight');
                    setTimeout(
                        function () {
                            // iElement.css('color', "#000000");
                            iElement.removeClass('inspector-highlight');
                        },
                        5000
                    );
                };

            }
        };
    }]);angular.module('inspector.directives')

    .directive('isolateScope', ['inspector.config', function (inspectorConfig) {
        return {
            restrict: 'A',
            scope: {},
            link : inspectorConfig.linkingFn,
            templateUrl: 'tplDirective'
        };
    }]);angular.module('inspector.directives')

    .directive('noScope', ['inspector.config', function (inspectorConfig) {
        return {
            restrict: 'A',
            scope: false,
            link : inspectorConfig.linkingFn,
            templateUrl: 'tplDirective'
        };
    }]);/**
 * @ngdoc object
 * @name service:logger
 * @requires $log
 *
 * @description
 * Simple service for logging. Default implementation writes the message
 * into the browser's console (if present).
 *
 * The main purpose of this service is to simplify debugging and troubleshooting.
 *
 * This service proxies all methods to the AngularJS $log service and offers
 * one extra method: dir.
 *
 * The dir method can be used to hierarchically display object properties.
 *
 * @example
 <example>
 <file name="script.js">
 function LogCtrl($scope, logger) {
         $scope.logger = logger;
         $scope.message = 'Hello World!';
       }
 </file>
 <file name="index.html">
 <div ng-controller="LogCtrl">
 <p>Reload this page with open console, enter text and hit the log button...</p>
 Message:
 <input type="text" ng-model="message"/>
 <button ng-click="logger.log(message)">log</button>
 <button ng-click="logger.warn(message)">warn</button>
 <button ng-click="logger.info(message)">info</button>
 <button ng-click="logger.error(message)">error</button>
 <button ng-click="logger.dir(message)">dir</button>
 </div>
 </file>
 </example>
 */

angular.module('inspector.services')
    .factory('logger', ['$log', function ($log) {

        // Create service
        var service = {};

        // Proxy regular methods to $log
        angular.forEach(['log', 'info', 'warn', 'error'], function (method) {
            service[method] = function () {
                return $log[method](arguments);
            };
        });


        // Add dir method to hierarchically display objects
        service.dir = function (obj, title) {
            if (window.console) {
                if (angular.isDefined(title)) {
                    $log.info(title + ':');
                }
                window.console.dir(obj);
            }
        };

        return service;
    }]);

})(window, document);
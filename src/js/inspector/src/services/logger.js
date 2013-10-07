/**
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
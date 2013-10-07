angular.module('inspector.directives')

    .directive('isolateScope', ['inspector.config', function (inspectorConfig) {
        return {
            restrict: 'A',
            scope: {},
            link : inspectorConfig.linkingFn,
            templateUrl: 'tplDirective'
        };
    }]);
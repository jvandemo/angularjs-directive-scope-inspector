angular.module('inspector.directives')

    .directive('childScope', ['inspector.config', function (inspectorConfig) {
        return {
            restrict: 'A',
            scope: true,
            link : inspectorConfig.linkingFn,
            templateUrl: 'tplDirective'
        };
    }]);
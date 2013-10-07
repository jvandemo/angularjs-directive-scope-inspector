angular.module('inspector.directives')

    .directive('noScope', ['inspector.config', function (inspectorConfig) {
        return {
            restrict: 'A',
            scope: false,
            link : inspectorConfig.linkingFn,
            templateUrl: 'tplDirective'
        };
    }]);
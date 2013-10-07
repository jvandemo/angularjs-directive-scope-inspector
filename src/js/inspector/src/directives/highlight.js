angular.module('inspector.directives')

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
    }]);
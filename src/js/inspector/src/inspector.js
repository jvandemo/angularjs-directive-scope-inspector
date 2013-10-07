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

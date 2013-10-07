'use strict';

describe('IndexCtrl', function() {

    var ctrl;
    var $scope;

    // Load module
    beforeEach(module('inspector'));

    beforeEach(inject(function($rootScope, $controller) {

        // Create scope
        $scope = $rootScope.$new();

        // Create controller
        ctrl = $controller('IndexCtrl', {
            $scope: $scope
        });

    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

});
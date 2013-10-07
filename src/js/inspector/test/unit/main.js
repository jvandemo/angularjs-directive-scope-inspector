'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('Core module', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('inspector');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('inspector.config')).toBeTruthy();
    });

    it('should load core controllers module', function() {
        expect(hasModule('inspector.controllers')).toBeTruthy();
    });

    it('should load core filters module', function() {
        expect(hasModule('inspector.filters')).toBeTruthy();
    });

    it('should load core services module', function() {
        expect(hasModule('inspector.services')).toBeTruthy();
    });

    it('should load core directives module', function() {
        expect(hasModule('inspector.directives')).toBeTruthy();
    });

});

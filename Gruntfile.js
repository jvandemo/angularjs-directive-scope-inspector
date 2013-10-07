module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ''
            },
            inspector: {
                src: [
                    'src/js/inspector/src/inspector.prefix',
                    'src/js/inspector/src/inspector.js',
                    'src/js/inspector/src/controllers/**/*.js',
                    'src/js/inspector/src/directives/**/*.js',
                    'src/js/inspector/src/filters/**/*.js',
                    'src/js/inspector/src/models/**/*.js',
                    'src/js/inspector/src/services/**/*.js',
                    'src/js/inspector/src/inspector.suffix'
                ],
                dest: 'public/js/inspector.js'
            },
            buildJavaScript: {
                src: [
                    'public/bower/json2/json2.js',
                    'public/bower/jquery/jquery.js',
                    'public/bower/bootstrap/dist/js/bootstrap.js',
                    'public/bower/angular/angular.js',
                    'public/bower/html5shiv/dist/html5shiv.js'
                ],
                dest: 'public/js/build.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            inspector: {
                files: {
                    'public/js/inspector.min.js': ['<%= concat.inspector.dest %>']
                }
            },
            buildJavaScript: {
                files: {
                    'public/js/build.min.js': ['<%= concat.buildJavaScript.dest %>']
                }
            }
        },
        jshint: {
            beforeConcat: {
                src: ['gruntfile.js', 'src/js/inspector/src/**/*.js']
            },
            afterConcat: {
                src: [
                    '<%= concat.inspector.dest %>'
                ]
            },
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    angular: true
                },
                globalstrict: false
            }
        },
        less: {
            bootstrap: {
                files: {
                    "public/css/bootstrap/bootstrap.css": "src/css/bootstrap/bootstrap.less"
                }
            },
            inspector: {
                files: {
                    "public/css/inspector.css": "src/css/inspector.less"
                }
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'src/jade/public',      // Src matches are relative to this path.
                        src: ['**/*.jade'], // Actual pattern(s) to match.
                        dest: 'public/',   // Destination path prefix.
                        ext: '.html'    // Dest filepaths will have this extension.
                    }
                ]
            }
        },
        watch: {
            options: {
                livereload: 35755
            },
            files: [
                'Gruntfile.js',
                'src/**/*'
            ],
            tasks: ['default']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerTask('default', ['less', 'jade', 'jshint:beforeConcat', 'concat', 'jshint:afterConcat', 'uglify']);
    grunt.registerTask('livereload', ['default', 'watch']);

};
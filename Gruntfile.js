module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['eslint', 'browserify','watch' ]);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'src/js/app/**/*.js',
                dest: 'public/assets/js/app.js'
            }
        },
        eslint: {
            options: {
                format: require('eslint-json'),
                outputFile: "report.json"

            },
            target: ["src/js/app/**/*.js"]
        },

        //copy: {
        //    main: {
        //        cwd: 'src/js/app/views/',
        //        expand: true,
        //        src: '**.html',
        //        dest: 'public/views/'
        //    }
        //},
        watch: {
            files: ['src/js/app/**/*.js', 'src/js/app/views/**/*.html'],
            tasks: ['default']
        }
    });
};
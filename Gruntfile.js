module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/* Created by Miguel Palacio <migpalg@gmail.com> */',
      },
      build: {
        src: 'src/js/app.js',
        dest: 'dist/js/app.min.js'
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
      },
      target: {
        files: {
          'dist/css/styles.min.css': ['src/css/normalize.css', 'src/css/styles.css'],
        }
      }
    },
    replace: {
      target: {
        options: {
          patterns: [
            {
              match: /\.js\"/g,
              replacement: '.min.js"',
            },
            {
              match: /<link rel="stylesheet" href="css\/normalize\.css">/,
              replacement: '',
            },
            {
              match: /\.css"/,
              replacement: '.min.css"',
            }
          ],
        },
        files: [
          {expand: true, flatten: true, src: ['src/*.html'], dest: 'dist/'}
        ]
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['uglify', 'cssmin', 'replace']);
}

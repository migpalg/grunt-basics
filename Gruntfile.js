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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
}

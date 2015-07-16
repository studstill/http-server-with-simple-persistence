var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('default', ['lint'], function() {});

gulp.task('lint', function() {
  return gulp.src(['*.js', '*/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter('jshint-stylish'));
});




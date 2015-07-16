var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var startServer = require('./server.js').startServer;

gulp.task('default', ['lint'], function() {});

// gulp.task('serve', function() {
//   startServer();
// });

gulp.task('test', function() {
  return gulp.src(['*.js', '*/*.js'])
             .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src(['*.js', '*/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter('jshint-stylish'));
});

gulp.watch(['*.js', 'test/*js'], ['test', 'lint'], function() {});




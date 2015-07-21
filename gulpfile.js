var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var sass = require('gulp-sass');

/* SASS */

gulp.task('sass', function() {
  gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});


/* Reactify */

gulp.task('reactify', function(){
  var bundle = browserify({
    entries: './src/js/app.js',
    debug: true })
  .transform('reactify')
  .bundle()
  .pipe(source('deps.min.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('reactify:watch', function() {
  gulp.watch('./src/js/**/*', ['reactify']);
});

gulp.task('default', ['reactify:watch']);

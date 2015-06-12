var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  rename = require('gulp-rename'),
  jshint = require('gulp-jshint'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass');

gulp.task('delete', function() {
  del(['assets/css/*','assets/js/script.min.js'], function(err) {
    console.log('Files deleted');
  })
});

gulp.task('sass', function () {
  gulp.src('css/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('style', function() {
  return gulp
    .src('css/*.css')
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('script', function() {
  return gulp
    .src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(jshint())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/js'));
})

gulp.task('watch', function() {
  gulp.watch('css/*.css', ['style']);
  gulp.watch('js/*.js', ['script']);
  gulp.watch('css/main.sass', ['sass']);
})

gulp.task('default', ['delete', 'style', 'script', 'sass', 'watch']);
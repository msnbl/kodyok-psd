var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

 gulp.task('sass', function() {
   gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
 })

 gulp.task('imagemin', () =>
  gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
 );

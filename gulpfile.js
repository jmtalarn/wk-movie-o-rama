'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
 gulp.src('./sass/**/*.scss')
   .pipe(sourcemaps.init())
   .pipe(sass.sync().on('error', sass.logError))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./public/stylesheets'));
});


gulp.task('sass:watch', function () {
 gulp.watch('./sass/**/*.scss', ['sass']);
});

'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    autoPrefix = require('gulp-autoprefixer'),
    less = require('gulp-less');


gulp.task('connect', function () {
    browserSync.init({
        server: 'app/'
    });
    gulp.watch([
        'app/css/*.less',
        'app/css/*.css',
        'app/scripts/*.js',
        'app/*.html'
    ], ['build']);
});


gulp.task('build', function () {
    gulp.src('app/css/main.less')
        .pipe(less())
        .pipe(gulp.dest('app/css/'))
        .pipe(autoPrefix('last 10 versions'));
    browserSync.reload();
});


gulp.task('default', ['connect', 'build']);
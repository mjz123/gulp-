var gulp = require ('gulp');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('changed', function () {
    return gulp.src('./js/*.js')
        .pipe(changed('./dist'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compress', ['changed'],function () {
    return gulp.src('./js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch',function () {
    gulp.watch('./js/*.js',['compress']);
});

gulp.task('imagemin',function () {
    return gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('browser-sync',function () {
    browserSync.init({
        server:{
            baseDir:",/"
        }
    });
});
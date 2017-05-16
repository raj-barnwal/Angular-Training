var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    util = require('gulp-util'),
    plumber=require('gulp-plumber');

// Minify index.js task
gulp.task('buildMin', function () {
    gulp.src('./index.js')
        .pipe(plumber())
        .pipe(browserify({
            debug: true
        }))
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'));
});

//minify css task
gulp.task('css', function () {
    gulp.src('./sass/*.css')
        .pipe(plumber())
        .pipe(concat('app.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./'));

});

// minify html(small modules only) task
gulp.task('htmlMinify', function () {
    return gulp.src('./scripts/views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./scripts/views'));
});

//Minify index.html task
gulp.task('indexMinify', function () {
    return gulp.src('./*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dest'));
});


//Watch task for mentioned above
gulp.task('watch', ['buildMin', 'css', 'indexMinify', 'htmlMinify'], function () {
    return gulp.watch(['./index.js', './sass/*.css', './*.html', './scripts/views/*.html'], ['default']);
});

gulp.task('default', ['watch','buildMin', 'css', 'indexMinify', 'htmlMinify']);
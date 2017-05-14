var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('./app/**/*.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/app.js'));
});

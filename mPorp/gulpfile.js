/*--  Variables  --*/
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var batch = require('gulp-batch');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/*-- Stream Task  --*/
gulp.task('stream', function () {
    gulp.src(['assets/scss/style.scss'])
            .pipe(sass({errLogToConsole: true}))
            .pipe(concat('style.css'))
            .pipe(gulp.dest('./assets/css'))
            .pipe(minifyCSS())
            .pipe(concat('style.min.css'))
            .pipe(gulp.dest('./assets/css'));
});

/*--  Watch Task  --*/
gulp.task('watch', function () {
    watch('assets/scss/**/*.scss', function () {
        gulp.start('stream');
    });
});


/*-- Default Function  --*/
gulp.task('default', function () {
    /*--  place code for your default task here  --*/
    gulp.task('default', ['stream']);
});

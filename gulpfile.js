var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var sass       = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('.'));
});

gulp.task('js', function () {
  return browserify({entries: './app/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['js', 'sass'], function () {
  gulp.watch('./app/**/*.js', ['js']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);

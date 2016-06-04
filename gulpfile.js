var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('copy', function (done) {
  return gulp.src(['app/**/*.html', '!app/index.html'])
    .pipe(gulp.dest('public/views/'));
});

gulp.task('copy_index', function (done) {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('public/'));
});

gulp.task('styles', function () {
  gulp.src('app/styles.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('public/styles/'))
});

gulp.task('scripts', function () {
  return browserify('app/app.js', {debug: true}).transform(babelify.configure({
    presets: ["es2015"],  plugins: ["ng-annotate"]
  }))
    .bundle()
    .on('error', function (err) {
      console.error(err);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', ['default'], function () {
  gulp.watch('app/index.html', ['copy_index']);
  gulp.watch('app/**/*.html', ['copy_views']);
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/**/*.scss', ['styles']);
});

gulp.task('default', ['copy', 'scripts', 'styles']);
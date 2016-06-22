var gulp = require('gulp');
var config = require('./config').path;

gulp.task('copy_views', function () {
  return gulp.src(config.views.default.src)
    .pipe(gulp.dest(config.views.default.dest))
});

gulp.task('copy_index', function () {
  return gulp.src(config.views.index.src)
    .pipe(gulp.dest(config.views.index.dest))
});
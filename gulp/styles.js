var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./config').path;

gulp.task('styles', () => {
  gulp.src(config.styles.src)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(config.styles.dest))
});

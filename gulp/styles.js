const gulp = require('gulp');
const sass = require('gulp-sass');
const config = require('./config');

gulp.task('styles', () =>
  gulp.src(config.styles.src)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(config.styles.dest))
);

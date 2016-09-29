const gulp = require('gulp');
const eslint = require('gulp-eslint');
const config = require('./config');

gulp.task('lint', () =>
  gulp.src(config.lint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

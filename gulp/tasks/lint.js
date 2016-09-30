import gulp from 'gulp';
import eslint from 'gulp-eslint';

export default function lint(config) {
  gulp.task('lint', () =>
    gulp.src(config.lint)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  );}

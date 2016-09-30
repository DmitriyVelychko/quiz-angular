import gulp from 'gulp';
import sass from 'gulp-sass';

export default function styles(config) {
  gulp.task('styles', () =>
    gulp.src(config.styles.src)
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest(config.styles.dest))
  );
}

import gulp from 'gulp';
import del from 'del';

export default function clean(config) {
  gulp.task('clean', () => del(config.clean));
}

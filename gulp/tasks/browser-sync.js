import gulp from 'gulp';
import browserSync from 'browser-sync';

export default function bSync(config) {
  gulp.task('browser-sync', ['nodemon'], () => {
    browserSync({
      proxy: config.server.proxy,
      files: config.server.files,
      port: 1337,
      browser: 'google-chrome',
    });
  });
}

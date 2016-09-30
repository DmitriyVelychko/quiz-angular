import gulp from 'gulp';
import browserSync from 'browser-sync';

export default function bSync(config) {
  gulp.task('browser-sync', ['nodemon'], () => {
    browserSync({
      proxy: config.browserSync.proxy,
      files: config.browserSync.files,
      port: 1337,
      browser: 'google-chrome',
    });
  });
}

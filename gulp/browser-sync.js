const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('./config');

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync({
    proxy: config.browserSync.proxy,
    files: config.browserSync.files,
    port: 1337,
    browser: 'google-chrome',
  });
});

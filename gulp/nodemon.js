const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const bsReload = require('browser-sync').reload;
const config = require('./config');

const BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', (cb) => {
  let called = false;
  return nodemon({
    script: 'app.js',
    watch: ['**/*.js', '!app/**', '!gulp/**']

  })
    .on('start', function onStart() {
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {
      setTimeout(function reload() {
        bsReload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

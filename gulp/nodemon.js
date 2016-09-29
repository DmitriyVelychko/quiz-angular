const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const bsReload = require('browser-sync').reload;

const BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', (cb) => {
  let called = false;
  return nodemon({
    script: 'app.js',
    watch: ['**/*.js', '!app/**', '!gulp/**'],
  })
    .on('start', () => {
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', () => {
      setTimeout(() => {
        bsReload({
          stream: false,
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

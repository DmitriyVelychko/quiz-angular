import gulp from 'gulp';
import nodemon from 'nodemon';
const bsReload = require('browser-sync').reload;

const BROWSER_SYNC_RELOAD_DELAY = 500;

export default function node(config) {
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
}

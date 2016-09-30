import gulp from 'gulp';
import nodemon from 'gulp-nodemon';

export default function server(config) {
  gulp.task('nodemon', (cb) => {
    let called = false;
    return nodemon({
      script: 'app.js',
      watch: '**/*.js',
      ignore: config.server.ignore,
    })
      .on('start', () => {
        if (!called) {
          cb();
        }
        called = true;
      });
  });
}

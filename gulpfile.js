const gulp = require('gulp');
const wrench = require('wrench');
const config = require('./gulp/config').path;
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');
var reload = browserSync.reload;

wrench.readdirSyncRecursive('./gulp').filter(
  (file) => {
    return (/\.(js|coffee)$/i).test(file);
  }).map(
  (file) => {
    require(`./gulp/${file}`);
  }
);

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: "localhost:5000",
    port: 1337,
    notify: true,
    browser: "google chrome",
  });
});

gulp.task('nodemon', (cb) => {
  let called = false;
  return nodemon({
    script: 'app.js',
    watch: ['app.js'],
  })
    .on('start', function onStart() {
      if (!called) { cb(); }
      called = true;
    });
});


gulp.task('default', ['browser-sync'], () => {
  gulp.watch(config.styles.watch, ['styles', reload]);
  gulp.watch(config.scripts.watch, ['scripts', reload]);
  gulp.watch(config.views.default.watch, ['copy_views']);
  gulp.watch(config.views.index.watch, ['copy_index']);
});

gulp.task('build', ['copy', 'styles', 'scripts']);
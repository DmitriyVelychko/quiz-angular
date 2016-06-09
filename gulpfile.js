var gulp = require('gulp');
var wrench = require('wrench');
var config = require('./gulp/config').path;

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

gulp.task('watch', ['default'], function () {
  gulp.watch(config.views.index.src, ['copy_index']);
  gulp.watch(config.views.default.src, ['copy_views']);
  gulp.watch(config.scripts.watch, ['scripts']);
  gulp.watch(config.styles.watch, ['styles']);
});

gulp.task('default', ['copy_views', 'scripts', 'styles']);
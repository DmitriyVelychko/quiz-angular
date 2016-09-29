const gulp = require('gulp');
const wrench = require('wrench');
const config = require('./gulp/config');
const gulpsync = require('gulp-sync')(gulp);
const bsReload = require('browser-sync').reload;

wrench.readdirSyncRecursive('./gulp').filter(
  (file) => /\.(js)$/i
    .test(file))
    .map((file) => require(`./gulp/${file}`));

gulp.task('build', gulpsync.sync(['clean', 'copy', 'styles', 'html2js', 'lint', 'scripts']));

gulp.task('default', ['browser-sync'], () => {
  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.scripts.watch, ['scripts', bsReload]);
  gulp.watch(config.views.src, ['html2js', bsReload]);
  gulp.watch(config.views.index.src, ['copy_index']);
});

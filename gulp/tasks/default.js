import gulp from 'gulp';
const bsReload = require('browser-sync').reload;

export default function index(config) {
  gulp.task('default', ['browser-sync'], () => {
    gulp.watch(config.styles.watch, ['styles']);
    gulp.watch(config.scripts.watch, ['scripts', bsReload]);
    gulp.watch(config.views.src, ['html2js', bsReload]);
    gulp.watch(config.views.index.src, ['copy_index']);
  });
}

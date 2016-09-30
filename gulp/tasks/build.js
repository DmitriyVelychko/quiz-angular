import gulp from 'gulp';
const gulpsync = require('gulp-sync')(gulp);

export default function build(config) {
  gulp.task('build', gulpsync.sync(['clean', 'copy', 'styles', 'html2js', 'lint', 'scripts']));
}

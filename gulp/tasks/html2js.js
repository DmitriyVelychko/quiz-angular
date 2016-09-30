import gulp from 'gulp';
import html2js from 'gulp-ng-html2js';
import concat from 'gulp-concat';

export default function templateCache(config) {
  gulp.task('html2js', () =>
    gulp.src(config.views.src)
      .pipe(html2js({
        moduleName: 'app.templates',
        prefix: 'components/',
      }))
      .pipe(concat('app.templates.js'))
      .pipe(gulp.dest(config.views.dest))
  );
}

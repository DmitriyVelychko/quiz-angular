const gulp = require('gulp');
const html2js = require('gulp-ng-html2js');
const concat = require('gulp-concat');
const config = require('./config');

gulp.task('html2js', () =>
  gulp.src(config.views.src)
    .pipe(html2js({
      moduleName: 'app.templates',
      prefix: 'components/',
    }))
    .pipe(concat('app.templates.js'))
    .pipe(gulp.dest(config.views.dest))
);

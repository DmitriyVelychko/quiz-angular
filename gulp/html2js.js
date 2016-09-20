const gulp = require('gulp');
const html2js = require('gulp-ng-html2js');
const config = require('./config');
const concat = require('gulp-concat');


gulp.task('html2js', () => {
    return gulp.src(config.views.default.src)
        .pipe(html2js({
            moduleName: 'app.templates',
            prefix: "components/"
        }))
        .pipe(concat('app.templates.js'))
        .pipe(gulp.dest(config.views.default.dest));
});
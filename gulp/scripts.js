const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');
const config = require('./config');


gulp
  .task('scripts', () =>
    browserify(config.scripts.src, { debug: true })
      .transform(babelify.configure({
        presets: ['es2015'], plugins: ['ng-annotate'], sourceMaps: true,
      }))
      .bundle()
      .on('error', (err) => {
        console.error(err);
      })
      .pipe(source(config.scripts.src))
      .pipe(buffer())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(gutil.noop())
  );

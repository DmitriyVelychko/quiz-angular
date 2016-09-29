const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
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
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(gulp.dest(config.scripts.dest))
  );

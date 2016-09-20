const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
const config = require('./config');

gulp.task('scripts', ['lint'], () => {
  return browserify(config.scripts.src, {debug: true}).transform(babelify.configure({
    presets: ["es2015"],  plugins: ["ng-annotate"]
  }))
    .bundle()
    .on('error', (err) => {
      console.error(err);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.scripts.dest))
});

gulp.task('lint', () => {
    return gulp.src(config.scripts.lint)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
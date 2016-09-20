var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
var config = require('./config').path;

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
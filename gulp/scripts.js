var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var config = require('./config').path;

gulp.task('scripts', () => {
  return browserify(config.scripts.src, {debug: true}).transform(babelify.configure({
    presets: ["es2015"],  plugins: ["ng-annotate"]
  }))
    .bundle()
    .on('error', function (err) {
      console.error(err);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.scripts.dest))
});

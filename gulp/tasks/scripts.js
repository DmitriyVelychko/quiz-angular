import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

export default function scripts(config) {
  gulp.task('scripts', () =>
    browserify(config.scripts.src, { debug: true })
      .transform(babelify.configure({
        presets: ['es2015'], plugins: ['ng-annotate'], sourceMaps: true,
      }))
      .bundle()
      .on('error', (err) => {
        console.error(err);
      })
      .pipe(source('app.js'))
      .pipe(gulp.dest(config.scripts.dest))
  );
}

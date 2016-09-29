const gulp = require('gulp');
const config = require('./config');

gulp.task('copy_index', () =>
  gulp.src(config.views.index.src)
    .pipe(gulp.dest(config.views.index.dest))
);

gulp.task('copy_question', () =>
  gulp.src(config.question.src)
    .pipe(gulp.dest(config.question.dest))
);

gulp.task('copy', ['copy_index', 'copy_question']);

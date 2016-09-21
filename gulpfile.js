const gulp = require('gulp');
const wrench = require('wrench');
const config = require('./gulp/config');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');
const gulpsync = require('gulp-sync')(gulp);
const reload = browserSync.reload;

wrench.readdirSyncRecursive('./gulp').filter(
    (file) => {
        return (/\.(js|coffee)$/i).test(file);
    }).map(
    (file) => {
        require(`./gulp/${file}`);
    }
);

const BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', (cb) => {
    let called = false;
    return nodemon({
        script: 'app.js',
        watch: ['app.js']
    })
        .on('start', function onStart() {
            if (!called) {
                cb();
            }
            called = true;
        })
        .on('restart', function onRestart() {
            setTimeout(function reload() {
                browserSync.reload({
                    stream: false
                });
            }, BROWSER_SYNC_RELOAD_DELAY);
        });
});

gulp.task('browser-sync', ['nodemon'], () => {
    browserSync({
        proxy: 'http://localhost:3333',
        files: ['build/**/*'],
        port: 1337,
        browser: 'google-chrome'
    });
});

gulp.task('build', gulpsync.sync(['copy', 'styles', 'html2js', 'scripts']));

gulp.task('default', ['browser-sync'], () => {
    gulp.watch(config.styles.watch, ['styles']);
    gulp.watch(config.scripts.watch, ['scripts', browserSync.reload]);
    gulp.watch(config.views.default.src, ['html2js',  browserSync.reload]);
    gulp.watch(config.views.index.src, ['copy_index']);
});

// const gulp = require('gulp');
// const wrench = require('wrench');
// const config = require('./gulp/config');
// const gulpsync = require('gulp-sync')(gulp);
// const bsReload = require('browser-sync').reload;
//
// wrench.readdirSyncRecursive('./gulp').filter(
//   (file) => /\.(js)$/i
//     .test(file))
//     .map((file) => require(`./gulp/${file}`));
//



import config from './gulp/config';
import Tasks from './gulp/tasks/task';

// Init gulp tasks
let tasks = new Tasks(config);
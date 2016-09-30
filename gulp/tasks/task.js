import clean from './clean';
import build from './build';
import copy from './copy';
import index from './default';
import bSync from './browser-sync';
import html2js from './html2js';
import lint from './lint';
import nodemon from './nodemon';
import styles from './styles';
import scripts from './scripts';

export default class Tasks {
  constructor(config = {}) {
    this.config = config;
    this.initTasks();
  }

  initTasks() {
    clean(this.config);
    build(this.config);
    copy(this.config);
    index(this.config);
    bSync(this.config);
    html2js(this.config);
    lint(this.config);
    nodemon(this.config);
    styles(this.config);
    scripts(this.config);
  }
};
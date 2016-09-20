const dest = 'build/';
const src = 'app/';

module.exports = {
    styles: {
      src: `${src}assets/sass/styles.scss`,
      dest: `${dest}styles/`,
      watch: `${src}**/*.scss`,
    },
    scripts: {
      src: `${src}app.js`,
      lint: [`${src}**/*.js`,'!node_modules/**', `!${src}app.templates.js`],
      dest: `${dest}js/`,
      watch: `${src}**/*.js`,
    },
    question: {
      src: `${src}assets/question/*`,
      dest: `${dest}question/`
    },
    views: {
      index: {
        src: `${src}index.html`,
        dest: `${dest}`,
      },
      default: {
        src: `${src}components/**/*.html`,
        dest: `${src}/`,
      },
    },
};

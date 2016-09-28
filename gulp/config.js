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
    dest: `${dest}js/`,
    watch: `${src}**/*.js`,
  },
  clean: ['build'],
  lint: [`${src}**/*.js`, '!node_modules/**', `!${src}app.templates.js`],
  browserSync: {
    proxy: 'http://localhost:3333',
    files: ['build/**']
  },
  question: {
    src: `./questions/*/test.*`,
    dest: `${dest}question/`
  },
  views: {
    src: `${src}components/**/*.html`,
    dest: `${src}/`,
    index: {
      src: `${src}index.html`,
      dest: `${dest}`,
    }
  }
};

const dest = 'build/';
const src = 'app/';

const config = {
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
  server: {
    proxy: 'http://localhost:4444',
    files: ['build/**'],
    ignore: ['build/', 'app/', 'gulp/']
  },
  question: {
    src: './quiz/*/test.*',
    dest: `${dest}quiz/`,
  },
  views: {
    src: `${src}components/**/*.html`,
    dest: `${src}/`,
    index: {
      src: `${src}index.html`,
      dest: `${dest}`,
    },
  },
};

export default config;

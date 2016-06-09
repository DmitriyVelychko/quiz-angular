const dest = "public/";
const src = 'app/';

module.exports = {
  path: {
    styles: {
      src: `${src}styles.scss`,
      dest: `${dest}styles/`,
      watch: `${src}**/*.scss`
    },
    scripts: {
      src: `${src}app.js`,
      dest: `${dest}js/`,
      watch: `${src}**/*/js`
    },
    views: {
      index: {
        src: `${src}index.html`,
        dest: `${dest}js/`
      },
      default: {
        src: [`${src}**/*.html`, `!${src}index.html`],
        dest: `${dest}views/`
      }
    }
  }
};

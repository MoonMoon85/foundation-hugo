module.exports = {
  paths: { public: "static" },
  files: {
    javascripts: { joinTo: "app.js" },
    stylesheets: { joinTo: "app.css" }
  },
  plugins: {
    sass: {
      options: {
        includePaths: [
          "node_modules/foundation-sites/scss",
          "node_modules/motion-ui/src"
        ]
      }
    },
  },
  npm: {
    globals: {
      $: 'jquery',
      jQuery: 'jquery'
    }
  }
}

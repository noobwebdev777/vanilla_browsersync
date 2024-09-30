const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    baseDir: './', // Adjust according to your project structure
  },
  files: ['./index.html', './src/css/*.css', './src/js/*.js'], // Watch these files for changes
  port: 5173,
  open: false, // Prevent BrowserSync from opening a new browser window
  notify: false, // Optional: Disable notifications in the browser
});

// Enable HMR for HTML, CSS, and JS files
browserSync.watch(['./index.html', './src/css/*.css', './src/js/*.js']).on('change', browserSync.reload);

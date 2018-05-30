const gulp  = require('gulp'),
  gutil   = require('gulp-util'),
  keys    = require('./gulp-keys'),
  server  = require('./build-tasks/server'),
  scripts = require('./build-tasks/scripts'),
  styles  = require('./build-tasks/styles'),
  markup  = require('./build-tasks/markup'),
  deploy  = require('./build-tasks/deploy'),
  images  = require('./build-tasks/images');

/*
  serve; creates local static livereload server using browser-sync.
*/
gulp.task(keys.serve, [keys.compile], server.start);

/*
  scripts:compile/scripts:watch

  watch for changes to scriptsScript files then compile app JavaScript file
  from source, concatenating and uglifying content and publishing output based on env flag. 
  For example, if we want sourcemaps we can output our individual JS files and the sourcemap for them to the desired directory by using the --map flag.
*/
gulp.task(keys.lint_scripts, scripts.lint);
gulp.task(keys.compile_scripts, [keys.lint_scripts], scripts.compile);
gulp.task(keys.watch_scripts, scripts.watch);

/*
  styles:compile/styles:watch
*/
// gulp.task(keys.lint_styles, styles.lint);
gulp.task(keys.compile_styles, styles.compile);
gulp.task(keys.watch_styles, styles.watch);

/*
  markup:compile/markup:watch
*/
gulp.task(keys.lint_markup, markup.lint);
gulp.task(keys.compile_markup, [keys.lint_markup], markup.compile);
gulp.task(keys.watch_markup, markup.watch);

/*
  images:compile/images:watch
*/
gulp.task(keys.images, images.compile);

gulp.task(keys.deploy, [keys.compile], deploy.run);

gulp.task(keys.lint, [
  keys.lint_markup,
  keys.lint_styles,
  keys.lint_scripts
]);

gulp.task(keys.compile, [
  keys.compile_markup,
  keys.compile_styles,
  keys.compile_scripts,
  keys.images
]);

gulp.task(keys.watch, [
  keys.watch_markup,
  keys.watch_styles,
  keys.watch_scripts
]);

const defaultTasks = gutil.env.deploy ? [keys.deploy] :
 [keys.serve, keys.watch];

gulp.task('default', defaultTasks);

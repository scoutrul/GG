var gulp      = require('gulp'),
  gConfig     = require('../gulp-config'),
  keys        = require('../gulp-keys'),
  utils       = require('./utils'),
  opts        = gConfig.pluginOpts,
  env         = utils.getEnv(),
  src         = gConfig.paths.sources,
  dest        = gConfig.paths.destinations,
  plugins     = require('gulp-load-plugins')(opts.load),
  koutoSwiss = require('kouto-swiss'),
  typographic = require('typographic'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  /* styles:lint */
  lint = function() {
    return gulp.src(src.styles)
      // .pipe(plugins.stylint(opts.stylint))
      // .pipe(plugins.stylint.reporter())
      .pipe(notify('No lint stylus'));
      ;
  },
  /* styles:compile */
  compile = function() {
    return gulp.src(src.styles)
      .pipe(plugins.plumber())
      .pipe(plugins.stylus({
            "use": [koutoSwiss(), typographic()]
        }))
      .pipe(gulp.dest(env.dist ? dest.dist: dest.css))
      .pipe(plugins.prefix(opts.prefix))
      .pipe(plugins.minify())
      .pipe(plugins.rename(opts.rename))
      .pipe(gulp.dest(env.dist ? dest.dist: dest.css))
      .pipe(notify('Compiled : Stylus'));
  },
  /* styles:watch */
  watch = function() {
    gulp.watch(src.styles, [keys.compile_styles]);
  };

module.exports = {
  // lint   : lint,
  compile: compile,
  watch  : watch
};

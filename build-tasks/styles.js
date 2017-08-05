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
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),

  /* styles:lint */
  lint = function() {
    return gulp.src(src.styles)
      // .pipe(plugins.stylint(opts.stylint))
      // .pipe(plugins.stylint.reporter())
      ;
  },
  /* styles:compile */
  compile = function() {
    return gulp.src(src.styles)
      .pipe(plugins.plumber())
      .pipe(sourcemaps.init())
      .pipe(plugins.plumber())
      .pipe(plugins.stylus({
            "use": [koutoSwiss(), typographic()]
        }))
      // .pipe(plugins.prefix(opts.prefix))
      // .pipe(plugins.minify())
      .pipe( postcss([ autoprefixer(opts.prefix) ]) )
      // .pipe(plugins.rename(opts.rename))
      .pipe( sourcemaps.write('.') )
      .pipe(gulp.dest(env.dist ? dest.dist: dest.css))

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

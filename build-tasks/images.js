var gulp      = require('gulp'),
    gConfig     = require('../gulp-config'),
    utils       = require('./utils'),
    env         = utils.getEnv(),
    src         = gConfig.paths.sources,
    dest      = gConfig.paths.destinations,

  compile = function() {
    return gulp.src(src.images) 
        .pipe(gulp.dest(dest.images))
  };


module.exports = {
  compile: compile
};

var env = 'public/',
  pkg   = require('./package.json');
module.exports = {
  pkg: {
    name: pkg.name
  },
  pluginOpts: {
    browserSync: {
      port   : 1987,
      server : {
        baseDir: env
      }
    },
    babel: {
      presets: [ 'es2015' ]
    },
    gSize: {
      showFiles: true
    },
    pug: {
      pretty: true,
      data  : {
        name       : pkg.name,
        description: pkg.description
      }
    },
    load: {
      rename: {
        'gulp-gh-pages'    : 'deploy',
        'gulp-util'        : 'gUtil',
        'gulp-cssnano'     : 'minify',
        'gulp-autoprefixer': 'prefix'
      }
    },
    prefix: {browsers:[
      'ios_saf 7'
    ]},
    rename: {
      suffix: '.min'
    },
    stylint: {
      reporter: 'stylint-stylish'
    },
    wrap: '(function() { <%= contents %> }());'
  },
  paths: {
    base: env,
    sources: {
      docs     : 'src/markup/*.pug',
      markup   : 'src/markup/**/*.pug',
      overwatch: env + '**/*.{html,js,css,png,jpg,svg,gif}',
      scripts  : 'src/script/**/*.js',
      styles   : 'src/style/*.styl',
      images   : 'src/images/*.{png, svg, jpg, gif}'
    },
    destinations: {
      dist: './dist',
      css : env + 'css/',
      html: env,
      js  : env + 'js/',
      images : env + 'images/'
    }
  }
};
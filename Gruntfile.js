'use strict';

module.exports = function (grunt){

// time how long tasks take. can help when optimizing build times
require('time-grunt')(grunt);

//automatically load required Grunt tasks
require('jit-grunt')(grunt, {
  useminPrepare: 'grunt-usemin'
});

//define the configuration for all the tasks
  grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

//make sure code styles are up to par and there are no obvious mistakes:
jshint: {
  options:{
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all :{
    src: [
      'Gruntfile.js',
      'app/scripts/{,*/}*.js'
    ]
  }
},
useminPrepare : {
  html: 'app/menu.html',
  options:{
    dest:'dist'
  }
},

//concat
concat:{
  options:{
    separator:';'
  },
  //dist config is provided by username
  dist:{}
},
//uglify
uglify:{
  //dist config is provided by useminPrepare
  dist:{}

},
cssmin:{
  dist:{}
},
//Filerev
  filerev:{
    options:{
      enconding:'utf8',
      algorithm:'md5',
      length:20
    },
    release:{
      //filerev:release hashed(md5) all assets (images, js and css) in dist directory
      files:[{
        src:[
          'dist/scripts/*.js',
          'dist/styles/*.css',
        ]
      }]
    }
  },
//Usemin replaces all assets with their revved version in html and css files.
//options.assetDirs contains the directories for finding the assets according to their relative paths
usemin:{
  html:['dist/*.html'],
  css:['dist/styles/*.css'],
  options:{
    assetDirs:['dist','dist/styles']
  }
},


copy: {
  dist: {
    cwd:'app',
    src:[ '**','!styles/**/*.css','!scripts/**/*.js'],
    dest: 'dist',
    expand:true
  },
  fonts:{
    files:[
      {
        //for bootstrap fonts
        expand: true,
        dot:true,
        cwd:'bower_components/bootstrap/dist',
        src:['fonts/*.*'],
        dest:'dist'
      },{
        //font-awesome
        expand: true,
        dot:true,
        cwd:'bower_components/font-awesome',
        src:['fonts/*.*'],
        dest:'dist'
      }
    ]
  }
},
watch:{
  copy:{
    files:['ap/**','!app/**/*.css', '!app/**/*.js'],
    tasks:['build']
  },
  scripts:{
    files:['app/scripts/app.js'],
    tasks:['build']
  },
  styles:{
    files:['app/styles/mystyles.css'],
    tasks:['build']
  },
  livereload:{
    options:{
livereload: '<%= connect.options.livereload %>'
    },
    files:[
      'app/{,*/}*.html',
      '.tmp/styles/{,*/}*.css',
      'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
},
connect:{
  options:{
    port:9000,
    //mudar para '0.0.0.0' para acessar de fora
    hostname:'localhost',
    livereload: 35729
  },
  dist:{
    options:{
      open:true,
      base:{
        path:'dist',
        options:{
          index:'menu.html',
          maxAge: 300000
                  }
      }
    }
  }
},


clean:{
  build:{
    src:['dist/']
  }
}



  });
grunt.registerTask('build',[
'clean',
  'jshint',
  'useminPrepare',
  'concat',
  'cssmin',
  'uglify',
  'copy',
  'filerev',
  'usemin'
]);

grunt.registerTask('serve',['build','connect:dist','watch']);

grunt.registerTask('default',['build']);



};

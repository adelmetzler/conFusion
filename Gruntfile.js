'use strict';

module.exports = function (grunt){

// time how long tasks take. can help when optimizing build times
require('time-grunt')(grunt);

//automatically load required Grunt tasks
require('jit-grunt')(grunt);

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
clean:{
  build:{
    src:['dist/']
  }
}



  });
grunt.registerTask('build',[
  'jshint'
]);

grunt.registerTask('default',['build']);



};

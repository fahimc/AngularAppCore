module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
    separator: "\n", //add a new line after each file
    banner: "", //added before everything
    footer: "" //added after everything
  },
  dist: {
    // the files to concatenate
    src: [
      //include libs
      'App/js/libs/angular/angular.min.js',
      'App/js/libs/angular/angular-route.min.js',
      '!App/js/src/**/main.js',
      'App/js/src/modules/*/*.js',
      'App/js/src/**/*.js',
      'App/js/templates.js',
      // 'App/js/src/**/*.js',

      //own classes and files

      //the last script I need
      'App/js/src/main.js'
      ],
    // the location of the resulting JS file
    dest: 'App/js/app.js'
  }

},
copy:{
  index:{
    expand: true,
    cwd: 'App/',
    src:['index.html'],
    dest:"Dist"
  },
  js:{
    expand: true,
    cwd: 'App/',
    src:['js/app.js'],
    dest:"Dist"
  },
  css:{
    expand: true,
    flatten: true,
    cwd: 'App/',
    src:['resource/css/**'],
    dest:"Dist/css"
  },
  fonts:{
    expand: true,
    cwd: 'App/resource/fonts/',
    src:['**'],
    dest:"Dist/resource/fonts"
  },
  images:{
    expand: true,
    cwd: 'App/resource/images/',
    src:['**'],
    dest:"Dist/resource/images"
  }

},
ngtemplates:  {
  "app": {
    cwd:      'App/js/src',
    src:      ['**/*.html'],
    dest:     'App/js/templates.js',
    options:  {
      htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
    }
  }
},
less: {
  development: {
    options: {
      paths: ["Less/modules","App/js/modules"]
    },
    files: {
      "App/resource/css/style.css": "Less/main.less"
    }
  }
},
watch: {
  js: {
        files: 'App/js/**/*.js',
        tasks: ['concat','copy:js'],
        options: {
          interrupt: false,
          livereload: true,
        }
      },
      less: {
        files: 'Less/**/*.less',
        tasks: ['less','copy:css'],
        options: {
          interrupt: false,
          livereload: true,
        }
      },
      lessModules: {
        files: 'App/**/*.less',
        tasks: ['less','copy:css'],
        options: {
          interrupt: false,
          livereload: true,
        }
      },
      index: {
        files: 'App/index.html',
        tasks: ['copy:index','injectLiveReload'],
        options: {
          interrupt: false,
          livereload: true,
        }
      },
      templates: {
        files: 'app/js/**/*.html',
        tasks: ['ngtemplates','copy:js'],
        options: {
          interrupt: false,
          livereload: true,
        }
      },
 
},
connect: {
  server: {
    options: {
      livereload: true,
      base: 'App/',
      port: 9000,
      hostname: 'localhost',
      open: true,
    },
    livereload: {
      options: {
        open: {
         target: 'http://localhost:9000'
       },
       base: [
       'App'
       ]
     }
   }
 }
},
nodemon: {
  dev: {
    script: '../server.js',
    options: {
      file: '../server.js',
      nodeArgs: ['--debug'],
      args: [],
      env: {
        PORT: 3001
      },
      cwd: 'App',
      callback: function (nodemon) {
        nodemon.on('log', function (event) {
          console.log(event.colour);
        });
        nodemon.on('config:update', function () {
          setTimeout(function() {
            require('open')('http://localhost:3001');
          }, 1000);
        });
      },
    }
  }
},
concurrent: {
  target: {
    tasks: ['nodemon','watch'],
    options: {
      logConcurrentOutput: true
    }
  }
},
});

function injectLiveReload(){
  var content = grunt.file.read('Dist/index.html');
  var livereload = grunt.file.read('grunt/livereload.js');
  content = content.replace("</head>","<script>"+livereload+"</script></head>");
  grunt.file.write('Dist/index.html',content);
}

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-angular-templates');

  // Default task(s).
  grunt.registerTask('default', ['ngtemplates','concat','less','copy','injectLiveReload','concurrent']);
  grunt.registerTask('injectLiveReload',injectLiveReload);
};
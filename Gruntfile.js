/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
      uglify: {
        my_target:{

        files: [{
          expand: true,
          src: ['*.js'],
          cwd: 'js',
          ext: '.min.js',
          dest: 'js/build/'
       
      }]
      
    }
  },
  cssmin: {
    my_target: {
      files:[{
          expand: true,
          src: ['*.css'],
          cwd: 'css',
          ext: '.min.css',
          dest: 'css/build/'
      }]
    }
  },
    
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            
            name: 'small',
            width: 240,
            height: 150,
            quality: 60
            
          },
          {
             name: 'medium',
             width: 460,
             height: 280,
             quality: 80
                        
              },
            {  
              name: 'large',
              width: 1140,
              height: 570,
              quality: 90
              },
         {
              name: 'large',
              width: 1140,
              quality: 90,
              suffix: '_x2',
             } 
              ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    inlinecss: {
      main: {
      files: {
        'index.html': 'index_source.html'
      }
    }
  },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images', 'js/build'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },


  });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  //these are the default tasks, you need to change these if you want to add or subtract tasks
  grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'inlinecss', 'mkdir', 'copy', 'responsive_images']);

};

module.exports = function(grunt){

	grunt.initConfig({
		concat : {
			options: {
				separator: ';'
			},
			dist   : {
				src : ['js/jquery1.10.js',
					'js/jquery.parallax.js',
					'js/webfont.js',
					'slick/slick.js',
					'js/script.js'],
				dest: 'js/min/all.js'
			}
		},
		jshint : {
			options: {
				jshintrc: '.jshintrc'
			}
		},
		watch  : {
			scripts: {
				files  : ['js/*.js'],
				tasks  : ['concat'],
				options: {
					spawn: false
				}
			},
			templates: {
				files  : ['jade/*.jade'],
				tasks  : ['jade'],
				options: {
					spawn: false
				}
			},
			styles   : {
				files  : ['sass/*.scss'],
				tasks  : ['sass'],
				options: {
					spawn: false
				}
			}
		},
		connect: {
			test: {
				options: {
					port: 8000,
					base: '.'
				}
			}
		},
		sass   : {
			dist: {
				options: {
					style: 'expanded'
				},
				files  : {
					'styles/main_global.css': 'sass/main_global.scss'
				}
			}
		},
		jade   : {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files  : [{
					cwd   : "jade/",
					src   : "*.jade",
					dest  : "",
					expand: true,
					ext   : ".html"
				}]
			}
		},
		serve  : {
			options: {
				port: 9000
			}
		}

	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['watch']);
};
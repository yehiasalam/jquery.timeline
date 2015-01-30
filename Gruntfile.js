module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("timeline.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			dist: {
				src: ["src/jquery.boilerplate.js"],
				dest: "dist/jquery.boilerplate.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.boilerplate.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.boilerplate.js"],
				dest: "dist/jquery.boilerplate.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		less: {
			files: {
				'src/jquery.timeline.css': [
				  'src/jquery.timeline.less'
				]
			},
			options: {
				compress: false,
				// LESS source maps
				// To enable, set sourceMap to true and update sourceMapRootpath based on your install
				sourceMap: true,
				sourceMapFilename: 'src/jquery.timeline.css.map',
				sourceMapRootpath: 'src/'
			}
		},
		
		// watch for changes to source 
		// Better than calling grunt a million times 
		// (call 'grunt watch')
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-less");

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
	grunt.registerTask("less", ["less"]);
	grunt.registerTask("travis", ["jshint"]);

};

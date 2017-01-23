module.exports = function(grunt){

	var fs 	   = require('fs'),
        task   = grunt.cli.tasks[0] || "dev",
        jsTask = {},
        setBuild = function(){

		console.log("setBuild");

		if (!fs.existsSync("scripts/data/build.json")) {

			console.log("here new");

			fs.writeFileSync("scripts/data/build.json", JSON.stringify({ build: 1 }));

		}else {

			var file   = JSON.parse(fs.readFileSync("scripts/data/build.json", "utf-8")),
				build  = { build : file.build + 1 };

			fs.writeFileSync("scripts/data/build.json", JSON.stringify(build));

		}

    }

    if (task === "production") {

    	jsTask = {

			files: ['scripts/**/*.js'],
			tasks: ['requirejs:compile'],
			options: {

				spawn: false,

			},

		};

    }else{

    	jsTask = {

			files: [],
			tasks: []

		};

    }


	grunt.initConfig({

		pkg : grunt.file.readJSON("package.json"),

		complexity: {
            generic: {
                src: ["scripts/*.js", "scripts/*/*.js", "scripts/*/*/*.js"],
                exclude: ['scripts/vendor'],
                options: {

                    breakOnErrors: true,
                    jsLintXML: 'report/report.xml',         // create XML JSLint-like report
                    checkstyleXML: 'report/checkstyle.xml', // create checkstyle report
                    pmdXML: 'report/pmd.xml',               // create pmd report
                    errorsOnly: false,               // show only maintainability errors
                    cyclomatic: [3],          // or optionally a single value, like 3
                    halstead: [8],           // or optionally a single value, like 8
                    maintainability: 100,
                    hideComplexFunctions: true,     // only display maintainability
                    broadcast: false                 // broadcast data over event-bus

                }
            }
        },

        autoprefixer: {

		    single_file: {
		  
			    src: 'dist/css/foldwebapppack.css',
			    dest: 'dist/css/foldwebapppack.css'
			},
		},

		requirejs: {

	        compile: {

	            options: {

	                mainConfigFile : "scripts/app.js",
	                baseUrl: "scripts",
	                name: "app",
	                out: "dist/js/<%= pkg.name.toLowerCase() %>.js"

	            }

	        }

	    },

		"bower-install-simple": {

	        options: {

	            color: true,
	            directory: "vendor"

	        },

	        "prod": {

	            options: {

	                production: true

	            }
	        },

	        "dev": {

	            options: {

	                production: false

	            }

	        }
	        
	    },

		sass: {
	
	     	dist : {

	     		files: {

			        'dist/css/foldwebapppack.css': 'ui-kit/app/foldwebapppack.scss'
			    }
	     	}    

		},

		watch : {

			css: {

		       	files: 'ui-kit/**/*.scss',
		       	tasks: ["sass", "autoprefixer", "set-build"]		

		    },

		    scripts: jsTask

		}

	});
	
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks("grunt-complexity");
	grunt.loadNpmTasks("grunt-bower-install-simple");
	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");

	if (!fs.existsSync("vendor")) {

		grunt.task.run("bower-install-simple");

	}

	grunt.registerTask("report", ["complexity"]);
	grunt.registerTask("bower-install", ["bower-install-simple"]);
	grunt.registerTask("set-build", setBuild);
	//grunt.registerTask("release", ["requirejs"]);
	//grunt.registerTask("default", ["sass", "watch"]);
	//grunt.registerTask("prod", ["sass"]);

	 switch(task){

        case "dev":

            grunt.file.copy("scripts/app.js", "dist/js/fold-webapp-pack.js");
            grunt.registerTask("default", "Development Task", ["sass", "autoprefixer", "set-build", "watch"]);

            break;

        case "release":

            grunt.file.copy("scripts/app.js", "dist/js/fold-webapp-pack.js");
            grunt.registerTask("release", "Release Task", ["sass", "autoprefixer", "set-build"]);

        break;

        case "production-end":

            grunt.registerTask("production-end", "Production Task", ["requirejs", "sass", "autoprefixer", "set-build"]);

        break;

        case "prod":

            grunt.registerTask("prod", "Production Task", ["requirejs", "sass", "autoprefixer", "set-build"]);

        break;

         case "production":

            grunt.registerTask("production", "Production Task", ["requirejs", "sass", "set-build", "watch", "autoprefixer"]);

        break;


    }

}
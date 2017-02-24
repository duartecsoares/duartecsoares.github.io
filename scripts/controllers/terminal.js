define(["fold/controller",
		"json!data/terminal.json",
		"json!data/info.json"], function(FoldController, terminalJSON, dataJSON){
	
	var TerminalController = FoldController.extend({

		setup: function(){

			this.addEvents();

		},

		commands: {

			cv: function(){

				this.output(["Downloading file... 100%!", "Extracting file... 100%!", "Opening Curriculum Vitae... done!"], 1);
				window.open("/resources/docs/resume.pdf");

			},

			help: function(){

				var commands = this.commands,
					s = "";

				s = Object.keys(commands).reduce(function(key, s){ 

					s += ", " + key;

					return s;

				});

				this.output([s], 1);

			},

			clear : function(){

				this.trigger("terminal:command:clear");

			},

			curl : function(link){

				window.open("//" + link);

			},

			echo: function(s){

				this.output([s], 1);

			},

			ls: function(value){

				var sections = [],
					sectionsJSON = dataJSON.sections;

				if (value.length > 0) {

					this.output([terminalJSON.errors.ls], 1);

					return;

				}

				Object.keys(sectionsJSON).map(function(key){

					if(sectionsJSON[key].data) sections.push(key);

				});

				sections = sections.map(function(section, i){

					return (i > 0) ? " " + section + ".txt" : section + ".txt";

				});

				this.output([sections.toString()], 1);

			},

			man: function(command){

				command = command[0];

				if(terminalJSON.descriptions[command]){

					this.output([terminalJSON.descriptions[command]], 1);

				}else{

					if (command) {

						this.output([terminalJSON.errors.man + command], 1);

					}else{

						this.output(["Man: Argument is missing"], 1);

					}

				}				

			},

			connect: function(){

				window.location.href = "mailto:duartecsoares@me.com";

			},

			cat: function(section){

				if (section.length === 0) {

					this.output(["Cat: Target file or folder is missing."], 1);
					return;

				}

				var section 	 = (section[0].search(".txt") > -1) ? section[0].replace(".txt", "") : section[0],
					sectionData  = [],
					sectionsJSON = dataJSON.sections;

				Object.keys(sectionsJSON).map(function(key){

					if(sectionsJSON[key].data && (key === section)) sectionData = sectionsJSON[key].data;

				});

				var result = sectionData.map(function(itemData){

					return itemData.name;

				});

				if (result.length <= 0) {

					this.output([terminalJSON.errors.cat], 1);
					return;
					
				}

				result.unshift("--- " + section + " -------");
				result.push("-----------------");

				this.output(result, 1);

			}

		},

		addEvents: function(){			

			var controller = this,
				bootJSON   = terminalJSON.boot.sequence;
				bootingInitDelay = 1.5 * 200,
				boot = function(){

					console.info("staring to boot");
				
					var bootingSequence = bootJSON,
						delay = 125;

					setTimeout(function(){

						controller.output(bootingSequence, delay, function(){

							controller.trigger("terminal:boot:finish");

						});

					}, bootingInitDelay);
						
			};

			controller.on("terminal:boot:start", boot);
			controller.on("terminal:input", controller.input);

		},

		input: function(value){

			var controller 		 = this,
				commands 		 = controller.commands,
				deconstructValue = value.split(" "),
				command 		 = deconstructValue[0].toLowerCase(),
				params 			 = [];

			controller.output([value], 1);

			deconstructValue.map(function(param, i){

				if(i > 0) params.push(param);

			});

			if (commands[command]){

				commands[command].call(this, params);				

			}else{
				
				controller.output([terminalJSON.errors.unknown + command], 1);
				return;

			}

		},

		output: function(data, delay, callback){

			var controller 		= this,
				delay 			= delay || (1 * 1000),
				data 			= data || [],
				i 				= 0,
				next 			= function(message){					

					setTimeout(function(){

						if (!data[i]) {

							if (callback) callback();

							return;

						}

						sendOutputEvent(data[i]);

						i += 1;

					}, delay);

				},
				sendOutputEvent = function(message){

					controller.trigger("terminal:output", message);
					next();
				}			

			next();			

		}

	});

	return new TerminalController();

});
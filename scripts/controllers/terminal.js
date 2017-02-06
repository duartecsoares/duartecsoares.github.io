define(["fold/controller",
		"json!data/terminal.json"], function(FoldController, terminalJSON){
	
	var TerminalController = FoldController.extend({

		setup: function(){

			console.log("terminal controller init");

			this.addEvents();

		},

		commands: {

			help: function(){

				var commands = this.commands,
					s = "";

				s = Object.keys(commands).reduce(function(key, s){ 

					s += ", " + key;

					return s;

				});

				this.output([s], 1);

			},

			curl : function(){



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

		input: function(command){

			var controller = this,
				commands = controller.commands;

			if (commands[command]){

				commands[command].call(this);				

			}else{
				
				controller.output([terminalJSON.commands.unknown + command], 1);
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
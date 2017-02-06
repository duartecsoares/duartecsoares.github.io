define(["fold/controller",
		"json!data/terminal.json"], function(FoldController, terminalJSON){
	
	var TerminalController = FoldController.extend({

		setup: function(){

			console.log("terminal controller init");

			this.addEvents();

		},

		addEvents: function(){			

			var controller = this,
				bootJSON   = terminalJSON.boot.sequence;
				bootingInitDelay = 1.5 * 1000,
				boot = function(){

					console.info("staring to boot");
				
					var bootingSequence = bootJSON,
						delay = 175;

					setTimeout(function(){

						controller.output(bootingSequence, delay, function(){

							controller.trigger("terminal:boot:finish");

						});

					}, bootingInitDelay);
						
			};

			controller.on("terminal:boot:start", boot);

		},

		input: function(data){


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
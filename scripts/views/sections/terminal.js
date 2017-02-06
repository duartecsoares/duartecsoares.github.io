define(["fold/view",
		"text!templates/sections/terminal.html",
		"json!data/info.json",
		"json!data/build.json",
		"controllers/terminal"], function(FoldView, template, dataJSON, buildJSON, terminalController){
	
	var TerminalSectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this,
				initBoot = function(){

					terminalController.trigger("terminal:boot:start");

				}

			view.model = {

				user 	: dataJSON.user,
				system  : {

					version : dataJSON.app.version,
					build : buildJSON.build

				}

			}		

			view.addEvents();
			view.once("view:render", initBoot);

		},

		addEvents: function(){

			var view 	= this,
				submit 	= function(data){

					terminalController.trigger("terminal:input", data);

				},
				renderText = function(text){

					var $terminalMonitor = view.$el.find("[data-terminal='monitor']"),
						$codeBlock		 = $("<div>");

					$codeBlock.addClass("code");
					$codeBlock.html(text);
					$terminalMonitor.append($codeBlock);
					$terminalMonitor.scrollTop($terminalMonitor[0].scrollHeight);

				}

			view.listenTo(terminalController, "terminal:output", renderText);
			view.listenTo(terminalController, "terminal:boot:finish", function(){

				var $input = view.$el.find(".terminal-input");

				view.$el.find(".profile-card-status").addClass("active");
				$input.addClass("active");
				$input.focus();

				$input.on("keydown", function(e){					

					var key 	= e.keyCode,
						value 	= $input.val(); 

					if (key === 13) {

						e.preventDefault();
						submit(value);
						$input.val("");

					}

				});

			});

		}

	});

	return TerminalSectionView;

});
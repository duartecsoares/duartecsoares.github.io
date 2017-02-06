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

			console.log("adding evenys");

			var view = this,
				renderText = function(text){

					var $terminalMonitor = view.$el.find("[data-terminal='monitor']"),
						$codeBlock		 = $("<div>");

					$codeBlock.addClass("code");
					$codeBlock.html(text);

					$terminalMonitor.append($codeBlock);

					console.log("rendering", $codeBlock);

					$terminalMonitor.scrollTop($terminalMonitor[0].scrollHeight);

					console.log($terminalMonitor[0].scrollHeight);

				}

			view.listenTo(terminalController, "terminal:output", renderText);
			view.listenTo(terminalController, "terminal:boot:finish", function(){

				view.$el.find(".profile-card-status").addClass("active");

			});

		}

	});

	return TerminalSectionView;

});
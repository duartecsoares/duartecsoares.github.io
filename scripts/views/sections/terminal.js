define(["fold/view",
		"text!templates/sections/terminal.html",
		"json!data/info.json",
		"json!data/build.json"], function(FoldView, template, dataJSON, buildJSON){
	
	var TerminalSectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.model = {

				user 	: dataJSON.user,
				system  : {

					version : dataJSON.app.version,
					build : buildJSON.build

				}

			}

			setTimeout(function(){

				view.$el.find(".profile-card-status").addClass("active");

			}, 3500);

		}

	});

	return TerminalSectionView;

});
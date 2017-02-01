define(["fold/view",
		"text!templates/sections/connect.html",
		"json!data/info.json"], function(FoldView, template, dataJSON){
	
	var ConnectSectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.model = {

				title: dataJSON.sections.connect.title,
				data : dataJSON.user

			}

			setTimeout(function(){

				view.$el.find(".profile-card-status").addClass("active");

			}, 3500);

		}

	});

	return ConnectSectionView;

});
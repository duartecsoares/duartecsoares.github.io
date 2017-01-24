define(["fold/view",
		"text!templates/sections/journey.html",
		"json!data/info.json"], function(FoldView, template, dataJSON){
	
	var JourneySectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.model = dataJSON.sections.journey;

		}

	});

	return JourneySectionView;

});
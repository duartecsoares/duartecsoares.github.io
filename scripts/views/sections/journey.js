define(["fold/view",
		"text!templates/sections/journey.html",
		"json!data/info.json"], function(FoldView, template, infoJSON){
	
	var JourneyView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			this.model = infoJSON.journey;

		}

	});

	return JourneyView;

});
define(["fold/view",
		"text!templates/sections/journey-card.html"], function(FoldView, template){
	
	var JourneyCardView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return JourneyCardView;

});
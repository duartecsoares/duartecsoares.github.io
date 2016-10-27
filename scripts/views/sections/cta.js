define(["fold/view",
		"text!templates/sections/cta.html"], function(FoldView, template){
	
	var ctaView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return ctaView;

});
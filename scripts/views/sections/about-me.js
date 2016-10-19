define(["fold/view",
		"text!templates/sections/about-me.html"], function(FoldView, template){
	
	var AboutMeView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return AboutMeView;

});
define(["fold/view",
		"text!templates/pages/soon.html"], function(FoldView, template){
	
	var SoonView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return SoonView;

});
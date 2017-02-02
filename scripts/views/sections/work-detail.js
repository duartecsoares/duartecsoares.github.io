define(["fold/view",
		"text!templates/sections/work-detail.html"], function(FoldView, template){
	
	var WorkDetailView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return WorkDetailView;

});
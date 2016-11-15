define(["fold/view",
		"text!templates/detail/work.html"], function(FoldView, template){
	
	var DetailWorkView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return DetailWorkView;

});
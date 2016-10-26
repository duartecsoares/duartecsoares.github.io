define(["fold/view",
		"text!templates/sections/work-entry.html"], function(FoldView, template){
	
	var WorkEntryView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return WorkEntryView;

});
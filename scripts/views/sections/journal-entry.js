define(["fold/view",
		"text!templates/sections/journey-entry.html"], function(FoldView, template){
	
	var JournalEntryView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return JournalEntryView;

});
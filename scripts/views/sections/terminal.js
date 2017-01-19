define(["fold/view",
		"text!templates/sections/terminal.html"], function(FoldView, template){
	
	var TerminalSectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return TerminalSectionView;

});
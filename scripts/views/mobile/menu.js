define(["fold/view",
		"text!templates/mobile/menu.html"], function(FoldView, template){
	
	var MobileMenuView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

		}

	});

	return MobileMenuView;

});
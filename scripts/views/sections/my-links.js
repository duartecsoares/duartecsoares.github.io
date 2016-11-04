define(["fold/view",
		"text!templates/sections/my-links.html",
		"json!data/info.json"], function(FoldView, template, infoJSON){
	
	var MyLinks = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			this.model = infoJSON.myLinks

		}

	});

	return MyLinks;

});
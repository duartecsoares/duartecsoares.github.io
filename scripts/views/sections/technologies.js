define(["fold/view",
		"text!templates/sections/technologies.html",
		"json!data/info.json"], function(FoldView, template, dataJSON){
	
	var TechnologiesSectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.model = dataJSON.sections.technologies; 

		}

	});

	return TechnologiesSectionView;

});
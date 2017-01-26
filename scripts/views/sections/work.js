define(["fold/view",
		"text!templates/sections/work.html",
		"json!data/info.json"], function(FoldView, template, dataJSON){
	
	var WorkSectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.model = dataJSON.sections.work;

		}

	});

	return WorkSectionView;

});
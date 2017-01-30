define(["fold/view",
		"text!templates/sections/achievements.html",
		"json!data/info.json"], function(FoldView, template, jsonData){
	
	var AchievementsSectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			this.model = jsonData.sections.achievements;

		}

	});

	return AchievementsSectionView;

});
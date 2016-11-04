define(["fold/view",
		"text!templates/sections/knowledge.html",
		"json!data/info.json"], function(FoldView, template, infoJSON){
	
	var KnowledgeView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			this.model = infoJSON.knowledge;

		}

	});

	return KnowledgeView;

});
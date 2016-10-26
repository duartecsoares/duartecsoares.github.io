define(["fold/view",
		"text!templates/sections/work.html",
		"json!data/info.json",
		"views/sections/work-entry"], function(FoldView, template, infoJSON, WorkEntryView){
	
	var WorkView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			this.model = {

				title : infoJSON.work.title

			};

			this.children = infoJSON.work.list.map(function(workEntry, i){

				var workEntryView = new WorkEntryView({ idView: "work-entry-view-" + i, model: workEntry, targetRef: "journal-container" });

				return workEntryView;

			});

		}

	});

	return WorkView;

});
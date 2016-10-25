define(["fold/view",
		"text!templates/sections/journey.html",
		"views/sections/journal-entry",
		"json!data/info.json"], function(FoldView, template, JournalEntryView, infoJSON){
	
	var JourneyView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			this.model = {

				title : infoJSON.journey.title

			};

			var children = infoJSON.journey.list.map(function(journalEntry, i){

				var journalEntryView = new JournalEntryView({idView: "journal-entry-view-" + i, model: journalEntry, targetRef: "journal-container" });

				return journalEntryView;

			});

			this.children = children;

		}

	});

	return JourneyView;

});
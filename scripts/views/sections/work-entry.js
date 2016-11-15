define(["fold/view",
		"text!templates/sections/work-entry.html",
		"views/components/modal/modal"], function(FoldView, template, modalView){
	
	var WorkEntryView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.on("view:render", function(){

				view.$el.on("click", function(e){

					modalView.open([]);


				});

			});

		}

	});

	return WorkEntryView;

});
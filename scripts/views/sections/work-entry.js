define(["fold/view",
		"text!templates/sections/work-entry.html",
		"views/components/modal/modal",
		"views/detail/work"], function(FoldView, template, modalView, DetailWorkView){
	
	var WorkEntryView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.on("view:render", function(){

				view.$el.on("click", function(e){

					console.log(view.model);

					var detailWorkView = new DetailWorkView({ model: view.model, idView: "detail-work-view" });

					modalView.open([detailWorkView]);


				});

			});

		}

	});

	return WorkEntryView;

});
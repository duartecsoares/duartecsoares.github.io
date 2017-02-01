define(["fold/view",
		"text!templates/sections/journey.html",
		"views/sections/journey-card",
		"json!data/info.json",
		"layout"], function(FoldView, template, JourneyCardView, dataJSON, layout){
	
	var idCardView = 1,
		JourneySectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.model = dataJSON.sections.journey;
			view.once("view:render", view.initCarView);
			view.once("view:render", view.addEvents);
			view.activeCardViewIdView = null;

		},

		initCarView: function(){

			var view = this;

			view.renderCardView(dataJSON.sections.journey.data[0]);

		},

		renderCardView : function(model){

			var view = this,
				journeyCardView = new JourneyCardView({ model : model, idView: idCardView });

			idCardView += 1;

			if(view.activeCardViewIdView) layout.remove(view.activeCardViewIdView);

			layout.add([journeyCardView], view.$el.find("[data-target-journey='journey-card']"));
			view.activeCardViewIdView = journeyCardView.idView;

			return journeyCardView;

		},

		addEvents: function(){

			var view 		= this,
				$triggers 	= view.$el.find("[data-journey-trigger]"),
				$component 	= view.$el.find("[data-component='journey']");

			$triggers.on("click", function(e){

				var $target   	= $(e.currentTarget),
					triggerID 	= parseInt($target.attr("data-journey-trigger")),
					triggerData = view.model.data[triggerID],
					journeyCardView = view.renderCardView(triggerData);

				view.$el.find("[data-journey-trigger].active").removeClass("active");
				$target.addClass("active");

			});

		}

	});

	return JourneySectionView;

});
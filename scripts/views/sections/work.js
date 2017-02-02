define(["fold/view",
		"text!templates/sections/work.html",
		"views/sections/work-detail",
		"json!data/info.json",
		"layout"], function(FoldView, template, WorkDetailView, dataJSON, layout){
	
	var workDetailViewID = 1,
		WorkSectionView = FoldView.extend({

		template: _.template(template),

		setup: function(){

			/* setup fn serves as an specific initializer */

			var view = this;

			view.model = dataJSON.sections.work;
			view.activeWorldDetaiViewID = null;
			view.once("view:render", view.initWorkDetailView);
			view.once("view:render", view.addEvents);			

		},

		initWorkDetailView : function(){

			var view = this;

			view.renderWorkDetailView(dataJSON.sections.work.data[0]);

		},

		renderWorkDetailView : function(detailViewModel){

			var view 			= this,
				$container 		= view.$el.find("[data-target-work='detail-content']"),
				workDetailView 	= new WorkDetailView({ idView: "work-detail-view-" + workDetailViewID, model: detailViewModel });

			workDetailViewID += 1;

			if (view.activeWorldDetaiViewID) layout.remove(view.activeWorldDetaiViewID);

			layout.add([workDetailView], $container);
			view.activeWorldDetaiViewID = workDetailView.idView;

			return workDetailView;

		},

		addEvents : function(){

			var view 		= this,
				$triggers 	= view.$el.find("[data-work-trigger]");

			$triggers.on("click", function(e){

				var $target 	= $(e.currentTarget),
					seletedID 	= parseInt($target.attr("data-work-trigger"));

				$triggers.removeClass("active");
				$target.addClass("active");

				var newView = view.renderWorkDetailView(view.model.data[seletedID]);

			});

		}

	});

	return WorkSectionView;

});
define(["fold/view",
		"text!templates/layout/header.html",
		"views/mobile/menu"], function(FoldView, template, MenuMobileView){
	
	var AppHeaderView = FoldView.extend({

		className: "layout-header-view",
		template: _.template(template),

		setup: function(){

			var view = this;				

			console.log(view);

			view.on("view:render", function(){

				var layout = view.layout,
					$toggle = view.$el.find("[data-action='mobile-menu-toggle']"),
					menuMobieView;

				$toggle.on("click", function(e){

					console.log("toggle");

					if(!menuMobieView) {

						menuMobieView = new MenuMobileView({ idView: "menu-mobile-view" });
						layout.add([menuMobieView]);
						layout.$body.addClass("unscrollable");

					}else{

						layout.remove(menuMobieView.idView);
						menuMobieView = null;
						layout.$body.removeClass("unscrollable");

					}				

				});

			});

		}

	});

	return AppHeaderView;

});
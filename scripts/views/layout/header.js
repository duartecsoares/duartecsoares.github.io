define(["fold/view",
		"text!templates/layout/header.html",
		"views/mobile/menu"], function(FoldView, template, MenuMobileView){
	
	var AppHeaderView = FoldView.extend({

		className: "layout-header-view",
		template: _.template(template),

		setup: function(){

			var view = this;				

			view.on("view:render", function(){

				var layout = view.layout,
					$toggle = view.$el.find("[data-action='mobile-menu-toggle']"),
					toggleClass = "open",
					menuMobieView;

				$toggle.on("click", function(e){

					if(!menuMobieView) {

						menuMobieView = new MenuMobileView({ idView: "menu-mobile-view" });
						layout.add([menuMobieView]);
						view.$el.addClass(toggleClass);
						layout.$body.addClass("unscrollable");						

					}else{

						layout.remove(menuMobieView.idView);
						menuMobieView = null;
						view.$el.removeClass(toggleClass);
						layout.$body.removeClass("unscrollable");

					}				

				});

			});

		}

	});

	return AppHeaderView;

});
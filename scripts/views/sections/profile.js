define(["fold/view",
		"views/sections/about-me",
		"views/sections/my-links"], function(FoldView, AboutMeView, MyLinksView){
	
	var ProfileView = FoldView.extend({

		setup: function(){

			/* setup fn serves as an specific initializer */

			var aboutMeView = new AboutMeView({ idView: "about-me-view" }),
				myLinksView = new MyLinksView({ idView: "my-links-view" });

			this.children = [aboutMeView, myLinksView];

		}

	});

	return ProfileView;

});
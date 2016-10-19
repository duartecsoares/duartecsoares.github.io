define(["fold/controller",
		"json!data/info.json",
		"views/pages/home",
		"views/sections/about-me",
		"views/sections/my-links"], function(FoldController, infoJSON, HomeView, AboutMeView, MyLinksView){
	
	var HomeController = FoldController.extend({

		type: "page-controller",

		setup : function(){

			console.log(infoJSON);

		}

	});

	return new HomeController({ viewDetails: { constructor: HomeView, idView: "home-page-view", children: [{ constructor: AboutMeView, idView: "about-me-view" }, { constructor: MyLinksView, idView: "my-links-view" }]}});

});
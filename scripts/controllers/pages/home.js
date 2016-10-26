define(["fold/controller",
		"json!data/info.json",
		"views/pages/home",
		"views/sections/profile",
		"views/sections/journey",
		"views/sections/work"], function(FoldController, infoJSON, HomeView, ProfileView, JourneyView, WorkView){
	
	var HomeController = FoldController.extend({

		type: "page-controller",

		setup : function(){

			console.log(infoJSON);

		}

	});

	return new HomeController({ viewDetails: { constructor: HomeView, idView: "home-page-view", children: [{ constructor: ProfileView, idView: "profile-view" }, { constructor: JourneyView, idView: "journey-view" }, { constructor: WorkView, idView: "work-view" }]}});

});
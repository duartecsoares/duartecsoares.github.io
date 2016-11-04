define(["fold/controller",
		"json!data/info.json",
		"views/pages/home",
		"views/sections/profile",
		"views/sections/knowledge",
		"views/sections/journey",
		"views/sections/work",
		"views/sections/cta"], function(FoldController, infoJSON, HomeView, ProfileView, KnowledgeView, JourneyView, WorkView, CtaView){
	
	var HomeController = FoldController.extend({

		type: "page-controller",

		setup : function(){

			console.log(infoJSON);

		}

	});

	return new HomeController({ viewDetails: { constructor: HomeView, idView: "home-page-view", children: [{ constructor: ProfileView, idView: "profile-view" }, { constructor: KnowledgeView, idView: "knowledge-view" }, { constructor: JourneyView, idView: "journey-view" }, { constructor: WorkView, idView: "work-view" }, { constructor: CtaView, idView: "cta-view"}]}});

});
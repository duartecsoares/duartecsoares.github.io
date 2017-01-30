define(["fold/controller",
		"json!data/info.json",
		"views/pages/home",
		"views/sections/terminal",
		"views/sections/technologies",
		"views/sections/journey",
		"views/sections/work",
		"views/sections/achievements",
		"views/sections/connect"], function(FoldController, infoJSON, HomeView, TerminalSectionView, TechnologiesSectionView, JourneySectionView, WorkSectionView, AchievementsSectionView, ConnectSectionView){
	
	var HomeController = FoldController.extend({

		type: "page-controller",

		setup : function(){

			console.log(infoJSON);

		}

	});

	return new HomeController({ viewDetails: { constructor: HomeView, idView: "home-page-view", children: [{ constructor: TerminalSectionView, idView: "terminal-section-view"}, { constructor: TechnologiesSectionView, idView: "technologies-section-view" }, { constructor: JourneySectionView, idView: "journey-section-view" }, { constructor: WorkSectionView, idView: "work-section-view" }, { constructor : AchievementsSectionView, idView: "achievements-section-view" }, { constructor: ConnectSectionView, idView: "connect-section-view" } ]}});

});
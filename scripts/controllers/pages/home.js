define(["fold/controller",
		"json!data/info.json",
		"views/pages/home",
		"views/sections/terminal",
		"views/sections/technologies",
		"views/sections/journey"], function(FoldController, infoJSON, HomeView, TerminalSectionView, TechnologiesSectionView, JourneySectionView){
	
	var HomeController = FoldController.extend({

		type: "page-controller",

		setup : function(){

			console.log(infoJSON);

		}

	});

	return new HomeController({ viewDetails: { constructor: HomeView, idView: "home-page-view", children: [{ constructor: TerminalSectionView, idView: "terminal-section-view"}, { constructor: TechnologiesSectionView, idView: "technologies-section-view" }, { constructor: JourneySectionView, idView: "journey-section-view" } ]}});

});
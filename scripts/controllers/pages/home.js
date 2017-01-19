define(["fold/controller",
		"json!data/info.json",
		"views/pages/home",
		"views/sections/terminal"], function(FoldController, infoJSON, HomeView, TerminalSectionView){
	
	var HomeController = FoldController.extend({

		type: "page-controller",

		setup : function(){

			console.log(infoJSON);

		}

	});

	return new HomeController({ viewDetails: { constructor: HomeView, idView: "home-page-view", children: [{ constructor: TerminalSectionView, idView: "terminal-section-view"}]}});

});
define(["fold/controller",
		"json!data/info.json",
		"views/pages/home"], function(FoldController, infoJSON, HomeView){
	
	var HomeController = FoldController.extend({

		type: "page-controller",

		setup : function(){

			console.log(infoJSON);

		}

	});

	return new HomeController({ viewDetails: { constructor: HomeView, idView: "home-page-view" }});

});
define(["fold/controller",
		"views/pages/soon"], function(FoldController, SoonView){
	
	var SoonController = FoldController.extend({

		type: "page-controller",

	});

	return new SoonController({ viewDetails: { constructor: SoonView, idView: "soon-page-view" }});

});
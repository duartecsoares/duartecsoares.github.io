define(["fold/controller"], function(FoldController){
	
	var TerminalController = FoldController.extend({

		setup: function(){

			console.log("terminal controller init");

		}

	});

	return new TerminalController();

});
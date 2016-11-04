define(["fold/controller",
		"router",
		"layout",
		"settings/app",
		"controllers/pages/home",
		"controllers/pages/soon"], function(FoldController, appRouter, layout, appConfig, homeController, soonController){
	
	var env = "prod", //dev or prod
		AppController = FoldController.extend({

		boot : function(){

			var controller = this,
				codeInterval,
				bootNormal = function(){

				if (codeInterval) clearInterval(codeInterval);

				layout.build();
				Backbone.router = appRouter;
				controller.assignRoutes();
				Backbone.history.loadUrl();

				},
				reboot = function(){

					env = "dev";
					soonController.disable();
					layout.remove(soonController.view.idView);
					bootNormal();

			};
			
			layout.$dom.find("[data-view='app-loader']").remove();			
			
			if(env === "dev"){

				bootNormal();
				
			}else{

				var code = [68, 69, 86],
					step = 0;

				soonController.enable();
				layout.add([soonController.view]);

				layout.$win.on("keyup", function(e){

					if (env === "dev") return;

					var keyCode = e.keyCode;

					//d - 68, e - 69, v - 86
					
					if (keyCode === code[step]) {

						step = step + 1;

					}

					if (step === 3) reboot();

				});


				codeInterval = setInterval(function(){

					step = 0;

				}, 6000);

			}

		},

		changeController : function(removeableModule){

			var controller 	= this;

			if(removeableModule){

				layout.scrollTop();

				controller.listenToOnce(removeableModule, "controller:disable", function(){					

					var view = removeableModule.view;

					if(view) layout.remove(view.idView);

					removeableModule.stopListening();
					layout.stopListening(removeableModule);

				});

				removeableModule.disable();		

			}

		},

		assignRoutes : function(){

			var appController 	= this,
				controllersMap  = {
					
					"*path"	 		: homeController,
					"dev"			: soonController,
					""   	 		: homeController

				},
				loadModule = function(module, id, route){
									
					var lastModule = appController.management.moduleEnable || null;

					appController.changeController(lastModule);

					layout.listenTo(module, "controller:load:view", function(moduleView){

						if (lastModule){

							if (lastModule.view) layout.remove(lastModule.view.idView);
							
						}

						module.view = moduleView;
						layout.add([moduleView], layout.base.container);					

					});

					appController.management.moduleEnable = module.enable(id);					

				};

			Object.keys(controllersMap).map(function(key){

				appRouter.route(key, function(param){
					
					loadModule(controllersMap[key], param, key);

				});

			});

			setTimeout(function(){

				layout.calcViewport();

			});

		},

		management : {

			loadTime : null,
			hasBoot : false,
			hasSession : false,
			moduleEnable : null

		}

	});

	return new AppController();

});
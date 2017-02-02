define(["fold/view",
		"text!templates/layout/footer.html",
		"json!data/info.json"], function(FoldView, template, dataJSON){
	
	var AppFooterView = FoldView.extend({

		className: "layout-footer-view",
		template: _.template(template),

		setup : function(){

			var view 			 = this,
				copyright 		 = "Handcrafted by duartecsoares © Copyright " + new Date().getFullYear() +" using Föld WebApp Pack.",
				socialData 		 = dataJSON.links,
				techData  		 = dataJSON.sections.technologies.data,
				sectionsData	 = dataJSON.sections,
				achievementsData = dataJSON.sections.achievements.data; 

			var socialLinks = Object.keys(socialData).map(function(key){

				return {

					name: key,
					link: socialData[key].link

				}

				}),
				sectionsLinks = Object.keys(sectionsData).map(function(key){

					return {

						name : key,
						link: "#" + key

					}

				}),
				techLinks = techData.map(function(techItem){

					return {

						name : techItem.name,
						link: techItem.link

					}

				}),
				achievementsLinks = achievementsData.map(function(achievementsItem){

					return {

						name : achievementsItem.name,
						link : "#" + achievementsItem.name

					}

				});

			view.model = {

				lists : [

					{
						title : "Where To Find Me",
						data: socialLinks

					},

					{
						title : "Things About Me",
						data: sectionsLinks

					},

					{
						title : "Latest Technologies",
						data: techLinks

					},

					{
						title : "Latest Achievements",
						data: achievementsLinks

					}

				],

				copyright : copyright

			}

		}

	});

	return AppFooterView;

});
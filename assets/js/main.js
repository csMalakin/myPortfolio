/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav'),
		$skills=$('#skills');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	//Skills Scrolly

	var $skills_a = $skills.find('a');

	$skills_a
		.addClass('scrolly')
		.on('click', function(e) {

			var $this = $(this);

			// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

			// Prevent default.
				e.preventDefault();

			// Deactivate all links.
				$nav_a.removeClass('active');

			// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

		})
		.each(function() {

			var	$this = $(this),
				id = $this.attr('href'),
				$section = $(id);

			// No section for this link? Bail.
				if ($section.length < 1)
					return;

			// Scrollex.
				$section.scrollex({
					mode: 'middle',
					top: '-10vh',
					bottom: '-10vh',
					initialize: function() {

						// Deactivate section.
							$section.addClass('inactive');

					},
					enter: function() {

						// Activate section.
							$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
							if ($skills_a.filter('.active-locked').length == 0) {

								$skills_a.removeClass('active');
								$this.addClass('active');

							}

						// Otherwise, if this section's link is the one that's locked, unlock it.
							else if ($this.hasClass('active-locked'))
								$this.removeClass('active-locked');

					}
				});

		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);


let htmlLogo=document.getElementById("htmlLogo")
let cssLogo=document.getElementById("cssLogo")


let skillLogos = document.querySelectorAll(".skillLogo")

for(const skillLogo of skillLogos){
	skillLogo.ontouchstart = function (element){
		let test =element
		alert("next function resetclasslist")
		resetClasslist()
		alert("next function addSelected")
		addSelected(element)
	
		alert("next function resetHidden")
		resetHidden()
		alert("next function switch")
		let projects=""
		alert(test)

		switch (test.originalTarget.id) {
			
			case "htmlLogo":
				 projects= document.querySelectorAll(".html")
				 alert("in htmlLogo")
				 console.log(test.originalTarget)
				for(const project of projects){
					project.classList.remove("hidden")

				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen HTML eingesetzt wurde"
				break
			case "cssLogo":
				 projects=document.querySelectorAll(".css")
				for(const project of projects){
					project.classList
					.remove("hidden")
				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen CSS eingesetzt wurde"
				break
			case "javaScriptLogo":
				projects=document.querySelectorAll(".javaScript")
				for(const project of projects){
					   project.classList.remove("hidden")
				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen JavaScript eingesetzt wurde"
				break
				
			case "javaLogo":
					projects=document.querySelectorAll(".java")
					for(const project of projects){
						   project.classList.remove("hidden")
					}
					document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen Java ingeesetzt wurde"
					break
			
			case "nodeLogo":
				projects=document.querySelectorAll(".node")
				for(const project of projects){
					   project.classList.remove("hidden")
				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen node.js eingesetzt wurde"
				break

			case "mongoLogo":
				projects=document.querySelectorAll(".mongoDb")
				for(const project of projects){
					   project.classList.remove("hidden")
				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen MongoDB eingesetzt wurde"
				break

			case "handlebarsLogo":
					projects=document.querySelectorAll(".handlebars")
					for(const project of projects){
						   project.classList.remove("hidden")
					}
					document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen Handlebars.js eingesetzt wurde"
					break
		
			default:
				break;
		}



	}
}
for(const skillLogo of skillLogos){
	skillLogo.addEventListener("click",(element)=>{
		resetClasslist()
		addSelected(element)
		resetHidden()
		
		let projects=""

		switch (element.explicitOriginalTarget.id) {
			
			case "htmlLogo":
				 projects= document.querySelectorAll(".html")
				for(const project of projects){
					project.classList.remove("hidden")

				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen HTML eingesetzt wurde"
				break
			case "cssLogo":
				 projects=document.querySelectorAll(".css")
				for(const project of projects){
					project.classList
					.remove("hidden")
				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen CSS eingesetzt wurde"
				break
			case "javaScriptLogo":
				projects=document.querySelectorAll(".javaScript")
				for(const project of projects){
					   project.classList.remove("hidden")
				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen JavaScript eingesetzt wurde"
				break
				
			case "javaLogo":
					projects=document.querySelectorAll(".java")
					for(const project of projects){
						   project.classList.remove("hidden")
					}
					document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen Java ingeesetzt wurde"
					break
			
			case "nodeLogo":
				projects=document.querySelectorAll(".node")
				for(const project of projects){
					   project.classList.remove("hidden")
				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen node.js eingesetzt wurde"
				break

			case "mongoLogo":
				projects=document.querySelectorAll(".mongoDb")
				for(const project of projects){
					   project.classList.remove("hidden")
				}
				document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen MongoDB eingesetzt wurde"
				break

			case "handlebarsLogo":
					projects=document.querySelectorAll(".handlebars")
					for(const project of projects){
						   project.classList.remove("hidden")
					}
					document.getElementById("projectHeader").textContent="Meine letzten Projekte in denen Handlebars.js eingesetzt wurde"
					break
		
			default:
				break;
		}



	})
}








function resetClasslist(){
	
	let logos = document.querySelectorAll('.skillLogo')
	for(const logo of logos){
		logo.classList.remove("selected")
	}
}

function addSelected(element){	
	document.getElementById(element.explicitOriginalTarget.id).classList.add("selected")
	
}

function resetHidden(){
	let skills= document.querySelectorAll(".portfolioContainer")

	for(const skill of skills){
		skill.classList.add("hidden")
	}

	document.getElementById("selectSkillText").classList.add("hidden")
}



$(document).ready(function() {

	// toggle hamburger
	let Hamburger = false;
	$('#hamburger').click(function() {
		if (Hamburger) {
			Hamburger = !Hamburger;
			$(this).removeClass('is-active');
			$('section.header').removeClass('mobile-menu-active')
		} else {
			Hamburger = !Hamburger;
			$(this).addClass('is-active');
			$('section.header').addClass('mobile-menu-active');

		}
	})

	// if index page
	if ($('section.hero')[0]) {
		$('section.header').addClass('white_header');
	}

	// appear element in the view
	function isScrolledIntoView(elem) {
		($(elem).length == 0)? false:true;
		var viewTop = $(window).scrollTop();
		var viewBottom = viewTop + $(window).height();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
		return ((elemBottom <= viewBottom) && (elemTop >= viewTop))
	}

	function addAppear(){
		$('.slide_up_text').each(function (i,el) {
			(isScrolledIntoView(el)) && $(this).addClass('slide_up_text--active') // toggle: || $(this).removeClass('slide_up_text--active');
		});
	}


	// toggle location
	let ChooseWindowVis = false;


	$('.location_toggle, .regions a').click(function() {
		$('.regions ul').hide();
		if (ChooseWindowVis) {
			ChooseWindowVis =!ChooseWindowVis;
			$('#choose').removeClass('is-active');
			$('#choose .slide_up_text--active').removeClass('slide_up_text--active');
			languageTab.css({'color':''});
		}
		else {
			ChooseWindowVis =!ChooseWindowVis;
			$('#choose').addClass('is-active');
			addAppear();
		}
	});

	let languageTab = $('.language .name a');
	languageTab.each(function(i,el) { 
		$(el).click(function(){ // click on name
			languageTab.css({'color':'#CCC'});
			$(this).css({'color':'#cb1d00'}); //hover active tab
			$(`.regions ul`).removeClass('slide_up_text--active').hide();
			let activeRegion = $(`.regions ul:nth-child(${i+1})`);
			activeRegion.show(); // show closest region list w animation
			addAppear();


		})
	})







	$(window).on('DOMContentLoaded load resize scroll', addAppear); 
});

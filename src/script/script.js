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
	addAppear();

	// toggle location
	let ChooseWindowVis = false;
	let languageTab = $('.language .name a');

	$('.location_toggle, .regions a').click(function() {
		$('.regions ul').hide();
		if (ChooseWindowVis) {
			ChooseWindowVis =!ChooseWindowVis;
			$('#choose').removeClass('is-active');
			$('#choose .slide_up_text--active').removeClass('slide_up_text--active');
			$('.language').show()
		}
		else {
			ChooseWindowVis =!ChooseWindowVis;
			$('#choose').addClass('is-active');
			addAppear();
		}
	});

	languageTab.each(function(i,el) { 
		$(el).click(function(){ // click on name
			$('.language').hide();
			$(`.regions ul`).removeClass('slide_up_text--active').hide();
			let activeRegion = $(`.regions ul:nth-child(${i+1})`);
			activeRegion.show(); // show closest region list w animation
			addAppear();
		})
	})

	$(window).on('DOMContentLoaded load resize scroll', addAppear); // animation initial by scroll

	// FAQ toggle module
	let faq_header = $('ul.faq header');
	
	faq_header.each(function(i,el){
		if(i === 0){ // activate first item
			$(el).toggleClass('active');
		};
		$(el).click(function(){ // click on header
			$(el).toggleClass('active');
			// $(el).siblings('main').slideDown();
		})
	})
});

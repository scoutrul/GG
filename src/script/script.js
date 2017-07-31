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

	// toggle location
	let Choose = false;
	$('.location_toggle').click(function() {
		if (Choose) {
			Choose =!Choose;
			$('#choose').removeClass('is-active');
		}
		else {
			Choose =!Choose;
			$('#choose').addClass('is-active');
			$('#choose .slide_up_text').removeClass('slide_up_text--active');
			addAppear()
		}
	})

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

	$(window).on('DOMContentLoaded load resize scroll', addAppear); 
});

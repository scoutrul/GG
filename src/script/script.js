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
			$('section.header').addClass('mobile-menu-active')
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
		}

	})


	// appear element in the view
	function isScrolledIntoView(elem) {
		if ($(elem).length == 0) {
			return false;
		}
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)); //try it, will only work for text
		// return (docViewBottom >= elemTop && docViewTop <= elemBottom);
	}

	function appear(){
		$('.slide_up_text').each(function () {
			(isScrolledIntoView(this)) && $(this).addClass('slide_up_text--active') 
		});
	}
	

	$(window).on('scroll', function () {
		appear()
	})
	appear()
});

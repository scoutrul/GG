$(document).ready(function() {

	let Hamburger = false;
	let Choose = false;

	// toggle hamburger
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

	// if not index
	if ($('section.hero')[0]) {
		$('section.header').addClass('white_header');
		console.log('white')
	}
	else {
		console.log('black')
	}

	// toggle location
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
});

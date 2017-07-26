$(document).ready(function() {

	let menuCondition = false;

	$('#hamburger').click(function() {
		if (menuCondition) {
			menuCondition = !menuCondition;
			$(this).removeClass('is-active');
			$('section.header').removeClass('mobile-menu-active')

		} else {
			menuCondition = !menuCondition;
			$(this).addClass('is-active');
			$('section.header').addClass('mobile-menu-active')
		}
	})

	if ($('section.hero')[0]) {
		$('section.header').addClass('white_header');
		console.log('white')
	}
	else {
		console.log('black')

	}

});

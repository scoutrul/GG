$(document).ready(function() {

	let menuCondition = false;

	$('#hamburger').click(function() {
		if (menuCondition) {
			console.log(menuCondition);
			menuCondition = !menuCondition;
			$(this).removeClass('is-active');
			$('section.header').removeClass('mobile-menu-active')

		} else {
			console.log(menuCondition);
			menuCondition = !menuCondition;
			$(this).addClass('is-active');
			$('section.header').addClass('mobile-menu-active')




		}
	})

});

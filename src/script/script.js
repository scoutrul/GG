$(function() {

//////////////////////////////////////////////////////////////////////////////////

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
	});

//////////////////////////////////////////////////////////////////////////////////

	// if index page
	if ($('section.hero')[0]) {
		$('section.header').addClass('white_header');
	};

//////////////////////////////////////////////////////////////////////////////////

	// toggle location
	$('.language .name a').each(function(i,el) { 
		$(el).click(function(){ // click on name
			$('.language').hide();
			$('#choose .regions ul').removeClass('slide_up_text--active');
			$('.regions ul').hide();
			$(`.regions ul:nth-child(${i+1})`).show(); // show closest region list w animation
			appearModule.addToAllClasses();
		})
	});

	let ChooseWindowVis = false;
	$('.location_toggle').click(function() {
		$('.regions ul').hide();
		if (ChooseWindowVis) {
			$('#choose').removeClass('choose--active');
			$('#choose .slide_up_text--active').removeClass('slide_up_text--active');
			$('.language').show()
			ChooseWindowVis =!ChooseWindowVis;
		}
		else {
			$('#choose').addClass('choose--active');
			appearModule.addToAllClasses();
			ChooseWindowVis =!ChooseWindowVis;
		}
	});

//////////////////////////////////////////////////////////////////////////////////

	const appearModule = {
		addToAllClasses: function(){
			$('.slide_up_text').each(function (i,el) {
				(appearModule.isScrolledIntoView(el)) && $(this).addClass('slide_up_text--active') // toggle: || $(this).removeClass('slide_up_text--active');
			})
		},
		isScrolledIntoView: function(elem) {
			($(elem).length == 0)? false:true;
			var viewTop = $(window).scrollTop();
			var viewBottom = viewTop + $(window).height();
			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();
			return ((elemBottom <= viewBottom) && (elemTop >= viewTop))
		}
	};

	// if window is visible: do appear, else - wait for user action
	window.onload = function() {
		(document.visibilityState === 'visible') && setTimeout(appearModule.addToAllClasses, 1000)
	};
	$(window).on('focus resize scroll click mousemove keydown', appearModule.addToAllClasses ) // init

//////////////////////////////////////////////////////////////////////////////////

	// accoirdion toggle module (HELP, CART)
	let accoirdion_toggle = $('.accordion_items header');
	accoirdion_toggle.each(function(i,el){
		$(el).click(function(){ 
			$(el).toggleClass('active');
		})
	});

//////////////////////////////////////////////////////////////////////////////////

	// CONTACT toggle tabs module
	let address_Header = $('ul.office-tab li');
	address_Header.each(function(i,el){
		$('.office address').hide();
		$('.office address:nth-child(1)').show();
		address_Header.first()
		$('ul.office-tab li:nth-child(1)').addClass('office-tab--active');
		$(el).click(function(){ 
			$('.office-tab--active').removeClass('office-tab--active');
			$('.office address').hide();
			$(`ul.office-tab li:nth-child(${i+1})`).addClass('office-tab--active');
			$(`.office address:nth-child(${i+1})`).show();
		})
	});

//////////////////////////////////////////////////////////////////////////////////

});

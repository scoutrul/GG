$(function() {

    //////////////////////////////////////////////////////////////////////////////////

    // toggle hamburger
    let Hamburger = false;
    $('#hamburger').click(function() {
        if (Hamburger) {
            Hamburger = !Hamburger;
            $(this).removeClass('is-active');
            $('.mobile_menu').removeClass('mobile_menu-active');

        } else {
            Hamburger = !Hamburger;
            $(this).addClass('is-active');
            $('.mobile_menu').addClass('mobile_menu-active');
            $('.mobile_menu .slide_up_text--active').removeClass('slide_up_text--active');

            appearModule.addToAllClasses
        }
    });

    //////////////////////////////////////////////////////////////////////////////////

    // if index page
    if ($('section.hero')[0]) {
        $('section.header').addClass('white_header');
    };

    //////////////////////////////////////////////////////////////////////////////////

    // toggle location
    $('.language .name a').each(function(i, el) {
        $(el).click(function() { // click on name
            $('.language').hide();
            $('#choose .slide_up_text--active').removeClass('slide_up_text--active');
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
            ChooseWindowVis = !ChooseWindowVis;
        } else {
            $('#choose').addClass('choose--active');
            appearModule.addToAllClasses();
            ChooseWindowVis = !ChooseWindowVis;
        }
    });

    //////////////////////////////////////////////////////////////////////////////////

    const appearModule = {
        addToAllClasses: function() {
            $('.slide_up_text').each(function(i, el) {
                (appearModule.isScrolledIntoView(el)) && $(this).addClass('slide_up_text--active') // toggle: || $(this).removeClass('slide_up_text--active');
            })
        },
        isScrolledIntoView: function(elem) {
            ($(elem).length == 0) ? false: true;
            var viewTop = $(window).scrollTop();
            var viewBottom = viewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
            return ((elemBottom <= viewBottom) && (elemTop >= viewTop))
        }
    };

    // if window is visible: do appear, else - wait for user action
    window.onload = function() {
        (document.visibilityState === 'visible') && setTimeout(appearModule.addToAllClasses, 1000);
    };
    $(window).on('focus resize scroll click mousemove keydown', appearModule.addToAllClasses); // init

    //////////////////////////////////////////////////////////////////////////////////
    $('.is-empty').hide(); //temp

    // accoirdion toggle module (HELP, CART)
    let accoirdion_toggle = $('.accordion_items header');
    accoirdion_toggle.each(function(i, el) {
        $(el).click(function() {
            $(el).toggleClass('active');
        })
        $(el).siblings('.delete').click(function() {
            $(el).parents('.product').hide('slow');

            setTimeout(function() {
                $(el).parents('.product').remove();
                //temp
	            $('.is-empty').show();
	            $('.cart-inner').hide();
            }, 1000);

        })
    });


    //////////////////////////////////////////////////////////////////////////////////

    // CONTACT toggle tabs module
    let address_Header = $('ul.office-tab li');
    address_Header.each(function(i, el) {
        $('#offices address').hide();
        $('#offices address:nth-child(1)').show();
        address_Header.first()
        $('ul.office-tab li:nth-child(1)').addClass('office-tab--active');
        $(el).click(function() {
            $('.office-tab--active').removeClass('office-tab--active');
            $('#offices address').hide();
            $(`ul.office-tab li:nth-child(${i+1})`).addClass('office-tab--active');
            $(`#offices address:nth-child(${i+1})`).show();
        })
    });

    //////////////////////////////////////////////////////////////////////////////////

});
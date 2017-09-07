$(function() {

    //////////////////////////////////////////////////////////////////////////////////

    // toggle hamburger
    let Hamburger = false;
    $('#hamburger').click(function() {
        if (!Hamburger) {
            $(this).addClass('is-active');
            $('.mobile_menu').addClass('mobile_menu-active');
            $('.mobile_menu .slide_up_text--active').removeClass('slide_up_text--active');

            Hamburger = !Hamburger;
            setTimeout(()=>appearModule.addToAllClasses(),300)
            

        } else {
            $(this).removeClass('is-active');

            $('.mobile_menu').removeClass('mobile_menu-active');
            Hamburger = !Hamburger;
            setTimeout(()=>$('.mobile_menu-active .slide_up_text--active').removeClass('slide_up_text--active'),300)

        }
    });

    //////////////////////////////////////////////////////////////////////////////////

    // if index page
    if ($('section.hero')[0]) {
        $('section.header').addClass('index_layer');
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
            if (window.innerWidth < 400) {
                return true
                // mobile width detect
            }
            return ((elemBottom <= viewBottom) && (elemTop >= viewTop))
        }
    };

    // if window is visible: do appear, else - wait for user action
    window.onload = function() {
        (document.visibilityState === 'visible') && setTimeout(appearModule.addToAllClasses, 500);
    };
    let hasappear = false;
    !hasappear && $(window).on('focus resize scroll click mousemove keydown', function(){
    hasappear = true;
    appearModule.addToAllClasses}); // init

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

            setTimeout(function() { // demo for empty cart
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


    // feedback form 
    let feddback_form = $('form#feedback');
    feddback_form.find('input').on('change click focus', function(){
        let title = $(this).siblings('label');
        ($(this).val()) ? title.addClass('active') : title.removeClass('active');
    })

    let feedback_submit = $('#feedback_submit');
    let feddback_form_send = $('.feedback_send');
    let feddback_form_container = $('.feedback_form');
    feddback_form_send.hide();

    feedback_submit.click(function(){ // was sending demo
        feddback_form_container.hide();
        feddback_form_send.show();
        $("html, body").animate({ scrollTop: $('.content.feedback').offset().top }, 1000);
    })

    //////////////////////////////////////////////////////////////////////////////////

    //products page
    let switchHome = $('#switchHome');
    let switchOffice = $('#switchOffice');
    let homelist = $('#homelist');
    let officelist = $('#officelist');
    const hideProducts = function(){
        $('.product-list').hide()
    }; 
    hideProducts();
    homelist.show();
    switchHome.toggleClass('active');

    switchHome.click(function(){
        hideProducts();
        $('.product .slide_up_text').removeClass('slide_up_text--active');
        homelist.show();
        $(this).toggleClass('active').siblings('.active').toggleClass('active');
    })
    switchOffice.click(function(){
        hideProducts();
        $('.product .slide_up_text').removeClass('slide_up_text--active');
        officelist.show();
        $(this).toggleClass('active').siblings('.active').toggleClass('active');
    })


});
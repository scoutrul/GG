!function(){"use strict";$(document).ready(function(){function e(e){0!=$(e).length;var s=$(window).scrollTop(),i=s+$(window).height(),t=$(e).offset().top,o=t+$(e).height();return o<=i&&t>=s}function s(){$(".slide_up_text").each(function(){e(this)&&$(this).addClass("slide_up_text--active")||$(this).removeClass("slide_up_text--active")})}var i=!1;$("#hamburger").click(function(){i?(i=!i,$(this).removeClass("is-active"),$("section.header").removeClass("mobile-menu-active"),$("html").css({overflow:"visible"})):(i=!i,$(this).addClass("is-active"),$("section.header").addClass("mobile-menu-active"),$("html").css({overflow:"hidden"}))}),$("section.hero")[0]&&$("section.header").addClass("white_header");var t=!1;$(".location_toggle").click(function(){t?(t=!t,$("#choose").removeClass("is-active")):(t=!t,$("#choose").addClass("is-active"),$("#choose .slide_up_text").removeClass("slide_up_text--active"),s())}),$(window).on("scroll",function(){s()}),s()})}();
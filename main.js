(function ($) {
	$(document).ready(function () {

		//		 $(window).on("load", function(){
		//		 	$(".loader-wrapper").fadeOut(1000);
		//		 });

		// background-header move on scroll
		$(window).on("scroll", function (event) {
			var y = $(window).scrollTop();
			$(".section-header").filter(function () {
				return $(this).offset().top < (y + $(window).height()) && $(this).offset().top + $(this).height() > y;
			}).css('background-position', '0px ' + parseInt(y / 5) + 'px');
		});

		//		image opacity toggler

		$('.image-services').on('mouseenter', function (event) {
			$(this).children().stop().fadeIn(300);
		}).on("mouseleave", function (event) {
			$(this).children().stop().fadeOut(300);
		});

		//		rozwijane pytania

		var titles = $(".accordion-title")
		var texts = $(".accordion-text")

		texts.hide()

		titles.on('click', function () {

			titles.removeClass("accordion-title--active")
			texts.stop().slideUp(300)

			var that = $(this);
			var text = that.next(".accordion-text")
			var isVisible = text.is(":visible")

			that.toggleClass("accordion-title--active", !isVisible)

			if (!isVisible) {
				text.stop().slideDown(300);
			} else {
				text.stop().slideUp(300);
			}
		})

		//smooth scroll

		$('a[href*="#"]')
			.not('[href="#"]')
			.not('[href="#0"]')
			.click(function (event) {
				if (
					location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
					location.hostname == this.hostname
				) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						event.preventDefault();
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000);
					}
				}
			});

		//burger nav

		$(".burger").on('click', function () {
			//toggle nav
			$(".navigation-links").toggleClass('active-links')


			//animate links
			$('.navigation-link').each(function (index, item) {
				if (item.style.animation) {
					item.style.animation = ""
				} else {
					$(item).css("animation", `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`);
				}
			});

			//burger change on X

			$(".burger").toggleClass('toggle')
		})

		$('.navigation-link').on('click', function () {

			$(".navigation-links").removeClass('active-links')
			$(".burger").removeClass('toggle')

			$(".navigation-link").css("opacity", "0")

			$('.navigation-link').each(function (index, item) {

				$(item).css("animation", "");

			});
		})

		//slick slider
		
		function slickify(){
			$('.slider').slick({
				centerMode: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				arrows:true,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 600,
						settings: {
							centerMode: false,
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
				]
			});
		}
		slickify();   

	})
})(jQuery)
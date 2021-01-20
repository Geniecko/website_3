(function($){
	$(document).ready(function(){
		
//		 $(window).on("load", function(){
//		 	$(".loader-wrapper").fadeOut(1000);
//		 });
		
//		background-header move on scroll
		$(window).on("scroll",function(event) {
			var y = $(window).scrollTop();
			$(".section-header").filter(function(){
				return $(this).offset().top < (y + $(window).height()) && $(this).offset().top + $(this).height() > y;
			}).css('background-position', '0px ' + parseInt(y / 5) + 'px');
		});
		
//		image opacity toggler
		
		$('.image-services').on('mouseenter',function(event){
			$(this).children().stop().fadeIn(300);
		}).on("mouseleave", function(event){
			$(this).children().stop().fadeOut(300);
		});
		
//		rozwijane pytania
		
		var titles = $(".accordion-title")
		var texts = $(".accordion-text")

		texts.hide()

		titles.on('click', function(){
			
			titles.removeClass("accordion-title--active")
			texts.stop().slideUp(300)
			
			var that = $(this);
			var text = that.next(".accordion-text")
			var isVisible = text.is(":visible")

			that.toggleClass("accordion-title--active", !isVisible)

			if(!isVisible) {
				text.stop().slideDown(300);
			} else {
				text.stop().slideUp(300);
			}
		})
		
		//smooth scroll
		
		$('a[href*="#"]')
			.not('[href="#"]')
			.not('[href="#0"]')
			.click(function(event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
				&& 
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
		
	})
})(jQuery)
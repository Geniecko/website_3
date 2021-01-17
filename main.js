(function($){
	$(document).ready(function(){
	
		
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
		
	})
})(jQuery)
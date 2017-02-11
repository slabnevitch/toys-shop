$(function() {


	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			autoplay: true,
			navText: ['', '']
		});

	$('.display-link.fancybox').fancybox({
		padding: [0, 0, 0, 0]
	});
	$('.header__message.fancybox, .product-card__callback-link.fancybox').fancybox({
		padding: [0, 0, 0, 0]
	});
	$('.header__cab.fancybox').fancybox({
		padding: [0, 0, 0, 0]
	});
		
		if($('.categories__title').length){
			$('.categories__title').on('click', menuSlide);
		}

		if($('.tabs__link').length){
			$('.tabs__link').on('click', tabsClick);
		}

		if($('.product-card__slideshow').length){
			$('.product-card__slideshow-link').on('click', thumbsClick);
		}
	});

	var thumbsClick = function(e) {
		e.preventDefault();

		var $this = $(this),
			$siblings = $this.parent().siblings(),
			$dataMiddle = $this.attr('data-middle-img'),
			$display = $('.display-link'),
			$displayImg = $display.find('.product-card__slideshow-img');
		console.log($siblings);
		$this.addClass('product-card__slideshow-link--active');
		$siblings.find('.product-card__slideshow-link')
				.removeClass('product-card__slideshow-link--active');
		$display.fadeOut(function() {
			$displayImg.attr('src', $dataMiddle);
			$(this).fadeIn();
		});
	}
	var tabsClick = function(e) {
		e.preventDefault();
		
		var $this = $(this),
				$parent = $this.closest('.tabs__item'),
				$content = $('.tabs__contents'),
				$index = $this.attr('data-index');

				$content.find('[data-index="'+ $index +'"]')
								.show()
								.siblings()
								.hide();

				$parent.addClass('tabs__item--active');
				$parent.siblings()
						.removeClass('tabs__item--active');
				console.log($parent);
	}

	var menuSlide = function(e) {
		e.preventDefault();
		var $this = $(this),
			$menuItemSubmenu  = $this.parent().find('.categories__content'),
			$link = $this.parent().find('.categories__title-link'),
			$siblings = $menuItemSubmenu.parent().siblings().find('.categories__content'),
			$siblingsLink = $this.closest('.categories__item').siblings().find('.categories__title-link');
		
		
		if(!$menuItemSubmenu.hasClass('open')){
			 $menuItemSubmenu.stop().slideDown();
			 $menuItemSubmenu.addClass('open');
			 $siblings.stop().slideUp();
			 $link.addClass('categories__title-link--active');
			 $siblingsLink.removeClass('categories__title-link--active');
			 	
		}else{
			$menuItemSubmenu.stop().slideUp();
			$menuItemSubmenu.removeClass('open');
			$link.removeClass('categories__title-link--active');
		}
	};
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}
});

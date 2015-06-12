if(typeof SimpleSite == 'undefined'){  
	var SimpleSite = {};
}

(function($){
	$.fn.toggleMenuBar = function(options){
		if(!$.data(this, 'toggleMenuBar')){
			$.data(this, 'toggleMenuBar', new SimpleSite.toggleMenuBar(this, options));
		}
		return this;
	};

	$.fn.toggleMenuBar.defaults = {
			control: '.header__menu-bar-expand'
			, menuBar: '.menu-bar'
			, togglingClass: 'active'	
	};

	SimpleSite.toggleMenuBar = function(options){
		this.hParam = {}; $.extend(this.hParam, $.fn.toggleMenuBar.defaults, options || {} );	

		this.jControll = $(this.hParam.control);

		this.initEvents();
	}

	SimpleSite.toggleMenuBar.prototype.initEvents = function(){
		this.jControll.click($.proxy(this.toggleClass, this));
	}

	SimpleSite.toggleMenuBar.prototype.toggleClass = function(event){
		$(event.currentTarget).toggleClass(this.hParam.togglingClass);

		this.toggleBar();
	}

	SimpleSite.toggleMenuBar.prototype.toggleBar = function(){
		$(this.hParam.menuBar).toggleClass('js-hidden');
	}

	$('.header__menu-bar-expand').toggleMenuBar();

	$('.slider').flexslider({
			animation: 'slide'
			, touch: 'true'
			, controlNav: true
			, selector: '.slider__list > li.slider__list__item'
		});
	
})(jQuery);


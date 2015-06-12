if(typeof nxte == 'undefined'){  
	var nxte = {};
}

(function($){
	$.fn.toggleMenuBar = function(options){
		if(!$.data(this, 'toggleMenuBar')){
			$.data(this, 'toggleMenuBar', new nxte.toggleMenuBar(this, options));
		}
		return this;
	};

	$.fn.toggleMenuBar.defaults = {
			control: '.header__menu-bar-expand'
			, menuBar: '.menu-bar'
			, togglingClass: 'active'	
	};

	nxte.toggleMenuBar = function(options){
		this.hParam = {}; $.extend(this.hParam, $.fn.toggleMenuBar.defaults, options || {} );	

		this.jControll = $(this.hParam.control);

		this.initEvents();
	}

	nxte.toggleMenuBar.prototype.initEvents = function(){
		this.jControll.click($.proxy(this.toggleClass, this));
	}

	nxte.toggleMenuBar.prototype.toggleClass = function(event){
		$(event.currentTarget).toggleClass(this.hParam.togglingClass);

		this.toggleBar();
	}

	nxte.toggleMenuBar.prototype.toggleBar = function(){
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











$(function(){
	$(window).resize(res);
	function res(){
		if($(window).width() < 768){
			$('.hero__button').each(function(){
				let this_btn = $(this);
				let to_container = this_btn.parents('.hero').find('.hero__image').parents('.col-12');


				this_btn.appendTo(to_container);
			});
		}

		if($(window).width() > 768){
			$('.hero__button').each(function(){
				let this_btn = $(this);
				let to_container = this_btn.parents('.hero').find('.hero__name').parents('.col-12');
				this_btn.appendTo(to_container);
			});
		}
	}

	res();
});




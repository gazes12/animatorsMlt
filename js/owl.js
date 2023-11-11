


let infoBox_name = $('.heroes-infoBox__name');
let infoBox_desc = $('.heroes-infoBox__desc');
let infoBox_button = $('.heroes-infoBox__button');



let heroes_fon = $('.heroes__fon');




let owl_heroes = $('.heroes-carousel .owl-carousel').owlCarousel({
	slideSpeed: 1000,
	paginationSpeed: 1000,
	center: true,
	stopOnHover: true,
	items: 1,
	loop: true,
	margin: 30,
  dotsContainer: '.heroes-nav',
    nav: true,
    navText : ["<i class='heroes-carousel__prev heroes-carousel__navbtn fa-solid fa-angle-left'></i>","<i class='heroes-carousel__next heroes-carousel__navbtn fa-solid fa-angle-right'></i>"],
});



$('.heroes__dot').click(function () {
  owl_heroes.trigger('to.owl.carousel', [$(this).index(), 300]);
});


owl_heroes.on('changed.owl.carousel', function(e){
  setTimeout(() =>{  addAnimation(e.relatedTarget.relative(e.relatedTarget.current()));}, 1);
});



function addAnimation(index){
    $('.heroes').find('.heroes__fon').remove();
    $('.heroes-info').find('.heroes-info__name').remove();
    $('.heroes-info').find('.heroes-info__desc').remove();
    $('.heroes-info').find('.heroes-info__button').remove();

    


    $("body").get(0).style.setProperty("--support-color", $('.heroes-carousel .owl-item.active').find('.heroes-carousel__item').data('color'));
    $('<div class="heroes__fon"></div>').appendTo($('.heroes'));

    $(`<div class="heroes-info__name animate animation-slideToRight animation-duration-fast animation-fillmode-forwards">${$('.heroes-carousel .owl-item.active').find('.heroes-carousel__item').data('name')}</div>`).appendTo('.heroes-info');
    $(`<div class="heroes-info__desc animate animation-slideToRight animation-duration-slow animation-fillmode-forwards">${$('.heroes-carousel .owl-item.active').find('.heroes-carousel__item').data('desc')}</div>`).appendTo('.heroes-info');
    $(`<a href="#order" class="heroes-info__button btn animate animation-slideToUp animation-duration-slow animation-fillmode-forwards" data-index="${index}">Заказать</a>`).appendTo('.heroes-info');


    $('.heroes__video video').attr('src', $('.heroes-carousel .owl-item.active').find('.heroes-carousel__item').data('video'));
}

addAnimation(0);





// owl_heroes.on('changed.owl.carousel', function(e){
// 	isChangedCarousel($(e.target).find('.owl-item').eq(e.item.index));
// });


// let is_animating = false;

// function isChangedCarousel(current_hero){
// 	$('.heroes__navButton').appendTo(current_hero.find('.hero__image'));


// 	if(is_animating == true){
// 		return;
// 	}else{
// 		animatingActivated(current_hero);
// 	}
// }

// function animatingActivated(current_hero){
// 	is_animating = true;

// 	let bg = current_hero.find('.hero').data('color');
// 	$("body").get(0).style.setProperty("--m_color", bg);

// 	$('.heroes__fon').addClass('look');

// 	if($('.heroes__fon').hasClass('look')){
// 		$('.heroes__fon').removeClass('look');
// 		$('.heroes__fon').addClass('hide');

// 		setTimeout(function(){
// 			$('.heroes__fon').removeClass('hide');
// 			$('.heroes__fon').addClass('look');
// 		}, 300);
// 	}


// 	setTimeout(() => {
// 		infoBox_name.text(current_hero.find('.hero').data('name'));
// 		infoBox_desc.text(current_hero.find('.hero').data('desc'))

// 		infoBox_name.addClass('animate animation-slideToRight animation-duration-fast animation-fillmode-forwards') ;
// 		infoBox_desc.addClass('animate animation-slideToRight animation-duration-slow animation-fillmode-forwards');
// 		infoBox_button.addClass('animate animation-slideToUp animation-duration-slow animation-fillmode-forwards');
// 		current_hero.find('.hero__image').addClass('animate animation-slideToCenter animation-duration-slow animation-fillmode-forwards');

// 		current_hero.find('.hero__image').on('animationend', function(){
// 			animatingRemoved(current_hero);
// 		});
// 	}, 300);
// }

// function animatingRemoved(current_hero){
// 	infoBox_name.removeClass('animate animation-slideToRight animation-duration-fast animation-fillmode-forwards') ;
// 	infoBox_desc.removeClass('animate animation-slideToRight animation-duration-slow animation-fillmode-forwards');
// 	infoBox_button.removeClass('animate animation-slideToUp animation-duration-slow animation-fillmode-forwards');
// 	current_hero.find('.hero__image').removeClass('animate animation-slideToCenter animation-duration-slow animation-fillmode-forwards');

// 	is_animating = false;
// }


// isChangedCarousel($('.owl-carousel--heroes .owl-item.active'));

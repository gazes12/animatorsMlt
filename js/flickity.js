

// const hero_name = $('.heroes-info__name');
// const hero_desc = $('.heroes-info__desc');
// const hero__button = $('.heroes-info__button');

// const hero_fon = $('.heroes__fon');


// let slider = $('.heroes-carousel').flickity({
//     cellAlign: 'left',
//     pageDots: false,
//     prevNextButtons: true,
//     contain: true,
//     dragThreshold: 5,
//     wrapAround: true,
//     adaptiveHeight: true,


//     imagesLoaded: true,
//     lazyLoad: true,
// });


// let slider_nav = $('.nav-slider').flickity({
//     cellAlign: 'center',
//     pageDots: false,
//     prevNextButtons: false,
//     contain: true,
//     dragThreshold: 5,
//     wrapAround: false,
//     asNavFor: '.heroes-carousel',
//     draggable: false,
//     adaptiveHeight: true,
//     imagesLoaded: true,
//     lazyLoad: true,
//     // cellSelector: '.carousel-cell',
// });



// slider_nav.on('change.flickity', function (event, index) {
//   addAnimation();
// });

// function addAnimation(){
//     $('.fon-wrapper').find('.heroes__fon').remove();
//     $('.heroes-info').find('.heroes-info__name').remove();
//     $('.heroes-info').find('.heroes-info__desc').remove();
//     $('.heroes-info').find('.heroes-info__button').remove();


//     $("body").get(0).style.setProperty("--m_color", $('.heroes-carousel__slide.is-selected').data('color'));
//     $('<div class="heroes__fon"></div>').appendTo($('.fon-wrapper'));

//     $(`<div class="heroes-info__name title animate animation-slideToRight animation-duration-fast animation-fillmode-forwards">${$('.heroes-carousel__slide.is-selected').data('name')}</div>`).appendTo('.heroes-info');
//     $(`<div class="heroes-info__desc animate animation-slideToRight animation-duration-slow animation-fillmode-forwards">${$('.heroes-carousel__slide.is-selected').data('desc')}</div>`).appendTo('.heroes-info');
//     $('<button class="heroes-info__button btn animate animation-slideToUp animation-duration-slow animation-fillmode-forwards">Заказать</button>').appendTo('.heroes-info');
// }


// addAnimation();
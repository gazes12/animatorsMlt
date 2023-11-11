
$('body').addClass('lock');

$(window).on('load', function(){
		setTimeout(() =>{
		$('.preloader').addClass('hidden');
		$('body').removeClass('lock');
	}, 2000);
});
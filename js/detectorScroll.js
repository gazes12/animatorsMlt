

$(window).scroll(function(){
	var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
	var blockPosPercent = ($('.presentation').height() / $(document).height()) * 100;

	let opacity = ((blockPosPercent + scrollPercent) / 1.9) / 100;

	$('.presentation__fon').css('opacity', opacity);
});
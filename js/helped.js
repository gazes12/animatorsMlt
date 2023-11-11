$('a[href^="#"]').on("click", function(t) {
    t.preventDefault();
    var e, n = $(this.hash);
    n.length && (e = $(window).width() < 768 ? 120 : 220, $("html, body").animate({
        scrollTop: n.offset().top - e
    }, 400))
}), $(window).on("touchmove", function() {
    $('a[href^="#"]').data("clicked", !1)
}), $(document).on("touchend", 'a[href^="#"]', function(t) {
    $(this).data("clicked") && (t.preventDefault(), $(this).data("clicked", !1))
})



function throttle(func, seconds, name){
    let timer = localStorage.getItem(`time-${name}`) ? localStorage.getItem(`time-${name}`) : undefined;
    return function(...args){
        if(timer == undefined){
            timer = $.now();
            localStorage.setItem(`time-${name}`, timer);
            func(...args);
        }
        
        if($.now() - timer > seconds){
            timer = $.now();
            localStorage.setItem(`time-${name}`, timer);
            func(...args);
        }else{
            getAlert_error(`Подождите еще ${(seconds / 1000 - ($.now() - timer) / 1000).toFixed(0)} секунд!`);
        }
    }
}


function getAlert_succ(text){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: text,
        padding: '2em',

        width: '100%',
        color: 'var(--accent-color)',
        background: 'var(--main-color)',

        showConfirmButton: false,
        timer: 3500,

        toast: true,
    })
}

function getAlert_error(text){
  Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: text,
      padding: '2em',

      width: '100%',
      color: 'var(--accent-color)',
      background: 'var(--main-color)',

      showConfirmButton: false,
      timer: 3500,

      toast: true,
  })
}



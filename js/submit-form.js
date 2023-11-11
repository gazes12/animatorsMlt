
let order_items = $('.order-select__item, .heroes-info__button');
let storage_items = localStorage.getItem('storage_items') ? JSON.parse(localStorage.getItem('storage_items')) :[];


initItems('adding', 'all');


$('.heroes-info').on('click', '.heroes-info__button', function(){
clickedTriggers($(this));
});

order_items.click(function(){
    clickedTriggers($(this));
});


function clickedTriggers(e){
    let item = e;
    let item_index = item.data('index');
    


    if ($.inArray(item_index, storage_items) == -1)
    {
        storage_items.push(item_index);
        localStorage.setItem('storage_items', JSON.stringify(storage_items));
        initItems('adding', item_index);
    }else{
        storage_items = $.grep(storage_items, function(a){
            return a !== item_index;
        });

        localStorage.setItem('storage_items', JSON.stringify(storage_items));

        initItems('removing', item_index);
    }   
}


function initItems(action, index){
    let this_item = $(`.order-select__item[data-index='${index}']`);
    if(action == 'removing'){
        this_item.find('input[name="checkbox"]').attr('checked', false);
        this_item.removeClass('active');
    }


    if(action == 'adding'){
        this_item.addClass('active');
        this_item.find('input[name="checkbox"]').attr('checked', true);
    }


    if(index == 'all'){
        $.each(storage_items, function(index, item){
            $(`.order-select__item[data-index='${item}']`).addClass('active');
            $(`.order-select__item[data-index='${item}']`).find('input[name="checkbox"]').attr('checked', true);
        });
    }

    printNames();
}



function printNames(){
    let names = [];
    $('.order-select__item.active').each(function(){
        names.push($(this).data('name'));
    });

    if(names.length == 0){
        $('.hero-name').text('Не выбрано!');
    }

    if(names.length > 1){
            $('.hero-name').text(names.join(', '));
    }else if(names.length == 1){
        $('.hero-name').text(names.join(''));
    }else     if(names.length == 0){
        $('.hero-name').text('');
    }

}



$('.order-form').validate({
    rules: {
        phone: {
            required: true,
            phone: true,
        },

        name: {
            required: true,
        },

        wish:{
            required: true,
        },

        checkbox:{
          required: function(elem)
            {
                return $("input[name='checkbox']").attr('checked') != false;
            }
        }
    },

    messages: {
        phone: {
            required: "Введите номер телефона!"
        },

        name: {
            required: "Введите имя!"
        },

        wish:{
            required: "Введите пожелание!",
        },

        checkbox:{
            required: "Выберите аниматора!",
        }
    },

    errorPlacement: function (error, element) {
        let input_name = element.attr('name');

        if(input_name == 'checkbox'){
            getAlert_error(error.text());
        }else{
            element.attr('placeholder', error.text());
        }
    },

    submitHandler: function(form) {
        throttle(function(){
            $.ajax({
                url: '../php/submit-form.php',
                type: 'post',
                data: {
                    phone: $('.order-line__input--phone').val(),
                    name: $('.order-line__input--name').val(),
                    wish: $('.order-line__input--wish').val(),
                    selected: $('.hero-name').text(),
                },

                success: function(data){
                    getAlert_succ('Заявка успешно отправлена! Ожидайте ответа!');
                }
            });               
        }, 180000, 'submit-application')();
    },
});



$.validator.addMethod("phone", function(value, element) {
    return this.optional(element) || /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value);
}, "Номер введен некорректно!");



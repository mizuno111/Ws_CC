$('.mainmenu, .gnav_menu_item a').on('click',function(){
    $('.menu_line').toggleClass('active');
    $('.gnav').fadeToggle();
});
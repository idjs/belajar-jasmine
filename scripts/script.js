// quick ajax nav
(function($){
    // caching, so not scanning through DOM again and again
    var menu = $('.sidebar.menu');
    $('a', menu).on('click', function(e) {
        var that = $(this);
        menu.find('a.active').removeClass('active');

        $('#content').load(that.attr('href') + ' #content');
        that.addClass('active');
        e.preventDefault();
    });

})(jQuery);
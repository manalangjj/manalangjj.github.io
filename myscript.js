$(window).scroll(function () {
    var winScroll = $(this).scrollTop();
    
    $('.bg01').css({
        'transform': 'translate(0,' + winScroll / 10 + '%)'
    });
    
    $('.bg02').css({
        'transform': 'translate(0,' + winScroll / 20 + '%)'
    });

    $('.bg03').css({
        'transform': 'translate(0,' + winScroll / 30 + '%)'
    });

    $('.bg04').css({
        'transform': 'translate(0,' + winScroll / 50 + '%)'
    });

    $('.bg05').css({
        'transform': 'translate(0,' + -winScroll / 150 + '%)'
    });
});
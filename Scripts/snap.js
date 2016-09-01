function snapToMiddle(dragger, target) {
    var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
    var leftMove = target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 2;
    dragger.animate({
        top: topMove,
        left: leftMove
    }, {
        duration: 600,
        easing: 'easeOutBack'
    });
}
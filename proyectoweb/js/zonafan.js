$(function() {

    $('#logomaking1').hover(function() {

        $('#yt1').css('transform', 'translateX(0%)');
        $('#yt1').css('transition', '500ms');
    }, function() {
        // on mouseout, reset the background colour
        $('#yt1').css('transform', 'translateX(-300%)');
    });
    $('#logomaking2').hover(function() {

        $('#yt2').css('transform', 'translateX(0%)');
        $('#yt2').css('transition', '500ms');
    }, function() {
        // on mouseout, reset the background colour
        $('#yt2').css('transform', 'translateX(-500%)');
    });

    $('#logomaking3').hover(function() {

        $('#yt3').css('transform', 'translateX(0%)');
        $('#yt3').css('transition', '500ms');
    }, function() {
        // on mouseout, reset the background colour
        $('#yt3').css('transform', 'translateX(500%)');
    });

    $('#logomaking4').hover(function() {

        $('#yt4').css('transform', 'translateX(0%)');
        $('#yt4').css('transition', '500ms');
    }, function() {
        // on mouseout, reset the background colour
        $('#yt4').css('transform', 'translateX(300%)');
    });


});
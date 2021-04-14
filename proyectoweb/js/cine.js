$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    console.log("Clicked menu ");
    $("#mainListDiv ").toggleClass("show_list ");
    $("#mainListDiv ").fadeIn();

});
$(function() {
    $(document).scroll(function() {
        var $nav = $(".nav ");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


AOS.init({
    duration: 1200,
});
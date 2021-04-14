//click menú
$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    console.log("Clicked menu ");
    $("#mainListDiv ").toggleClass("show_list ");
    $("#mainListDiv ").fadeIn();

});
//scroll de menú
$(function() {
    $(document).scroll(function() {
        var $nav = $(".nav ");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//animaciones de aparicion de imágenes
AOS.init({
    duration: 1200,
});



let slideIndex = 1;
showSlide(slideIndex);

//Lightbox código

function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};




function showSlide(n) {
    const slides = document.getElementsByClassName('slide-gallery1');
    let modalPreviews = document.getElementsByClassName('modal-content');


    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };

    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].className += ' active';
};

showSlide2(slideIndex2);

function openLightbox2() {
    document.getElementById('Lightbox2').style.display = 'block';
}

function closeLightbox2() {
    document.getElementById('Lightbox2').style.display = 'none';
};

function changeSlide2(n2) {
    showSlide2(slideIndex2 += n2);
};

function toSlide2(n2) {
    showSlide2(slideIndex2 = n2);
};

function showSlide2(n2) {
    const slides2 = document.getElementsByClassName('slide-gallery2');
    let modalPreviews2 = document.getElementsByClassName("#light2");


    if (n2 > slides2.length) {
        slideIndex2 = 1;
    };

    if (n2 < 1) {
        slideIndex2 = slides2.length;
    };

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews2.length; i++) {
        modalPreviews2[i].className = modalPreviews2[i].className.replace(' active', '');
    };

    slides2[slideIndex2 - 1].style.display = 'block';
    modalPreviews2[slideIndex2 - 1].className += ' active';
};
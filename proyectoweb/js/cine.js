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


//Lightbox1

let slideIndex = 1;
showSlide(slideIndex);

//Lightbox código

function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
};

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

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = 'block';
};

//LightbOX2

let slideIndex2 = 1;
showSlide2(slideIndex2);

//Lightbox código

function openLightbox2() {
    document.getElementById('Lightbox2').style.display = 'block';
};

function closeLightbox2() {
    document.getElementById('Lightbox2').style.display = 'none';
};



// Note that you are assigning new values here to our slidIndex.

function changeSlide2(n2) {
    showSlide2(slideIndex2 += n2);
};

function toSlide2(n2) {
    showSlide2(slideIndex2 = n2);
};




function showSlide2(n2) {
    const slides2 = document.getElementsByClassName('slide-gallery2');


    if (n2 > slides2.length) {
        slideIndex2 = 1;
    };

    if (n2 < 1) {
        slideIndex2 = slides2.length;
    };

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    };

    slides2[slideIndex2 - 1].style.display = 'block';
};


//LightbOX3

let slideIndex3 = 1;
showSlide3(slideIndex3);

//Lightbox código

function openLightbox3() {
    document.getElementById('Lightbox3').style.display = 'block';
};

function closeLightbox3() {
    document.getElementById('Lightbox3').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide3(n3) {
    showSlide3(slideIndex3 += n3);
};

function toSlide3(n3) {
    showSlide3(slideIndex3 = n3);
};




function showSlide3(n3) {
    const slides3 = document.getElementsByClassName('slide-gallery3');


    if (n3 > slides3.length) {
        slideIndex3 = 1;
    };

    if (n3 < 1) {
        slideIndex3 = slides3.length;
    };

    for (let i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    };

    slides3[slideIndex3 - 1].style.display = 'block';
};

function overlayOn() {
    document.getElementById("overlayVideo").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlayVideo").style.display = "none";
}

function overlayOn2() {
    document.getElementById("overlayVideo2").style.display = "block";
}

function overlayOff2() {
    document.getElementById("overlayVideo2").style.display = "none";
}

function overlayOn3() {
    document.getElementById("overlayVideo3").style.display = "block";
}

function overlayOff3() {
    document.getElementById("overlayVideo3").style.display = "none";
}
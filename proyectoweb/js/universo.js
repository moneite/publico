function cambiarModo() {
    $('body').css('background', 'rgb(223, 219, 219)');
    $('p').css('color', 'black');
    $('.botomododia').css('display', 'none');
    $('.botomodonoche').css('display', 'inline');
    $('.home').css('box-shadow', 'none');
    $('#noche1').css('background', '#45b2d3');
    $('#peli2').css('background', 'rgb(231, 95, 95)');
    $('#peli3').css('background', 'rgb(231, 177, 95)');
    $('#serie').css('background', 'rgb(95, 231, 124)');
    $('#fichaJuego').css('background-size', '25%');
}

function cambiarModo2() {
    $('body').css('background', 'black');
    $('p').css('color', 'white');
    $('.botomododia').css('display', 'inline');
    $('.botomodonoche').css('display', 'none');
    $('#noche1').css('background-image', 'url(./media/evildead1bg.jpg)');
    $('#peli2').css('background-image', 'url("./media/evildead2bg.jpg")');
    $('#peli3').css('background-image', 'url("./media/evildead3bg.jpg")');
    $('#serie').css('background-image', 'url("./media/evildead4bg.jpg")');
}
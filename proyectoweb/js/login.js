function leerXML() {


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            miFuncion(this);
        }
    };
    xhr.open("GET", "registrados.xml", true);
    xhr.send();

}


function miFuncion(xml) {

    var i;
    var nombre;
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("usuario");
    loginAceptado = false;

    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == document.getElementById("user").value) {
            if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == document.getElementById("pass").value) {
                loginAceptado = true;
                nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                break;
            }
        }
    }

    if (loginAceptado == true) {
        window.alert("Bienvenido " + nombre);
        window.location.href = "index.html";
    } else {
        window.alert("Usuario o contraseña incorrectos");
    }


}
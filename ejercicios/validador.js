function guardaUser(){
    var x=document.forms["miFormulario"] ["usuario"].value;
    sessionStorage.setItem("nomUser", x); // se acuerda de todo, si usamos localStorage, sólo se acordará en el mismo navegador.
    document.getElementById("usuario").innerHTML=sessionStorage.getItem("nomUser");
    alert(sessionStorage.getItem("nomUser"));
    return false;
}
var numSlide = 1;
mostrarSlide(numSlide)
function mudarSlide(ns){
    mostrarSlide(numSlide += ns);
}

function atualSlide(ns){
    mostrarSlide(numSlide = ns);
}

function mostrarSlide(ns){
    var i;
    var slides = document.getElementsByClassName("slide");
    var indicadores = document.getElementsByClassName("indicador")

    if (ns > slides.length){
        numSlide = 1
    }

    if (ns < 1){
        numSlide = slides.length;
    }

    for(var l = 0; l < slides.length; l++){
        slides[l].style.display = "none";
    }

    for(var l = 0; l < indicadores.length; l++){
        indicadores[l].className = indicadores[l].className.replace(" ativo", "");
    }

    slides[numSlide - 1].style.display = "block";
    indicadores[numSlide -1].className += " ativo";
}
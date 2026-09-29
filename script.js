function irPara(id) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.scrollIntoView({
            behavior: "smooth"
        });
    }
}


document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const id = link.getAttribute("href").replace("#", "");

        irPara(id);

    });

});
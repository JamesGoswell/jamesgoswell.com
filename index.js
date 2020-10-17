function stars(n) {
    let star_text = "";
    let c = 0;

    while (n > 0.5) {
        star_text += '<i class="fas fa-star stars"></i>';
        n--;
        c++;
    }
    if (n == 0.5) {
        star_text += '<i class="fas fa-star-half-alt stars"></i>';
        c++;
    }
    while (c<5) {
        star_text += '<i class="far fa-star stars"></i>';
        c++;
    }
    return document.write(star_text);
}
function navtoggle(x) {
    x.classList.toggle("change");
    document.getElementById("nav").classList.toggle("navShow")
}
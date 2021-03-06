function navtoggle(x) {
    // x.classList.toggle("cross");
    // document.getElementById("nav").classList.toggle("show");
    // document.getElementById("burger").classList.toggle("fa-bars");
    // document.getElementById("burger").classList.toggle("fa-times");

    document.getElementById("burger").classList.toggle("fa-bars");
    document.getElementById("burger").classList.toggle("fa-times");

    document.body.classList.toggle("bodypush-l");
    document.getElementById("navpush").classList.toggle("navpush-l");


}

// function exptoggle(x) {
//
//
//     document.getElementById("exp-panel").classList.toggle("show");
//     document.getElementById("chevron").classList.toggle("fa-chevron-down");
//     document.getElementById("chevron").classList.toggle("fa-chevron-up");
// }


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("show");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var nav_links = document.getElementsByClassName("navpush-item")

for (i=0; i < nav_links.length; i++) {
    nav_links[i].addEventListener("click", function () {
        document.getElementById("burger").classList.toggle("fa-bars");
        document.getElementById("burger").classList.toggle("fa-times");

        document.body.classList.toggle("bodypush-l");
        document.getElementById("navpush").classList.toggle("navpush-l");
    });
}
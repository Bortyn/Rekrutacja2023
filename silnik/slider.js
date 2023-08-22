var slide_nr = 1;
pokaz(slide_nr);

function slide_button(n) {
    pokaz(slide_nr += n);
}
function aktualny(n) {
    pokaz(slide_nr = n);
}

function pokaz(n) {
    var i = slide_nr;
    var slid = document.getElementsByClassName("slajdy");

    if (n > slid.length) {
        slide_nr = 1;
    }
    if (n < 1) {
        slide_nr = slid.length;
    }
    for (i = 0; i < slid.length; i++) {
        slid[i].style.display = "none";
    }

    slid[slide_nr - 1].style.display = "block";
}
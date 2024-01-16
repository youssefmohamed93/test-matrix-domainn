// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}

// Scroll To Top Button //

window.onscroll = function() {
    scrollFunction();
};

scrolltotop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrolltotop").style.display = "block";
    } else {
      document.getElementById("scrolltotop").style.display = "none";
    }
};
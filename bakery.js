const menuIcon = document.querySelector(".menuicon");
const navlist = document.querySelector("ul");
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");

})

/* explore button */
document.addEventListener("DOMContentLoaded", function () {
    const cupcakeButton = document.getElementById("cupcake-button");
    const cupcakeSection = document.getElementById("cupcake-space");

    cupcakeButton.addEventListener("click", function (event) {
        event.preventDefault();
        const targetOffset = cupcakeSection.getBoundingClientRect().top + window.scrollY;

        window.scroll({
            top: targetOffset,
            behavior: "smooth"  });
    });


});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) 
        {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;

            window.scroll({
                top: targetOffset,
                behavior: "smooth"  });
        });

    });

});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const menuIcon = document.querySelector(".menuicon");
    const navUl = document.querySelector("nav ul");

    navLinks.forEach(function (link) 
    {
        link.addEventListener("click", function (event) 
        {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;

            window.scroll({
                top: targetOffset,
                behavior: "smooth"   });

            navUl.classList.remove("active");
            menuIcon.classList.remove("active");
        });

    });

});



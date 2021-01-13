let hamburgerMenu = document.querySelector(".menu");
let mobileNav = document.querySelector(".mobile-nav")

hamburgerMenu.addEventListener("click", ()=>{
    sourceImage = hamburgerMenu.getAttribute("src");

    if(sourceImage == "images/icon-close.svg"){
        //remove mobile nav
        mobileNav.classList.remove("show");

        //display hamburger icon and remove close icon
        hamburgerMenu.setAttribute("src", "images/icon-hamburger.svg")
    }
    else if(sourceImage == "images/icon-hamburger.svg"){
        //display mobile nav
        mobileNav.classList.add("show")

        //remove hamburger icon and display close icon
        hamburgerMenu.setAttribute("src", "images/icon-close.svg");
    }
})
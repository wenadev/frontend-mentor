//getting hamburger menu, the view element that houses the landing page elements and the clear button for the mobile nav view
let menu = document.querySelector(".menu");
let view = document.querySelector(".view");
let text = document.querySelector(".text");
let webHeader = document.querySelector(".web-header-container");
let header = document.querySelector("header")

//getting the navigation elements for the web view
let navElements = Array.from(document.querySelectorAll(".nav-elements.web"));

//getting the div element that houses the elements of mobile navigation view and the clear button to remove mobile nav view 
let mobileNav = document.querySelector(".mobile-nav");
let clear = document.querySelector(".clear");

//getting mobile nav elements
let mobileNavElements = Array.from(document.querySelectorAll(".nav-elements.mobile"));

//checks the width of the window as it is resized
let windowResizeEvents = ()=>{
    mobileNav.style.transition= "0s";

    if(window.innerWidth <= 750){
        //web navigation hides
        navElements.forEach((element)=>{
            element.style.display="none";
        });
        
        menu.addEventListener('click', displayMobileNav);
    }
    
    else if(window.innerWidth > 750){
        //web navigation comes into view
        navElements.forEach((element)=>{
            element.style.display="initial";
        });
        removeMobileNav();
    }
}

//mobile navigation comes into view
let displayMobileNav = ()=>{
    mobileNav.style.animation="slide-left .3s ease-out";
    view.style.display="none";
    mobileNav.style.display= "initial";

    mobileNavElements.forEach((mobileNavElement)=>{
        mobileNavElement.addEventListener('click',()=>{
            //get href link of relating 'a' tag embedded in 'p' tag
            let sectionHref = mobileNavElement.dataset.href;

            //close mobile nav
            removeMobileNav();

           window.scrollTo(0, document.getElementById(`${sectionHref}`).offsetTop)
        })
    });
}

//mobile navigation hides 
let removeMobileNav = ()=>{
    mobileNav.style.display= "none";
    view.style.display="inherit";
}

window.addEventListener('resize', windowResizeEvents);

//when page reloads
window.onbeforeunload = windowResizeEvents();

clear.addEventListener('click', removeMobileNav);



let scrollEvent = ()=>{

    let header = document.querySelector("header");

    if(Math.round(this.pageYOffset) > 100 ){
        header.classList.add("fixed")
        text.classList.add("padding")
        webHeader.classList.add("background")
        header.classList.add("header-padding")
        webHeader.classList.add("header-padding")
    }
    else if(Math.round(this.pageYOffset) < 100 ){
        text.classList.remove("padding")
        header.classList.remove("fixed")
        webHeader.classList.remove("background")
        webHeader.classList.remove("header-padding")
    }
}

window.addEventListener("scroll", scrollEvent);

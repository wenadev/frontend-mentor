//using keyboard to control the carousel

jQuery(document).bind('keyup', function(e) {

    if (e.keyCode==39) {
        jQuery('a.carousel-control.right').trigger('click');
    }   
  
    else if(e.keyCode==37){
        jQuery('a.carousel-control.left').trigger('click');
    }
  
  });

  //event fired when slide is changed
let displayQuote = document.querySelector(".display.personal-quote");
let displayName = document.querySelector(".display.name");
let displayBio = document.querySelector(".display.bio");

  $(document).ready(function(){
    $("#myCarousel").on('slid.bs.carousel', function () {
        displayItems()
    });
 });

( displayItems = () =>{
    let activeItem = document.querySelector(".active");

    //get quote, name and of active item on slider
    let carouselCaption = activeItem.children[1].children;

    //display quote from active item
    displayQuote.innerHTML =carouselCaption[0].innerHTML;

    //display name from active item
    displayName.innerHTML = carouselCaption[1].innerHTML;

    //display bio from active item
    displayBio.innerHTML = carouselCaption[2].innerHTML;
 })();

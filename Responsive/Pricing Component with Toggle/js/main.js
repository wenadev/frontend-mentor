let firstCardPrice = document.querySelector(".card.one .price h1");
let secondCardPrice = document.querySelector(".card.two .price h1");
let thirdCardPrice = document.querySelector(".card.three .price h1")
let toggleButton = document.querySelector("input")

//change prices if pricing button is toggled
toggleButton.addEventListener('change', function(){
    if(this.checked){
        firstCardPrice.innerHTML="19.99";
        secondCardPrice.innerHTML="24.99"
        thirdCardPrice.innerHTML="39.99"
    }
    else{
        firstCardPrice.innerHTML="199.99";
        secondCardPrice.innerHTML="249.99";
        thirdCardPrice.innerHTML="399.99"
    }

})

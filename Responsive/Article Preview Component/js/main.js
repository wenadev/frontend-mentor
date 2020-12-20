let shareButton = document.querySelector(".share");
let bioContainer = document.querySelector(".bio");
let bioParentContainer = document.querySelector(".bio-and-share");
let shareExpansion = document.querySelector(".share-expansion");
let shareBubble = document.querySelector(".share-bubble");

let removeMobileShareOptions =()=>{
    //remove profile bio
    if (bioContainer.classList.contains("none")){bioContainer.classList.remove("none");}
       
    //show share bubble
    if (shareExpansion.classList.contains("show")){shareExpansion.classList.remove("show");}
    
   
    //change background colour
    if ( bioParentContainer.classList.contains("colour")){ bioParentContainer.classList.remove("colour");}
   
    //show mobile share colour
    if ( shareButton.classList.contains("share-colour")){ shareButton.classList.remove("share-colour")}
}

let activeShareButton = ()=>{
    if (innerWidth <= 900){
        //check if desktop share options are open, close it
        if(shareBubble.classList.contains("bubble-show")){shareBubble.classList.remove("bubble-show")}

        //on click share button
           bioContainer.classList.add("none");

           //show share bubble
          if (shareExpansion.classList.contains("none")){
                shareExpansion.classList.add("show")
          }else{
            shareExpansion.classList.add("none")
          }
           console.log(shareExpansion.classList)

           //change background colour
           bioParentContainer.classList.add("colour")

           //show mobile share colour
           shareButton.classList.add("share-colour")
        }

   //for bigger screen sizes
   else if(innerWidth > 900){
       if(shareExpansion.classList.contains("show")){removeMobileShareOptions();}   

           //show desktop share icons
            shareBubble.classList.add("bubble-show");
   }
}

let nonActiveShareButton =()=>{
    if(innerWidth <= 900){
        removeMobileShareOptions()
    }

    else if(innerWidth > 900){
        shareBubble.classList.remove("bubble-show");
    }
}


shareButton.addEventListener("click", ()=>{
    //sharing options are displayed
    shareButton.classList.toggle("active");

    if(shareButton.classList.contains("active")){
        activeShareButton()
    }
    else if(!(shareButton.classList.contains("active"))){
        nonActiveShareButton()
    }
})

window.onresize =()=>{
    if(shareButton.classList.contains("active")){
        activeShareButton();
    }
    else{
       nonActiveShareButton()
    }
}


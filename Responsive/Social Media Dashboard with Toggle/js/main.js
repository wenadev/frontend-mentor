let toggleDarkMode = document.querySelector("input")
let rootContainer = document.querySelector(".root-container")
let socialMedia = document.querySelector(".header-title h2")
let followerHeading = document.querySelector(".header-title h5")
let cards = Array.from(document.querySelectorAll(".card"))
let darkModeText = document.querySelector(".toggle p")
let overView = document.querySelector("#overview")
let followerCounts = Array.from(document.querySelectorAll(".follower-count h1"))
let followerCountH6 = Array.from(document.querySelectorAll(".follower-count h6"))
let socialHandleHeading = Array.from(document.querySelectorAll(".social-handle h4"))
let socialHandleSpan = Array.from(document.querySelectorAll(".social-handle span"))
let metrics = Array.from(document.querySelectorAll(".metric h2"))
let attribution = document.querySelector(".attribution")

toggleDarkMode.addEventListener("change", ()=>{
    rootContainer.classList.toggle("dark-root-container");

    //looping through all the cards to change background color
    cards.forEach((card)=>{
        card.classList.toggle("dark-card")
    })

    socialMedia.classList.toggle("dark-color-text");
    darkModeText.classList.toggle("dark-color-text");

     //looping through all the follower count to change background color
     followerCounts.forEach((followerCount)=>{
        followerCount.classList.toggle("dark-color-text")
    })

    overView.classList.toggle("dark-color-text")

     //looping through all the follower count to change background color
     socialHandleHeading.forEach((socialHandle)=>{
        socialHandle.classList.toggle("dark-saturated-text")
    })

    followerHeading.classList.toggle("dark-saturated-text")

    //looping through all the socilmedia handles to change background color
    socialHandleSpan.forEach((span)=>{
        span.classList.toggle("dark-saturated-text")
    })

    //looping through all the word - 'followers' to change background color
    followerCountH6.forEach((count)=>{
        count.classList.toggle("dark-saturated-text")
    })

    //looping through all the metrics to change background color
    metrics.forEach((metric)=>{
        metric.classList.toggle("dark-color-text")
    })

    attribution.classList.toggle("dark-color-text")
})
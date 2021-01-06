let submitButton = document.querySelector("#submit");
let emailField = document.querySelector("#email");
let emailText = document.querySelector("#error");


submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if((emailField.value.match(mailformat)) == null || emailField.value == ""){
            //error text warning
            emailText.classList.add("error-show");
            emailField.classList.add("error-border");
        }

        else{
            emailText.classList.remove("error-show");
            emailField.classList.remove("error-border");
            emailField.value="";
            alert("Congrats! You've been added to the list!")
        }
})
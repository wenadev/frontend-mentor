let submitButton = document.querySelector("#submit");
let emailField = document.querySelector("#email");
let emailText = document.querySelector("#error");
let emailIcon = document.querySelector("#error-icon");


submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if((emailField.value.match(mailformat)) == null || emailField.value == ""){
            console.log(emailField.classList)
            //error text warning
            emailText.classList.add("error-show");
            emailField.classList.add("error-border");
            console.log(emailField.classList)
            //error icon warning
            emailIcon.classList.add("error-show")
        }

        else{
            emailText.classList.remove("error-show");
            emailField.classList.remove("error-border");
            emailField.value="";
            emailIcon.classList.remove("error-show")
            alert("Email succesfully registered")
        }
})
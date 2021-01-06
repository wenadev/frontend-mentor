let submitButtons = document.querySelectorAll(".submit");
let emailFields = document.querySelectorAll(".email");
let errorTexts = document.querySelectorAll(".error");


submitButtons.forEach((button=>{
    button.addEventListener("click", (event)=>{
        event.preventDefault();
            let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
            emailFields.forEach((emailField)=>{
                if(emailField.dataset.name == button.dataset.name){
                    //error text warning
                    errorTexts.forEach((errorText)=>{
                        if(errorText.dataset.name == button.dataset.name){
                            if((emailField.value.match(mailformat)) == null || emailField.value == ""){
                                errorText.classList.add("error-show");
                                emailField.classList.add("error-border");
                            }
                            else{
                                errorText.classList.remove("error-show");
                                emailField.classList.remove("error-border");
                                emailField.value="";
                                alert("Email registered successfully!")
                            }
                        }
                    })
                }
            })
    })
}))

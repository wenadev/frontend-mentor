let input = Array.from(document.querySelectorAll("input"));
let submitButton = document.querySelector("#submit");

function addValidationAlerts(inputvalue, firstSiblingOfSelectedInput){
     //error symbol warning
     inputvalue.nextElementSibling.classList.add("error-show");
     inputvalue.classList.add("error-border");

     //text warning
     firstSiblingOfSelectedInput.nextElementSibling.classList.add("error-show")
}

function removeValidationAlerts(inputvalue, firstSiblingOfSelectedInput){
    if ( inputvalue.nextElementSibling.classList.contains("error-show") && inputvalue.classList.contains("error-border")){
        inputvalue.nextElementSibling.classList.remove("error-show");
        inputvalue.classList.remove("error-border");
        firstSiblingOfSelectedInput.nextElementSibling.classList.remove("error-show")
    }
}

//form validation
submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    
    input.forEach((input)=>{
        let firstSibling = input.nextElementSibling;

        if(input.type == "email"){
            let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if((input.value.match(mailformat)) == null || input.value == ""){
               addValidationAlerts(input, firstSibling)
            }

            else{
                removeValidationAlerts(input, firstSibling)
            }
        }

        if(!(input.type == "email")){
            if ((input.value == "") || (input.value == null)){
                addValidationAlerts(input, firstSibling)
                
            }

            else{
                removeValidationAlerts(input, firstSibling)
            }
        }
    })

    //to check if all fields are filled in
    checkInputs();

})

checkInputs=()=>{
    let check = 0;
    for(let i = 0; i < input.length; i++){
        if((input[i].value != "") && (input[i].value != null)){
            check++;
        }
    }

    if (check == input.length){alert("Form successfully filled"); for(let i = 0; i < input.length; i++){input[i].value = "";} }
}

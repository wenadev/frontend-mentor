let input = Array.from(document.querySelectorAll("input"));
let submitButton = document.querySelector("#submit");

//form validation
submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    
    input.forEach((input)=>{
        let firstSibling = input.nextElementSibling;

        if ((input.value == "") || (input.value == null)){
           //error symbol warning
            input.nextElementSibling.classList.add("error-show");
            input.classList.add("error-border");

            //text warning
           firstSibling.nextElementSibling.classList.add("error-show")
            
        }

        else{
            if ( input.nextElementSibling.classList.contains("error-show") && input.classList.contains("error-border")){
                input.nextElementSibling.classList.remove("error-show");
                input.classList.remove("error-border");
                firstSibling.nextElementSibling.classList.remove("error-show")
                return;
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
            console.log(input[i].value)
        }
    }

    console.log(check)
    if (check == input.length){alert("Form successfully filled")}
}

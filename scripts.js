
document.querySelector("form").addEventListener("submit", validateForm);

function validateForm(e){

    
    const pwd = e.target.querySelector("input#pwd");
    const confirm = e.target.querySelector("input#confirm-pwd");
    const errorMessage = e.target.querySelector(".error-message");
    
    if(pwd.value !== confirm.value){
        e.preventDefault();
        pwd.classList.add("error");
        confirm.classList.add('error');
        errorMessage.style.setProperty("visibility", "visible");
        //confirm.setCustomValidity("Passwords do not match");
        
    }

    else{
        
        pwd.classList.remove('error');
        confirm.classList.remove('error');
        errorMesage.style.setProperty("visibility", "hidden");
    }

    confirm.reportValidity();
}
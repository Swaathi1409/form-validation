/*  
    Form Validation Script
    This script validates the event registration form fields 
    and shows a success message if all validations pass.
*/

function validateForm() {

    let isValid=true;

    document.querySelectorAll(".error").forEach(e=>e.textContent='');
    document.querySelectorAll("input, select").forEach(e=> e.className='');

    // Name validation
    const name = document.getElementById("fullName").value;
    if(name.length<2)
    {
        document.getElementById("nameError").textContent="Name too short";
        document.getElementById("fullName").className="invalid";   
        isValid=false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    if(!email.includes("@") || !email.includes("."))
    {
        document.getElementById("emailError").textContent="Include @,. in email";
        document.getElementById("email").className="invalid";   
        isValid=false;
    }

    // Phone validation
    const phone = document.getElementById("phone").value;
    if(phone.length!=10 || isNaN(phone))
    {
        document.getElementById("phoneError").textContent="Enter valid 10 digit phone number";
        document.getElementById("phone").className="invalid";   
        isValid=false;
    }

    // Age validation
    const age = document.getElementById("age").value;
    if(age<18)
    {
        document.getElementById("ageError").textContent="Age must be greater than 18.";
        document.getElementById("age").className="invalid";   
        isValid=false;
    }

    // Event validation
    const event = document.getElementById("event").value;
    if(event=='')
    {
        document.getElementById("eventError").textContent="Choose an event";
        document.getElementById("event").className="invalid";   
        isValid=false;
    }

    return isValid;

}

// Handle form submission
document.getElementById("registrationForm").onsubmit=function(e){
    e.preventDefault();

    if(validateForm())
    {
        document.getElementById("registrationForm").style.display='none';
        document.getElementById("success-message").style.display='block';
    }
}
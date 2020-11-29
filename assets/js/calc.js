
// logic that validate the data entered at the contact page

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function requiredField() {
    var emailAdrs = document.forms["contactForm"]["emailaddress"].value;
    var messageToGenius = document.forms["contactForm"]["customermessage"].value;

    console.log(validateEmail(emailAdrs));
    if (validateEmail(emailAdrs) == false|| messageToGenius == "") {
        if (validateEmail(emailAdrs) == false & messageToGenius == "") {
           
            alert("Please, enter a valid email address and a message");
            return false;
        }
        else if (validateEmail(emailAdrs) == false) {

            alert("Please, enter a valid email address");
            return false;

        }
        else if (messageToGenius == "") {
            
            alert("Please, enter a message.");
            return false;
        }
    }
    else {

        sendMail(contactForm);
    }

}


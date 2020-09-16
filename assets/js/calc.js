// Challenge from lesson

// grabbing values from input
// logic that validate the value
console.log("the calc page is loading");

function requiredField() {
var emailAdrs = document.forms["contactForm"]["emailaddress"].value;
console.log(emailAdrs);
var messageToGenius = document.forms["contactForm"]["customermessage"].value;
console.log(messageToGenius);


    if (emailAdrs == "" || messageToGenius == "") {
        console.log("first if")
        if (emailAdrs == "" & messageToGenius == "") {
            console.log("second if");

            alert("please, enter an email address and a message");
        }
        else if (emailAdrs == "") {
            console.log("third else if");
            
            alert("please, enter an email address");
        }
        else if (messageToGenius == ""){
            console.log("fourth else if");
            alert("please, enter a message.");
        }
    }
    else {
        alert("thanks for submitting your form");
    }

}


// function whatCanIDrink(age) {
//     if (1 <= age && age < 14) {
//         return "Drink Toddy1";
//     }
//     else if (14 <= age && age < 18) {
//         return "Drink Coke";
//     }
//     else if (18 <= age && age < 21) {
//         return "Drink Beer";
//     }
//     else if (21 <= age && age < 130) {
//         return "Drink Whisky";
//     }
//     else {
//         return "Sorry. I can’t tell what drink because that age is incorrect!";
//     }
// }
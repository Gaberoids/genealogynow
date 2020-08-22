console.log("Hello GJ");

function sendMail(contactForm) {
    console.log("Hello GJ1");

    emailjs.send("gmail", "geneology_contact", {

        "from_name": contactForm.name.value,
        "email_from": contactForm.emailaddress.value,
        "customer_message": contactForm.customermessage.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Thanks for your message. I'll review it and get back to you as soon as possible");
            },
            function (error) {
                console.log("FAILED", error);
                alert(`<p>Sorry but there was an error. Please try again or send an email directly to geneologygenious@gmail.com</p>` );
            });
    return false;  // block reload page
}


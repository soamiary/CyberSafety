document.getElementById("contactForm").addEventListener("submit",function(event){

event.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let subject=document.getElementById("subject").value;
let message=document.getElementById("message").value;

let formMessage=document.getElementById("formMessage");


if(name==="" || email==="" || subject==="" || message===""){

formMessage.innerHTML="Please fill in all fields.";
formMessage.style.color="red";

}

else if(!email.includes("@")){

formMessage.innerHTML="Please enter a valid email address.";
formMessage.style.color="red";

}

else{

formMessage.innerHTML="Your message has been sent successfully.";
formMessage.style.color="green";

document.getElementById("contactForm").reset();

}

});
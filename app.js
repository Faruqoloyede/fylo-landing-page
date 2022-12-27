const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//validate email

email.onkeydown = validate;

function validate(){
    const email = document.querySelector("#email").value;
const form = document.querySelector("#form");
const pattern = /^[^ ]+\.[a-z]{2,3}$/;
const text = document.querySelector("#text");

if(email.match(pattern)){
    form.classList.add("valid");
    form.classList.remove("invalid")
    text.innerHTML = " "
}else {
    form.classList.add("invalid");
    form.classList.remove("valide")
    text.innerHTML = "please enter the correct email address!";
    text.style.color = "#ff0000"
}
if(email === ""){
    form.classList.remove("invalid");
    form.classList.remove("valide")
    text.innerHTML = "";
    text.style.color = "#ff0000"
}
}
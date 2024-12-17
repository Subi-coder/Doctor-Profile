const doctorBtn = document.querySelector("#doctor-Button");
const recipientrBtn = document.querySelector("#recipient-Button");

doctorBtn.addEventListener("click", function () {
    window.location = "./doctorLogin.html"
});


recipientrBtn.addEventListener("click", function () {
    window.location = "./RecipientLogin.html"
});

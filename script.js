const doctorBtn = document.querySelector("#doctor-Button");
const recipientBtn = document.querySelector("#recipient-Button");

doctorBtn.addEventListener("click", function () {
  window.location = "./DoctorLogin.html";
});

recipientBtn.addEventListener("click", function () {
  window.location = "./RecipientLogin.html";
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.textContent = "Sending message...";
  status.style.color = "#555";

  emailjs
    .sendForm(
      "service_wi50k5r",   // e.g. service_xxxxxx
      "template_tg0gjin",  // e.g. template_yyyyyy
      this
    )
    .then(
      function () {
        status.textContent = " Message sent successfully!";
        status.style.color = "green";
        form.reset();
      },
      function (error) {
        status.textContent = " Failed to send message. Try again.";
        status.style.color = "red";
        console.error("EmailJS Error:", error);
      }
    );
});

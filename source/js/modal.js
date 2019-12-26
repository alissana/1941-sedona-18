function documentReady() {
    var error = document.querySelector(".error-popup");
    var success = document.querySelector(".success-popup");
    var close_error = error.querySelector(".popup__button");
    var close_success = success.querySelector(".popup__button");
    var form = document.querySelector(".form");
    var name = form.querySelector("[name=your-name]");
    var surname = form.querySelector("[name=your-surname]");
    var phone = form.querySelector("[name=your-phone]");
    var email = form.querySelector("[name=your-email]");

    form.addEventListener("submit", function(evt) {
      if (!name.value || !surname.value || !phone.value || !email.value) {
        evt.preventDefault();
        error.classList.add("error-popup-show");

        if (close_error.addEventListener("click", function(evt) {
          evt.preventDefault();
          error.classList.remove("error-popup-show");
        }));
      }

      else {
        evt.preventDefault();
        error.classList.remove("error-popup-show");
        success.classList.add("success-popup-show");

        if (close_success.addEventListener("click", function(evt) {
          evt.preventDefault();
          success.classList.remove("success-popup-show");
        }));
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (error.classList.contains("error-popup-show")) {
          evt.preventDefault();
          error.classList.remove("error-popup-show");
        }
        if (success.classList.contains("success-popup-show")) {
          evt.preventDefault();
          success.classList.remove("success-popup-show");
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", documentReady);

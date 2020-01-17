function documentReady() {
    var error = document.querySelector(".js-error-popup");
    var success = document.querySelector(".js-success-popup");
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
        error.classList.add("popup--visible");

        if (close_error.addEventListener("click", function(evt) {
          evt.preventDefault();
          error.classList.remove("popup--visible");
        }));
      }

      else {
        evt.preventDefault();
        error.classList.remove("popup--visible");
        success.classList.add("popup--visible");

        if (close_success.addEventListener("click", function(evt) {
          evt.preventDefault();
          success.classList.remove("popup--visible");
        }));
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (error.classList.contains("popup--visible")) {
          evt.preventDefault();
          error.classList.remove("popup--visible");
        }
        if (success.classList.contains("popup--visible")) {
          evt.preventDefault();
          success.classList.remove("popup--visible");
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", documentReady);

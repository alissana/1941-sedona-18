function documentReady() {
    var link = document.querySelector(".form-block__button");
    var popup = document.querySelector(".error-popup");
    var close = popup.querySelector(".popup__button");
    var form = document.querySelector(".form");
    var name = form.querySelector("[name=your-name]");
    var surname = form.querySelector("[name=your-surname]");
    var phone = form.querySelector("[name=your-phone]");
    var email = form.querySelector("[name=your-email]");

    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("error-popup-show");
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("error-popup-show");
    });

    form.addEventListener("submit", function(evt) {
      if (!name.value || !surname.value || !phone.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("error-popup-show");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("error-popup-show");
      } else {
          popup.classList.remove("error-popup-show");
          popup.classList.add("success-popup-show");
        }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains("error-popup-show")) {
          evt.preventDefault();
          popup.classList.remove("error-popup-show");
          popup.classList.remove("success-popup-show");
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", documentReady);

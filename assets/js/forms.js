$(document).ready(function () {
   $("#loginForm #passwordVisibility").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("bi-eye-fill");
      $(this).toggleClass("bi-eye-slash-fill");

      const inputType = $("#loginForm #password").get(0).type;
      if (inputType === "password") {
         $("#loginForm #password").get(0).type = "text";
      } else {
         $("#loginForm #password").get(0).type = 'password';
      }
   })
})
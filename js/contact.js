$(document).ready(function() {
  (function($) {
    "use strict";

    var firebaseConfig = {
      apiKey: "AIzaSyCTFsVPvKtpB9EzDhhXiTyCV79Eg-Li9iE",
      authDomain: "publsoft.firebaseapp.com",
      databaseURL: "https://publsoft.firebaseio.com",
      projectId: "publsoft",
      storageBucket: "publsoft.appspot.com",
      messagingSenderId: "260253169255",
      appId: "1:260253169255:web:904fb55adce170732e46c2",
      measurementId: "G-Y1XV462BKQ"
    };

    window.firebase.initializeApp(firebaseConfig);

    var db = window.firebase.firestore();

    // validate contactForm form
    $(function() {
      $("#contactForm").submit(function(event) {
        event.preventDefault();

        var fullName = $("#fullname").val();
        var email = $("#email").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();

        if (
          fullName === "" ||
          email === "" ||
          phone_number === "" ||
          message === ""
        ) {
          alert("Lütfen tüm alanları doldurunuz!");
          return;
        }

        db.collection("contact")
          .add({
            fullname: fullName,
            email: email,
            phone_number: phone_number,
            message: message,
            created_date: new Date()
          })
          .then(function(docRef) {
            alert(
              "Kaydınız başarıyla alındı. E-Posta adresinize dönüş yapılacaktır."
            );
            $("#fullname").val("");
            $("#email").val("");
            $("#phone_number").val("");
            $("#message").val("");
          })
          .catch(function(error) {
            alert("Bilinmeyen bir hata oluştu: ", error);
          });
      });
    });
  })(jQuery);
});

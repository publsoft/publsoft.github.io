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
        db.collection("contact")
          .add({
            fullname: $("#fullname").val(),
            email: $("#email").val(),
            phone_number: $("#phone_number").val(),
            message: $("#message").val()
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

        event.preventDefault();
      });

      /*
      $("#contactForm").validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          subject: {
            required: true,
            minlength: 4
          },
          number: {
            required: true,
            minlength: 5
          },
          email: {
            required: true,
            email: true
          },
          message: {
            required: true,
            minlength: 20
          }
        },
        messages: {
          name: {
            required: "come on, you have a name, don't you?",
            minlength: "your name must consist of at least 2 characters"
          },
          subject: {
            required: "come on, you have a subject, don't you?",
            minlength: "your subject must consist of at least 4 characters"
          },
          number: {
            required: "come on, you have a number, don't you?",
            minlength: "your Number must consist of at least 5 characters"
          },
          email: {
            required: "no email, no message"
          },
          message: {
            required:
              "um...yea, you have to write something to send this form.",
            minlength: "thats all? really?"
          }
        },
        submitHandler: function(form) {
          alert(form);
          /*$(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "contact_process.php",
            success: function() {
              $("#contactForm :input").attr("disabled", "disabled");
              $("#contactForm").fadeTo("slow", 1, function() {
                $(this)
                  .find(":input")
                  .attr("disabled", "disabled");
                $(this)
                  .find("label")
                  .css("cursor", "default");
                $("#success").fadeIn();
                $(".modal").modal("hide");
                $("#success").modal("show");
              });
            },
            error: function() {
              $("#contactForm").fadeTo("slow", 1, function() {
                $("#error").fadeIn();
                $(".modal").modal("hide");
                $("#error").modal("show");
              });
            }
          });
        }
      });*/
    });
  })(jQuery);
});

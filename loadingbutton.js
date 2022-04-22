$('#contactme').submit(function (e) {
    e.preventDefault();
    var data = {
        name: $('#Enter_fullname').val(),
        email: $('#Email_email').val(),
    }
    if (data.name != "" && data.email) {
      send();
    }    
    else {
        swal("Not yet", "All fields are required", "warning");
    }
});

function send() {
   $("#submit").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
   $("#submit").attr("disabled", "disabled");
   window.setTimeout(function () {
    swal("Your message has been sent", "", "success");
      $("#submit").removeAttr("disabled");
       $("#submit").html("sent");
   }, 3000);
};


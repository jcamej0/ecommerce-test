import $ from 'jquery';

const USER_CREDENTIALS = {
    username: "admin",
    pass: "admin"
  };

$(function() {
    $('.error').toggle();
    $("label#error_login").hide();
    $("#login-form").submit(function(e){
        e.preventDefault();
     });
    $(".button").click(function() {
  	  const username = $("input#username").val();
  		if (username === "") {
        $("label#username_error").show();
        $("input#username").focus();
        return false;
      }
  		const password = $("input#password").val();
  		if (password === "") {
        $("label#password_error").show();
        $("input#password").focus();
        return false;
      }

      if (
        username === USER_CREDENTIALS.username &&
        password === USER_CREDENTIALS.pass
      ) {
        document.location.href = '/dashboard'
      } else {
        $('.error').hide();
        $("label#error_login").show();
      }
    });
  });
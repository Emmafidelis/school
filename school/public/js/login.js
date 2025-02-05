$(document).ready(function() {
  $('#login-form').on('submit', function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    frappe.call({
      method: 'school.api.login',
      args: {
        usr: username,
        pwd: password
      },
      callback: function(response) {
        if (response.message === 'Login Successful') {
          window.location.href = '/home';
        } else {
          alert('Login Failed. Please check your username and password.');
        }
      }
    });
  });
});

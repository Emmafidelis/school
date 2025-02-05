frappe.ready(function() {
  frappe.call({
    method: 'school.api.check_login_status',
    callback: function(response) {
      const authButton = document.getElementById('auth-button');
      if (response.message.is_logged_in) {
        authButton.innerHTML = '<a class="nav-link" href="/api/method/logout">Logout</a>';
      } else {
        authButton.innerHTML = '<a class="nav-link" href="/login">Login</a>';
      }
    }
  });
});
``
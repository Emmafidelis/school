frappe.ready(() => {
  frappe.call({
    method: 'school.api.get_recent_enrollments',
    callback: (response) => {
      const enrollments = response.message;
      const container = document.getElementById('recent-enrollments');
      enrollments.forEach((enrollment) => {
        const div = document.createElement('div');
        div.textContent = `${enrollment.student} enrolled in ${enrollment.course}`;
        container.appendChild(div);
      });
    }
  });
});

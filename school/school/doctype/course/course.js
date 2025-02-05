frappe.ui.form.on('Course', {
  refresh(frm) {
    frm.add_custom_button('Enroll Student', () => {
      frappe.prompt([
        { label: 'Student', fieldname: 'students', fieldtype: 'Link', options: 'Student' }
      ], (values) => {
        frappe.call({
          method: 'school.api.enroll_student',
          args: {
            student: values.student,
            course: frm.doc.name
          },
          callback: () => frappe.show_alert('Enrolled!')
        });
      });
    });
  }
});

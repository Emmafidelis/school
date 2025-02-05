frappe.ui.form.on('Student', {
  refresh(frm) {
    // Add a custom button to enroll in a course
    frm.add_custom_button('Enroll in Course', () => {
      frappe.prompt({
        label: 'Course',
        fieldname: 'course',
        fieldtype: 'Link',
        options: 'Course',
        reqd: 1
      }, (values) => {
        frappe.call({
          method: 'school.api.enroll_student',
          args: {
            student: frm.doc.name,
            course: values.course
          },
          callback: () => {
            frappe.show_alert('Enrollment Successful!');
            frm.reload_doc();
          }
        });
      });
    });
  }
});
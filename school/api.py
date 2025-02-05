# university_management/api.py
import frappe

def enroll_student(student, course):
    enrollment = frappe.get_doc({
        "doctype": "Enrollment",
        "student": student,
        "course": course,
        "enrollment_date": frappe.utils.nowdate()
    })
    enrollment.insert(ignore_permissions=True)
    return enrollment.name

def get_recent_enrollments():
    return frappe.get_all('Enrollment', fields=['student', 'course'], limit=5)

# university_management/api.py
import frappe
from frappe.auth import LoginManager

@frappe.whitelist(allow_guest=True)
def login(usr, pwd):
    login_manager = LoginManager()
    login_manager.authenticate(usr, pwd)
    login_manager.post_login()
    return 'Login Successful'

import frappe
@frappe.whitelist()
def check_login_status():
    user = frappe.session.user
    if user == 'Guest':
        return {'is_logged_in': False}
    else:
        return {'is_logged_in': True}
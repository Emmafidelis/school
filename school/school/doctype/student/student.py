# Copyright (c) 2025, Emmanuel Kagombora and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Student(Document):
	def before_submit(self):
		return f'{self.first_name} {self.middle_name} {self.last_name}'

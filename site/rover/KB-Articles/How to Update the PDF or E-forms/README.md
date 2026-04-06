# How to Update the PDF or E-forms

<PageHeader />

## Problem Statement

A user needs to update the QC signature on the **PO.F3** purchase order form (for example, replacing an existing signature with a new one). The user wants to ensure that while the form is being edited, other users can continue to create and print purchase orders without interruption.

---

## Resolution Steps

### 1.

PDF forms are forms that merge the data on the record (e.g., purchase order) with a  PDF template. PO.F3 is an example of a PDF form.

### 2.

The paths where the PDF templates are located are entered in FORM.CONTROL (ace module).

### 3.

 If the users have access to edit the PDF documents, they can update the templates themselves.

### 4.

If the customer is self-hosted, they can find a copy of the template in the path entered in FORM.CONTROL.

### 5.

If the customer is hosted on the  Zumasys cloud, they’ll need to contact us to send them a copy of the template.  Once they update it, they’ll need to email it back to us so we copy the template to the server. 

---

## Verification

- [ ] Confirm that users are able to create and print purchase orders without interruption during the editing process
- [ ] After deployment, verify that the new QC signature appears on all newly printed purchase orders

---

> **Note:**  
> Please note that when updating the form, changes to the rows, columns, cell sizes, etc. should not be made. If they are made, changes to the underlying program may be required. 

---

## Additional Information

- If you are unfamiliar with form editing or deployment, consult your system administrator or RoverERP support for assistance
- Always retain a backup of the original form before making changes

---

<PageFooter />

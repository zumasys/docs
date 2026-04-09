# Resolving "Open failed: Execute (2): -2146827284" Error When Uploading Files in RoverERP

<PageHeader />

<badge text='Administration' vertical='middle' />

## Problem Statement

Users receive the error "Open failed: Execute (2): -2146827284" when attempting to upload files to a client in RoverERP. This typically occurs when trying to upload a file directly from a cloud storage location.

---

## Symptoms

- Error message appears during file upload:

> Open failed: Execute (2): -2146827284

- The issue is commonly encountered when selecting files stored in cloud locations (for example, OneDrive, Google Drive, Dropbox)
- Upload fails on the "Files" page

---

## Cause

- RoverERP may not have the necessary permissions or compatibility to access files directly from cloud storage locations
- Uploading from a cloud location can result in access errors or failed uploads

---

## Resolution Steps

### 1. Copy the File to a Local Folder

- Locate the file in your cloud storage (for example, OneDrive, Google Drive)
- Download or copy the file to a local folder on your computer, such as "Downloads" or "Documents"

### 2. Upload from the Local Folder

- In RoverERP, navigate to the "Files" page where you need to upload the document
- Select the file from the local folder (not from the cloud location)
- Proceed with the upload

---

## Verification

- [ ] Confirm that the file uploads successfully without the error message
- [ ] Ensure the file appears as expected in the client's "Files" section

---

## Note

- Always upload files from a local directory to avoid access and compatibility issues
- If you continue to experience upload errors, contact RoverERP support for further assistance

---

## Additional Information

- For best results, keep frequently used files in a local folder when working with RoverERP
- Monitor for future updates that may improve cloud storage compatibility

<PageFooter />

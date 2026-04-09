# Resolving "The RPC Server is Unavailable" Error Related to Printing in RoverERP

<PageHeader />

<badge text='Administration' vertical='middle' />

## Problem Statement

Users receive the error message "Unhandled exception has occurred in your application… The RPC server is unavailable" when logging into RoverERP. The error details reference printing and printer settings.

---

## Symptoms

- Error message appears upon logging into RoverERP:
  > "The RPC server is unavailable."
- Exception details reference printing functions, such as `PrinterSettings.get_InstalledPrinters()`
- The issue prevents normal application startup or use

---

## Cause

- The error occurs because the Windows Print Spooler service is not running on the affected computer
- RoverERP attempts to access the list of installed printers during startup, which requires the Print Spooler service

---

## Resolution Steps

### 1. Open Windows Services

- Press **Windows + R**, type `services.msc`, and press **Enter**

### 2. Locate the Print Spooler Service

- In the Services window, scroll down and find **Print Spooler** in the list

### 3. Check the Status

- Ensure the status of the Print Spooler service is **Running**

### 4. Start the Service if Needed

- If the Print Spooler is not running, right-click on it and select **Start**

### 5. Restart RoverERP

- After confirming the Print Spooler is running, restart the RoverERP application and attempt to log in again

---

## Verification

- [ ] The error message should no longer appear upon logging in
- [ ] RoverERP should start normally and display available printers as expected

---

> **Note:**
> The Print Spooler service is required for printer-related functions in RoverERP.
> If the service fails to start or stops repeatedly, consult your IT administrator for further troubleshooting.

---

## Additional Information

- For persistent issues or if you require further assistance, contact RoverERP support
- Always ensure Windows services required by RoverERP are running for optimal performance

<PageFooter />

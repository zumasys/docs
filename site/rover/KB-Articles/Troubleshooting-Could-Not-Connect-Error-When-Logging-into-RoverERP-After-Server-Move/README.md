# Troubleshooting "Could Not Connect" Error When Logging into RoverERP After Server Move

<PageHeader />

## Problem Statement

A user is unable to log in to RoverERP on a specific PC after a server migration. The error message **"Could Not Connect"** appears, despite confirming that credentials, IP address, port, and server information are correct. The same user can log in successfully from other PCs.

---

## Symptoms

- **"Could Not Connect"** error when attempting to log in to RoverERP on one PC
- The issue occurs only on a specific workstation; other PCs can connect using the same user credentials
- Network connectivity to the server (ping, DNS, etc.) is confirmed
- The latest RoverERP client is installed, and the PC has been rebooted multiple times

---

## Cause

- The issue is isolated to one PC, indicating a local configuration or network problem
- Possible causes include firewall or security software blocking the connection, incorrect local configuration, or lingering cached settings from before the server move

---

## Resolution Steps

### 1. Verify Local Firewall and Security Software

- Check whether Windows Firewall or any third-party security software is blocking the RoverERP client or required port
- Add exceptions for the RoverERP application and relevant port

### 2. Clear Cached Application Data

- Remove or reset any cached configuration files or user profiles related to RoverERP on the affected PC
- Check for old server references in configuration files and update them to the new server address

### 3. Confirm Network Configuration

- Ensure the PC is on the correct network and subnet
- Double-check that DNS and gateway settings are correct and match those of working PCs

### 4. Test Connectivity with Telnet or Port Checker

- Use a tool such as Telnet or a port checker to verify that the required port is open and accessible from the affected PC to the new server

### 5. Reinstall RoverERP as Administrator

- Uninstall RoverERP completely
- Reinstall the application using administrative privileges to ensure all components are properly registered

### 6. Review Error Logs

- Check RoverERP logs (if available) for more detailed error messages that may indicate the source of the connection problem

### 7. Contact Support if Issue Persists

- If the problem continues after these steps, provide detailed information and error messages to RoverERP support for further troubleshooting

---

## Verification

- [ ] The user can log in to RoverERP from the affected PC without receiving the **"Could Not Connect"** error
- [ ] Network and application settings match PCs that are able to connect successfully

---

> **Note:**  
> Server moves may require updating shortcuts, configuration files, or registry entries on client PCs. Always ensure that security software is not blocking new server connections after infrastructure changes.

---

## Additional Information

- For persistent or complex issues, provide support with screenshots, error logs, and a summary of troubleshooting steps already taken
- Document any changes made to the PC configuration for future reference

---

<PageFooter />

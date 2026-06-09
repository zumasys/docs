# Troubleshooting "Could Not Connect" Error When Logging into RoverERP After Server Move

<PageHeader />

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

<PageFooter />

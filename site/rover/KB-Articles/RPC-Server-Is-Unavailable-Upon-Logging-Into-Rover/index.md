# Resolving "The RPC Server is Unavailable" Error Related to Printing in RoverERP

<PageHeader />

<badge text='Administration' vertical='middle' />

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

<PageFooter />

# Database Password Update

## Step 1: Encrypt Login Credentials

Next follow these steps to enter and encrypt the database login credentials.

1. Navigate to the `scripts` directory
2. `PCT.editProps`
3. Select `TCSPOS.database.Password`
4. Enter your password
5. Press `RETURN` to Continue...
6. Press `RETURN` again to Exit


# Troubleshooting: Updating DASU and DASP Environment Variable Credentials

<PageHeader />  

This article describes how to resolve issues caused by outdated hardcoded credentials in the Colleague DASU and DASP environment variables, including updating the relevant code and restarting the necessary services.

## Overview

During the Colleague login process, the environment variables `DASU` and `DASP` are set by logic stored in `XTCS.EXT.SRC.CODE` and `XTCS.POS.SET.DAS.VARS`. Old, hardcoded usernames and passwords in these files can prevent users from authenticating successfully.

To correct this, the credentials must be updated in the source code, followed by restarting the listeners.

---

## Procedure

### 1. Locate and Update Credentials

1. Open the file:

   * `XTCS.EXT.SRC.CODE`
   * `XTCS.POS.SET.DAS.VARS`

2. Identify any **hardcoded username and password** values.

3. Replace them with the correct, current credentials.

   ```plaintext
   DASU=<updated_username>
   DASP=<updated_password>
   ```

4. Save and recompile if required by your environment.

---

### 2. Restart Listeners

> ⚠️ **Note:** Restarting via the provided script may not always clear the issue. Use the Windows Services panel instead.

1. Open the **Windows Services** management console.
2. Locate the services related to **POS Connect listeners**.
3. Right-click each affected listener and select **Restart**.



<PageFooter />  

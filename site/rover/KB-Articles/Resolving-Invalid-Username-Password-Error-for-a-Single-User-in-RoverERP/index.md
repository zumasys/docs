# Resolving "Invalid Username/Password" Error for a Single User in RoverERP

<PageHeader />

<badge text='Troubleshooting' vertical='middle' />

---

## Resolution Steps

1. **Check the User Account on the Windows Host Server**

   - Open **Computer Management** on the host server
   - Expand the folder **Local Users and Groups**
   - Click on **Users**
   - Locate the user experiencing the issue
   - Right-click the user and select **Properties**
   - Ensure that the account is not locked out or disabled

2. **Unlock or Enable the Account if Needed**

   - If the account is locked out, uncheck the **Account is locked out** box
   - If the account is disabled, uncheck the **Account is disabled** box
   - Click **Apply** and **OK** to save changes

3. **Attempt Login Again**

   Have the user try logging in to RoverERP once the account status has been corrected.

![Password Error ](./Password-Error.jpg)

---

<PageFooter />

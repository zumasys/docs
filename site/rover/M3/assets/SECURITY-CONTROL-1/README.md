## Security Control (SECURITY.CONTROL)
<PageHeader />

##

![](./SECURITY-CONTROL-1.jpg)

| **ID**|  Automatically loaded with the text SECURITY as the record id.

-  
**Minimum Characters**|  Specify the minimum number of characters that must be
present in a user password. If left blank no minimum will be required.

**Minimum Alpha**|  Specify the minimum number of alphabetic characters that
must be present in a user password. If left blank no minimum will be required.

**Minimum Numeric**|  Specify the minimum number of numeric characters that
must be present in a user password. If left blank no minimum will be required.

**Minimum Special**|  Specify the minimum number of special characters that
must be present in a user password. If left blank no minimum will be required.
Special characters include `~!@#$%
&*()-_+=[]{}|\<>?/.

**Past History**|  Specify the number of prior passwords to be maintained for
comparison to new passwords that are entered. When a user changes their
password they will not be allowed to reuse any password that is still in the
history list. If this field is blank or zero the user will only be required to
enter a password that is different from the current password.

**Maximum Days**|  Enter the maximum number of days that a password may remain
active before requiring the user to change it. If left blank the password
never expires.

**Track Command Usage**|  Check this box if you want the number of times a
command (procedure) is executed in a given day for a user. This information
will be available in the CMDUSAGE file.

**Track Login/Logout**|  Check this box if you want the system to record the
dates and times that users log in and out of the system.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />

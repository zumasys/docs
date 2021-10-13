## CLIENT.CONTROL (CLIENT.CONTROL)
<PageHeader />

## Settings

![](./CLIENT-CONTROL-2.jpg)

| **Computer Name**|  Displays the name of each client computer that has
logged into the system and indicates which applications, used by the system,
have been installed. Removing a line for a computer will cause the system to
reset it next time the client is invoked from the client computer.

-  
**Applications**|  Select each of the applications that is installed on the
associated client computer. These will be loaded automatically the first time
the client is used on the computer. If any of these applications have been
installed or removed after the initial setting was performed you may adjust it
here manually. This list determines if the application is available as an
output destination in reporting procedures.

**Printers and Faxes**|  Displays a list of all the printers and faxes
currently defined on the associated client computer. This information is
maintained automatically and may not be changed.

**Fax Server Name**|  If the associated printer is a networked fax server then
the name of the server hosting the fax device is shown in this field. If the
associated printer is a fax modem installed directly in the client computer
the text (Local) will appear in this field.

**Max Pkt Size**|  Packet sizes are automatically adjusted by the system based
on activity during the log in session. If the connection from a particular
computer is consisitently slower than most connections (i.e. connected via a
slow internet connection) you may want to set the packet values to a smaller
size than the default setting to avoid delays that the system would normally
encounter while determining that the packet size should be reduced. The
default maximum packet size is 200,000.

**Min Pkt Size**|  The minimum packet size indicates the smallest packet size
the system should use when sending information. The default setting for this
value is 50,000.

**Max Fails**|  The system will attempt to resend a packet of information some
number of times before lowering the packet size. Set this value to control the
number of attempts. The default setting is 1.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />

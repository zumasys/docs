## Credit Card Control (CC.CONTROL)
<PageHeader />

##

![](./CC-CONTROL-1.jpg)

| **ID**|  Automatically loaded with the text "CC" by the system.

-  
**Service Provider**|  Select the credit card service provider that will be
used to process credit card transactions.

**Merchant Id**|  If you are using an online credit card service then enter
the merchant id assigned to you by the credit card service company. For
Merchant e-Solutions this is known as the Profile ID. For PayJunction this is
known as the User Name.

**Password**|  Some credit card service providers, such as TrustCommerce, use
a password in conjuction with the merchant id to process credit card
transactions. If required, enter the password in this field. For Merchant
e_Solutions this is referred to as the Profile Key.

**URL**|  Some credit card service providers use a web service to process
credit card transactions. This includes Merchant e-Solutions, PayJunction and
TrustCommerce. Enter the URL for the web service.

**Digital Key Path**|  Some service providers, such as CyberSource, use
digital keys in conjunction with the merchant id to for processing credit card
transactions. These keys are typically stored on a network server in a folder
that is readable by users that are processing credit card transactions. If the
provider uses digital keys enter the full path to the folder containing the
keys.

The path must be entered from the perspective of the client computers.
Example: The digital keys reside in the KEYS folder in the CYBERSOURCE folder
on the �E� drive of a network server. On the client computers, you would need
to map a drive (e.g. the letter �U�) to the �E� drive of the network server.
The path you would enter in this field would be U:\CyberSource\Keys. The same
letter (i.e. �U�) should be used on all client computers. Another option would
be to enter the following path \\\NetworkServer\CyberSource\keys in this
field. �NetworkServer� would be the name of the server. (Please note that this
second option might not be available on all systems.)

**API Version**|  Credit card service providers use software APIs (applicationprogramming interfaces) to allow third party programs, such as Millennium III,


to communicate with their servers and process credit card transactions. Some
providers, such as CyberSource, require the third party software to identify
which version of their software is being used for the communication. If this
is required the version number (for example, 3.1) must be specified in this
field. This is used by CyberSource.

**Process Online**|  Check this box if automatic credit card processing is to
be perfomed by the system. If this box is not checked it is assumed that
credit card information entries in the sales order process are for reference
only and that credit card transaction will be performed outside of the system.

**Test Mode**|  Some credit card service providers allow you to process
transactions in a testing mode. In this mode the transactions are processed by
the service provider but are not actually charged. This box should be checked
when you are performing training or pilot testing on the system. It should
also be checked in any database you have setup for ongoing testing and
training. Note: When using Merchant e_Solutions this setting is ignored. To
perform testing you would set the URL field to the test web service address.

**Use Card Key**|  Some credit card processors provide the ability to store
credit card numbers for you so that you do not need maintain them on your
server, making PCI compliance easier to manage. Instead of storing the credit
card number a card id is assigned to the credit card which you can use to
process the transaction. Check this box if you want this feature enabled.
Merchant e-Solutions currently supports this feature.

**Card Type**|  Specify each card type that is to be accepted.

**Card Name**|  Displays the name of the associated card type.

**User ID**|  Enter the user id of each user that is allowed to view encrypted
credit card numbers. If Use Card Key is enabled then credit card numbers are
not viewable under any circumstances.

**User Name**|  Displays the name of the associated user.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />

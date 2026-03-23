# ACH Payments

<PageHeader />
STEP 1 - SETUP 

1. VENDOR.E 

![ACH Payments ](./ACH-Payments.jpg)

PAY USING ACH Field Help 

![ACH Payments 2 ](./ACH-Payments-2.jpg)

2. AP.CONTROL 

![ACH Payments 3 ](./ACH-Payments-3.jpg)

Note: Changes may be required to the format of the file that is transmitted to your bank. 

STEP 2 - Create Check Run for ACH Payments 

1. Enter the check run via AP.P1 

![ACH Payments 4 ](./ACH-Payments-4.jpg)

2. Create ACH payment File  

![ACH Payments 5 ](./ACH-Payments-5.jpg)

Procedure help for CHECK.P7 

![ACH Payments 6 ](./ACH-Payments-6.jpg)

3. Post the check run via CHECKS.P1 

4. Transmit ACH file via CHECKS.P8 

![ACH Payments 7 ](./ACH-Payments-7.jpg)

Procedure help for CHECKS.P8 

![ACH Payments 8 ](./ACH-Payments-8.jpg)

If the transmission method is set to “automated”, M3 services must be running on the server and the first 3 fields in the “automated transmission settings” section of AP.CONTROL must be populated. 

 The commands referenced in this document are part of the accounts payable module. 

 
<PageFooter />

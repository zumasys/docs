# ACH Payments

<PageHeader />

<badge text='accounts payable' vertical='middle' />

## Step 1 - Setup

1. Open **VENDOR.E**.

![ACH Payments](./ACH-Payments.jpg)

Review **PAY USING ACH** field help.

![ACH Payments 2](./ACH-Payments-2.jpg)

2. Open **AP.CONTROL**.

![ACH Payments 3](./ACH-Payments-3.jpg)

> Note: Your bank may require changes to the ACH file format before transmission.

## Step 2 - Create Check Run for ACH Payments

1. Enter the check run in **AP.P1**.

![ACH Payments 4](./ACH-Payments-4.jpg)

2. Create the ACH payment file.

![ACH Payments 5](./ACH-Payments-5.jpg)

Review procedure help for **CHECK.P7**.

![ACH Payments 6](./ACH-Payments-6.jpg)

3. Post the check run in **CHECKS.P1**.

4. Transmit the ACH file in **CHECKS.P8**.

![ACH Payments 7](./ACH-Payments-7.jpg)

Review procedure help for **CHECKS.P8**.

![ACH Payments 8](./ACH-Payments-8.jpg)

If the transmission method is set to "automated", M3 services must be running on the server, and the first three fields in the "automated transmission settings" section of **AP.CONTROL** must be populated.

The commands referenced in this document are part of the Accounts Payable module.

<PageFooter />

# Rover Pay Overview

<PageHeader />

Rover Pay is your one stop shop for merchant services including credit card and ACH payment processing. Rover Pay allows you to modernize your credit card and ACH workflows on both the web and in-person while affording you extremely competitive processing fees. To request access to Rover Pay please contact [sales@zumasys.com](mailto:sales@zumasys.com)

## Key Features

- **Point of Sale Payments** – process credit cards directly in Rover POS with no separate terminals.
- **Accounts Receivable Integration** – customers can pay open invoices online; successful payments can automatically release orders from credit hold.
- **E‑commerce Payments** – Rover Pay powers online checkout in Marketplace and the customer portal.
- **Refunds and Adjustments** – issue full or partial refunds tied to the original transaction.
- **Transparent Pricing** – competitive rates with simplified reconciliation.

## Using Rover Pay

Rover Pay is embedded in Rover POS, Accounts Receivable and the online Marketplace. Select the credit card option when tendering a sale or send customers a secure payment link for invoices. Refunds can be initiated from the original transaction record and all activity appears in Rover Pay settlement reports.

Endpoint URL: [https://test-gateway.total-computing.com/api](https://test-gateway.total-computing.com/api)

## ACH APIs

| Endpoint        | Description                                          |
| --------------- | ---------------------------------------------------- |
| BLACHTOKENIZE   | Tokenize _routing_ and _ABA_ (account number) pairs  |
| BLACHSALE       | ACH Capture (given a `token` or _routing_ and _ABA_) |
| BLACHREFUND     | ACH Refund (given a `token` and original `reqid`)    |
| ~~BLACHCREDIT~~ | _NOTE: Forced ACH Credits are not supported_         |

## Credit Card APIs

| Endpoint                                   | Description                                         |
| ------------------------------------------ | --------------------------------------------------- |
| [BLAUTH](./BLAUTH/index.md)               | Credit Card Authorization                           |
| [BLSALE](./BLSALE/index.md)               | Credit Card Authorization & Capture                 |
| [BLCREDIT](./BLCREDIT/index.md)           | Credit an amount to a Credit Card                   |
| [BLTOKENIZE](./BLTOKENIZE/index.md)       | Tokenize a Credit Card                              |
| [BLTOKENAUTH](./BLTOKENAUTH/index.md)     | Authorize a Tokenized Credit Card                   |
| [BLTOKENSALE](./BLTOKENSALE/index.md)     | Capture a Credit Card using its `token`             |
| [BLTOKENCREDIT](./BLTOKENCREDIT/index.md) | Returns Credit to a Credit Card using its `token`   |
| [BLTOKENFINAL](./BLTOKENFINAL/index.md)   | Finalizes a transaction using an authorized `token` |
| [BLTOKENREFUND](./BLTOKENREFUND/index.md) | Refund on the Authorized Amount                     |
| [BLSIGNATURE](./BLSIGNATURE/index.md)     | Prompt Bolt Device for signature                    |
| [BLINQUIRE](./BLINQUIRE/index.md)         | Inquire about an prior transaction using Invoice    |
| [BLIFRAME](./BLIFRAME/index.md)           | Returns an html file for data capture               |

<PageFooter />

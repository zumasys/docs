# Rover Pay Overview

<PageHeader />

Rover Pay, formerly TotaLink, is your one stop shop for merchant services including credit card and ACH payment processing. Rover Pay allows you to modernize your credit card and ACH workflows on both the web and in-person while affording you extremely competitive processing fees. To request access to Rover Pay please contact [sales@zumasys.com](mailto:sales@zumasys.com)

Endpoint URL: [https://test-gateway.total-computing.com/api](https://test-gateway.total-computing.com/api)

## ACH APIs

| Endpoint                                   | Description                                               |
| ------------------------------------------ | --------------------------------------------------------- |
| BLACHTOKENIZE                              | Tokenize _routing_ and _ABA_ (account number) pairs       |
| BLACHSALE                                  | ACH Capture (given a `token` or _routing_ and _ABA_)      |
| BLACHREFUND                                | ACH Refund (given a `token` and original `reqid`)         |
| ~~BLACHCREDIT~~                            | _NOTE: Forced ACH Credits are not supported_              |

## Credit Card APIs

| Endpoint                                   | Description                                         |
| ------------------------------------------ | --------------------------------------------------- |
| [BLAUTH](./BLAUTH/README.md)               | Credit Card Authorization                           |
| [BLSALE](./BLSALE/README.md)               | Credit Card Authorization & Capture                 |
| [BLCREDIT](./BLCREDIT/README.md)           | Credit an amount to a Credit Card                   |
| [BLTOKENIZE](./BLTOKENIZE/README.md)       | Tokenize a Credit Card                              |
| [BLTOKENAUTH](./BLTOKENAUTH/README.md)     | Authorize a Tokenized Credit Card                   |
| [BLTOKENSALE](./BLTOKENSALE/README.md)     | Capture a Credit Card using its `token`             |
| [BLTOKENCREDIT](./BLTOKENCREDIT/README.md) | Returns Credit to a Credit Card using its `token`   |
| [BLTOKENFINAL](./BLTOKENFINAL/README.md)   | Finalizes a transaction using an authorized `token` |
| [BLTOKENREFUND](./BLTOKENREFUND/README.md) | Refund on the Authorized Amount                     |
| [BLSIGNATURE](./BLSIGNATURE/README.md)     | Prompt Bolt Device for signature                    |
| [BLINQUIRE](./BLINQUIRE/README.md)         | Inquire about an prior transaction using Invoice    |
| [BLIFRAME](./BLIFRAME/README.md)           | Returns an html file for data capture               |

<PageFooter />

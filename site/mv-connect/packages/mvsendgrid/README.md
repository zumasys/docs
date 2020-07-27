# MVSENDGRID

MVSENDGRID is a utility to send email's via SendGrids cloud email platform.  

## Requirements

You must sign up for a SendGrid account. You can use a free SendGrid account and send up to 100 emails a day.

[SendGrid signup page](https://signup.sendgrid.com/)

Once you have signed up run MVSENDGRID.CONFIG and fill in your user name and password.  This version of MVSENDGRID uses the v2 SendGrid api that requires your user name and password.  There is a v3 available that uses tokens but that interface requires attachments to be base64 encoded and included as JSON payloads.  The v2 interface uses normal web form posting to send attachments which works better with no special encoding work.

## Setup

1. [Sign up with sendgrid](https://signup.sendgrid.com/)
2. Run MVSENDGRID.CONFIG.  Put in your authentication information
3. run MVSENDGRID.TEST and send a test email

## Release Notes

[Release Notes](./release-notes/README.md)

## Functions

| Name                           | Description                              |
| ---------------------------------------- | -------------------------------- |
| [MVSENDGRID.CONFIG](./mvsendgrid-config/README.md) | Configuration tool     |
| [MVSENDGRID.TEST](./mvsendgrid-test/README.md)     | Testing Tool           |
| [MVSENDGRID.API](./mvsendgrid-api/README.md)       |                        |






<PageFooter />

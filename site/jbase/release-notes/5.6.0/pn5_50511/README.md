# PN5_50511

<PageHeader />

## Description

Add code to insert details of the jRCS client connection into the utmp login record. This record is used by jBASE to obtain details of this same client connection for use with multi-session licensing.

## Previous Release Behavior

"utmp" login record was not updated.

## Current Release Behavior

"utmp" login record updated with time entry is made with ttyname, username, host name and internet address for the remote login.

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />

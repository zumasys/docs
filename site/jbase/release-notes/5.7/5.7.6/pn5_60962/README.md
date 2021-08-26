# PN5_60962

<PageHeader />

## Description

Fix Unix multisession/websession licensing to recognize IPv6 addresses and not to confuse them with odd ut\_host entries from 'screen'.

### Previous Release Behavior

Multisession & Websession licenses require client IP address. On Linux, the utmp ut\_host field is used to locate the client IP address. However, processes managed by the Linux "screen" command save the owning pty name here with a leading ":". Now that IPv6 is common, some IPv6 addresses begin with a ":", causing them to be identified as "screen" sessions, but the owning pty is not found and they end up defaulting to "localhost".

### Current Release Behavior

Properly parse the address found in ut\_host, and determine if it is a valid IPv4 or IPv6 address. Only if it is not a valid address is the test for a "screen" session applied.

Back to [5.7.6 Release Notes](../jbase-5.7.6-release-notes/README.md)

<PageFooter />

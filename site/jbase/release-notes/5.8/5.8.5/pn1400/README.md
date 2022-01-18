# PN1400

<PageHeader />

## Description  

This is for the Windows Telnet Server.  

Add an option for a default domain. If set (Registry setting) when a user enters a user name with no domain (myusername vs domain\myusername), the system will prepend the default domain when performing authentication.

This allows NON NTLM authentication to work since it requires the domain.

- Registry setting to establish a default domain.  
- If a User name is entered without a domain (i.e. rocketsoftware\myusername) then the default domain is added before passing to the login API.

## Previous Release Behavior

LogonUser() uses LOGON32_PROVIDER_DEFAULT for user authentication. This defaults to NTLM if user name as entered in telnet user name prompt does not contain a domain (myusername vs zumasysinc\myusername).  

NTLM authentication is no longer considered secure.

This change reflects users' desire to enter only their user name without a domain name, but disable NTLM for security reasons.  

## Current Release Behavior

Telnet server now supports two new configuration settings:  

```text
LogonProvider: DWORD 32 bit value - 0 = default, 2 = WINNT40 (NTLM), 3 = WINNT50 
DefaultDomain: String value - domain to use if user does not specify a domain in the user name prompt (no backslash in name).
```

The following table shows the various combination of user name (local or domain), server name, domain name, with default and WINNT50 login provider, and optional default domain name:

 name | no default domain | no default domain | default domain set | default domain set |
|------------------|---------------|---------------|---------------|---------------|
| **LogonProvider** | **0** | **3** | **0** | **3** |
| localuser         | √     | ×     | ×     | ×     |
| domainuser        | √     | ×     | √     | √     |
| .\localuser       | √     | √     | √     | √     |
| .\domainuser      | ×     | ×     | ×     | ×     |
| server\localuser  | √     | √     | √     | √     |
| server\domainuser | ×     | ×     | ×     | ×     |
| domain\localuser  | ×     | ×     | ×     | ×     |
| domain\domainuser | √     | √     | √     | √     |
| localuser@server  | ×     | ×     | ×     | ×     |
| domainuser@server | ×     | ×     | ×     | ×     |
| localuser@domain  | ×     | ×     | ×     | ×     |
| domainuser@domain | √     | √     | √     | √     |

## Notes

Like other jBASE telnetd configuration settings, these settings are values in the registry key:

HKLM\Software\WOW6432Node\JAC\jBASE Telnetd Server\CurrentVersion

See [Windows Telnet Customization](./../../../../telnet/windows-telnet-customization/README.md)

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />

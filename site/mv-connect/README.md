# MV Connect

<PageHeader />

MVConnect is a web application development environment for MultiValue Pick systems.  MVConnect is a core web/rest development environment.  Package and Applications can then be built using MVConnect such as Dashboard.  MVConnect contains

![mv-connect-manual: 1574365223932-mv-connect-%2b-zs-software-services-(1)](./1574365223932-mv-connect-and-software-services.png)

## MV Connect Release Notes

For a summary of new features in MVConnect, see [Release Notes](./release-notes/README.md).

## Getting to Know MV Connect

MVConnect is a cross-platform Web/Rest API development package.  MVConnect has two components.

1. A small webserver to handle inbound web calls
1. A set of Pick subroutines to build out your web/rest application
2. MVDBToolkit that contains Cross Platform development tools including a Curl wrapper for outbound RestFUL Services
3. A package manager to assist in installing additional Packages.
4. A cross platform Object/JSON tool (WOBJ).
5. SendGrid API Package.

For all platforms, we have a cross-platform web server called MVAppsvr that allows access to Pick by running the Pick executable.  The primary difference is with MVAppsvr an MVDB account is installed to hold the Pick side subroutines.  Since MV Dashboard uses the same MVAppsvr web API kit we combined the two installers.  Therefore if you are installing on other platforms the MVConnect installer is the same as the MV Dashboard installer.  When you are done you will have a free one user copy of MV Dashboard along with the Rest subroutines.  You only use this version if you are not on jBASE 5.6+.  This version can be installed side by side with the jAgent version but keep in mind it has it's own licensing.  On jBASE 5.6 all the Pick side subroutines required for REST are built-in and available in any account.  With the MVAppsvr version, you will have to follow the instructions on how to set up q-pointers to files and code for other accounts.

- [Installing MVAppsvr cross-platform Web Server on Windows](./../mv-dashboard/installation-guide/install/windows/README.md)
- [Installing MVAppsvr cross-platform Web Server on UNIX](./../mv-dashboard/installation-guide/install/linux-and-aix/README.md)
- [Running jAgent on jBASE with MVConnect](../jbase/connectivity/jagent/jagent-restful-services-quick-start/README.md)
- [Running WEBSCV on QM with MVConnect]
- [Get Started with MVConnect](./get-started/README.md)
- [Troubleshooting MVConnect](./troubleshooting/README.md)
- [Connection Pooling with MVConnect](./connection-pooling/README.md)

## Getting Help with MV Connect

If you're looking for help, you can reach out the following ways:

- MVConnect Support:
  - [mvconnect@zumasys.com](mailto:mvconnect@zumasys.com)
  - [949-346-4228](tel:9493464228)

## MV Connect Licensing

To obtain a developer's version of MV Connect, please email [mvconnect@zumasys.com](mailto:mvconnect@zumasys.com).

## Table of Contents

- [Get Started](./get-started/README.md)  
- [Release Notes](./release-notes/README.md)
  - [1.6.3](./release-notes/1.6.3/README.md)
  - [1.7.0](./release-notes/1.7.0/README.md)
  - [1.7.4](./release-notes/1.7.4/README.md)
- [Connection Pooling](./connection-pooling/README.md)  
- [API](./api/README.md)
- [MVDBToolkit](./mvdbtoolkit/README.md)
- [MVConnect Addon Packages](./packages/README.md)  
- [Security](./security/README.md)  
- [Troubleshooting](./troubleshooting/README.md)
  - [Web Server](./troubleshooting/web-server/README.md)  
  - [WDEBUG](./troubleshooting/wdebug/README.md)

<PageFooter />

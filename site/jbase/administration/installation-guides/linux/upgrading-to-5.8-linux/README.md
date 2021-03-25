# Upgrading to jBASE 5.8 on Linux from an earlier release

<PageHeader />

Documenting an upgrade to jBASE 5.8 from a previous jBASE 5 version could cover many possibilities.

Our initial document will cover a scenario where a recent version of jBASE 5 (i.e. 5.7.0 or later) is installed, and we are installing jBASE as a Linux user with sudo privileges:

![The jBASE 5.8 installer ](./UpgradingtoLinux58_1.jpg)  

![Checking everything](./UpgradingtoLinux58_2.jpg)  

![Getting started](./UpgradingtoLinux58_3.jpg)  

![Company Location](./UpgradingtoLinux58_4.jpg)  

Use the space bar to page through the License Agreement and then accept:

![License Agreement](./UpgradingtoLinux58_5.jpg)  

We will opt for the Advanced install so that we have control over how jBASE 5.8 is installed:

![Installation Type](./UpgradingtoLinux58_6.jpg)  

The epel package is installed, if not present, so that the openssl11-libs can be added.

![Checking for dependencies #1](./UpgradingtoLinux58_7.jpg)

![Checking for dependencies #2](./UpgradingtoLinux58_8.jpg)

Release directory can be set or accepted, as can all other options:

![Release directory](./UpgradingtoLinux58_9.jpg)  

![Symbolic Link](./UpgradingtoLinux58_10.jpg)

![Directory for Global jBASE files](./UpgradingtoLinux58_11.jpg)

![Directory for jBASE Data](./UpgradingtoLinux58_12.jpg)

![jBASE User ID](./UpgradingtoLinux58_13.jpg)  

![jBASE Group ID](./UpgradingtoLinux58_14.jpg)

Use the option number to remove what is not required:

![Optional Tasks](./UpgradingtoLinux58_15.jpg)

Set the port number to be used by jRCS, if opted for:

![TCP Port for jRCS](./UpgradingtoLinux58_16.jpg)

Set/Accept the jDLS options:

![jDLS options](./UpgradingtoLinux58_17.jpg)  

![Installation Summary](./UpgradingtoLinux58_18.jpg)  

![Installing jBASE](./UpgradingtoLinux58_19.jpg)  

![Installaion Complete](./UpgradingtoLinux58_20.jpg)  

![Sample Login](./UpgradingtoLinux58_21.jpg)  

## Note on systemd

>As of the jBASE 5.8 release, systemd will be used to run services, rather than init.d.  
>See  /etc/systemd/system:
```
-rw-rw-r--.  1 root root  366 Oct  6 16:58 jAgent.service
-rw-rw-r--   1 root root  152 Mar 23 12:36 jBASE.target
drwxr-xr-x   2 root root   26 Nov 20 16:28 jBASE.target.requires
drwxr-xr-x   2 root root   48 Nov 20 16:28 jBASE.target.wants
-rw-rw-r--.  1 root root  380 Jan  5 14:22 jDLS.service
-rw-rw-r--.  1 root root  281 Oct  6 16:59 jRCS.service
-rw-rw-r--.  1 root root  266 Oct  6 16:58 jRFS.service
-rw-rw-r--.  1 root root  366 Oct  6 16:58 jSPOOL.service
```

## Note on the config folder

>Most of the \$JBCRELEASEDIR/config folder content has now moved to \$JBCGLOBALDIR/config, if your \$JBCGLOBALDIR is now in a different location than your \$JBCRELEASEDIR.

Back to [Linux](./../README.md)  

<PageFooter />

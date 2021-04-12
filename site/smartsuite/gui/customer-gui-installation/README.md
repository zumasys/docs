# Customer GUI Installation

<PageHeader />

Below are the steps that one of our customers can follow to install and setup the TCS application on a desktop computer. Ideally these steps are performed via a remote session by members of the TCS support team but sometimes that isn't feasible.

The technical level of these steps are slightly above normal and should be completed by members of IT staff or individuals comfortable navigating directories, installing applications and copying files.

## Pre-requisites

There are a handful of items that are required for a new installation of the software. In migration scenarios (switching from an old PC to a new one) the items will already be available on the old PC. It will be necessary to contact TCS support to obtain files for a brand new setup.

1. OpenVPN configuration files
2. TCS application with pre-configured connection settings
3. Local administrator rights to install and configure software

### Obtain and Install Required Software

1. Download the appropriate OpenVPN installer from [here](https://openvpn.net/community-downloads/)
    - Run the installer
    - Click the red X on `OpenVPN Service` and select `Entire Feature will be installed on local hard drive`
    - Click on the `Launch on User Logon` option and select `Entire feature will be unavailable`
2. Download the TCS application installer from [here](https://training.total-computing.com//wp-content/files/IntegriView%20GUI%203.0.0.1.exe)
    - Run the installer and click next throughout the process. Use the default option on all steps.

### Obtain the Configuration Files (Migration Steps)

If migrating from an old PC to a new PC, the configuration files can be copied to a network share, usb thumb drive, etc. and placed on the new PC.

1. Copy the _C:\\TCS Host_ (sometimes just _C:\\TCS_) folder
2. Copy the _Host Connection_ shortcut from the desktop
3. Copy the  _C:\\Program Files\\OpenVPN\\config_ folder
4. Temporarily turn off the old PC
    - This is **required** until the new PC is verified working
    - Follow the steps in the [_Cleanup_](#cleanup-migration-only) section once the new PC is confirmed working.

### Obtain the Configuration Files (New Device)

Email support@total-computing.com requesting the VPN and GUI configuration files

- Please include the name of the end user
- Please include whether this is a brand new computer or if the user is migrating devices

### Place the Configuration Files

The steps below cover the scenario where configuration files are sent via email. Essentially the same steps can be followed when copying from an old PC. Just use your thumb drive, network share, etc. as the source vs the emailed zip files.

There will be two zip files included in the email, _Host Connection_.zip and _cust-user-vpn_.zip

1. Download both zip files to the destination machine and _copy_ their contents to the correct directories.
2. TCS application
    1. Open the _Host Connection.zip_
    2. COPY (or drag and move) the TCS Host folder inside the zip file to C:\\
        - If you use the "Extract all..." option then you will need to move the TCS Host folder inside the destination directory to C:\\
        - The path to the tcs.exe executable file should be C:\\TCS Host\\tcs.exe
    3. Copy the _Host Connection_ shortcut inside the zip file to the desktop
        - If this is a shared machine then copy the shortcut to c:\\users\\public\\desktop so that all users have access to the shortcut.
3. OpenVPN configuration files
    1. Open the _cust-user-vpn.zip_ file
    2. Copy the three items inside to C:\\Program Files\\OpenVPN\\Config

### Start and Test

The OpenVPN connection can be ran on demand via the OpenVPN GUI but typically it is set to automatically run as a service.

1. Set the OpenVPN Service(s) to start automatically
    1. Start > type _services.msc_ and run Services with admin rights
    2. Set the following services to start automatically. Do so by opening their properties and change the _Startup type_ to _Automatic_
        1. OpenVPN Interactive Service (should already be set to Automatic)
        2. OpenVPNService
    3. Start the OpenVPNService
2. Launch and test the TCS application
    1. Double click the _Host Connection_ shortcut
        1. If any errors appear than this typically means the folder paths are incorrect
    2. Click the Padlock icon and select the _Log on_ button
3. The application should connect and display the regular login screen. If it does not than please contact TCS support.

### Cleanup (Migration Only)

It is necessary to remove at least the old VPN files from the old PC. Each VPN configuration is assigned a static IP address. If both the old and new computers connect to the VPN at the same time it will cause a conflict and neither connection will reliably work.

1. (**Required**) Navigate to c:\\program files\\openvpn and delete the \\config folder
2. (Highly recommended) uninstall the OpenVPN software via standard Windows mechanisms
3. (Recommended) uninstall the TCS application via standard Windows mechanisms
    - Delete the C:\\TCS Host folder and verify that c:\\program files (x86)\\tcs is removed as well.

<PageFooter />

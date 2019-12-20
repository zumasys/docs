# Windows Compiler Installation

**Created At:** 6/21/2018 7:32:49 AM  
**Updated At:** 4/4/2019 5:00:16 PM  
**Original Doc:** [323804-windows-compiler-installation](https://docs.jbase.com/36690-installation-guides/323804-windows-compiler-installation)  

**Tags:**
<badge text='windows' vertical='middle' />
<badge text='installation' vertical='middle' />
<badge text='compiler' vertical='middle' />



**For jBASE Releases 5.5.x, 5.6.x (except 5.6.6) and 5.7.0**

Follow this [link](jbase-release-55-56-570-except-566) to install a compiler.

Note: If you are installing jBASE on Windows 8 (not 8.1) or Windows Server 2012 (not R2), please follow this [link](jbase-compiler-installation-for-windows-server-2012-not-r2-and-windows-8-not-81) to install a compatible version of Visual Studio BEFORE installing jBASE.

**For jBASE Releases 5.6.6, 5.7.1 and later**

The jBASE installer will install and configure a suitable C compiler for compiling JBC programs as a prerequisite to installing jBASE. The compiler installation is initiated by clicking the "Install or Configure C Compiler" button on the Prerequisites page of the jBASE installation.

The steps are:

1. Run the jBASE installer to start the prerequisite installer as below:

![](./1529567469018-pre-requisites-1.png)



2. If no suitable compiler is found on the local machine, the following dialog will be shown:

![](./1529567512150-2.png)



3. Clicking on the **Open Visual Studio Download Page** button will open the Visual Studio download page.  An internet connection is required for the steps that come after this.



When the Visual Studio site opens, locate **Build Tools for Visual Studio 2017** and click the download link.![](./1529567567138-prerequisite-option.png)

From jBASE 5.7.2.1 onward, a link to the**Build Tools for Visual Studio 201****9**will be shown:

![](./1554395100531-vs2019buildtools.jpg)



4. Make selections as in the screenshot below, and click install:

![](./1529567629668-prerequisite-download.png)

The selections available in Build Tools 2019 are much the same:

![](./1554395214475-vs2019buildtooloptions.jpg)



5. Depending on the installed components of the target machine and connection speeds, the compiler download and installation may take a while to complete. A reboot may also be required.

6. After the compiler install completes you will need to rerun the jBASE installer.

7. If the compiler installation succeeded, the jBASE installer will detect it and ask to configure the compiler. When the **Next**button is clicked, configuration will begin.

8. The user will be prompted to update environment variables:

![](./1529567691049-5.png)



7. Click the **Update Environment Variables**button and click **Next**after the confirmation prompt:

![](./1529568053152-6.png)



At this point, the compiler is installed, environment variables appropriately configured and [installation of jBASE](323805-windows-jbase-installation) can proceed.

### Note:

Due to the recent deprecation of Windows SDK for Windows 7 compiler, jBASE has begun utilizing the C compiler for Visual Studio 2017.  One of the issues that users have encountered is "Warning, PATH environment variable too long, truncated".

End Users are experiencing this due to additional "redundant" entries being added to the PATH, INCLUDE and LIB Environment Variables.

[Here](343799-notes-on-environment-variables-for-the-jbase-compiler) is an approach to resolving this warning, removing the "redundant" entries from your PATH, together with the INCLUDE entries, that will help cut down on the size.









### See Next:

[INSTALLING jBASE ON WINDOWS](323805-windows-jbase-installation)

[UPGRADING FROM A PREVIOUS VERSION](upgrading-from-a-previous-version)

[MANUAL INSTALLATION OF JDLS SERVICE](manual-installation-of-jdls-service)

[CREATING ACCOUNTS AND USERS](create-accounts-and-users)

[MANUAL LICENSE KEY INSTALLATION](manual-license-key-installation)







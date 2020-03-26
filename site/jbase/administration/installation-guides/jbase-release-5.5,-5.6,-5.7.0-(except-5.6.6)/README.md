# jBASE Release 5.5, 5.6, 5.7.0 (except 5.6.6)

**Created At:** 9/21/2018 6:38:52 PM  
**Updated At:** 9/24/2018 4:11:19 PM  
**Original Doc:** [jbase-release-55-56-570-except-566](https://docs.jbase.com/36690-installation-guides/jbase-release-55-56-570-except-566)  
**Original ID:** 340401  
**Internal:** No  

The compiler installer for jBASE release 5.5, 5.6 and 5.7.0 which is invoked by the jBASE installer is not functional at this time, and should not be used to install the compiler for these releases. Instead, an updated compiler installer [jbase\_compiler\_update\_64bit.exe](https://s3.amazonaws.com/helpjuice-static/helpjuice_production%2Fuploads%2Fupload%2Fimage%2F3397%2Fdirect%2F1534457477362-jbase_compiler_update_64bit.exe) should be used.

*Note: if you are installing jBASE on Windows 8 (not 8.1) or Windows Server 2012 (not R2), please follow this [link](./../windows-server-2012-&-windows-8-compiler-installation) to install a compatible version of Visual Studio BEFORE installing jBASE. Then follow the steps below.*
The steps are:

1. Download the jBASE Compiler Update from link shown above.
2. Install jBASE using the installer for your jBASE release.
3. On the "Setup Completed" page UN-CHECK the "Install and configure the compiler" check box. This will bypass the broken compiler installation.
4. After jBASE has been installed, run the jBASE Compiler Update downloaded in step 1.
5. Follow the [compiler installation instructions](./../windows-compiler-installation), beginning at step 2.

Back to [Installation Guides](./../README.md).

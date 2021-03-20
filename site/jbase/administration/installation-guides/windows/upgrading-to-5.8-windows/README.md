# Upgrading to jBASE 5.8 on Windows from an earlier release

<PageHeader />

Documenting an upgrade to jBASE 5.8 from a previous jBASE 5 version could cover many possibilities.

Our initial document will cover a scenario where a recent version of jBASE 5 (i.e. 5.5.x or later) is installed, which employs Visual Studio 2017 or 2019 Build Tools as the compiler.

Upgrading to jBASE 5.8 for Windows requires that you have a jbase_5.8.x.xxx_64bit.exe installer and a user account with administrator privileges.

![Welcome to the jBASE 5 Setup Wizard](./58Upgrade_1.jpg)

Two possibilities here:

## Scenario 1  

There is a working compiler installed, we will skip installing a compiler and retain all of our current setup, including PATH, INCUDE and LIB settings:

![Install jBASE Prerequisites #1](./58Upgrade_2.jpg)

Note that this same option can be taken when upgrading from jBASE 5.7.7 onwards, where the environment variables necessary for the jBASE compiler are already stored in your system.properties file.

## Scenario 2

We wish to take advantage of the automatic compiler settings which will be stored in the system.properties file and do not require the use of PATH, INCUDE and LIB to use the compiler.

![Install jBASE Prerequisites #2](./58Upgrade_3.jpg)

We let the jBASE installer check the compiler information:

![jBASE Compiler Information](./58Upgrade_4.jpg)

![Searching for compiler](./58Upgrade_5.jpg)

![Existing compiler found](./58Upgrade_6.jpg)

![Update jBASE compiler configuration](./58Upgrade_7.jpg)  

![Completing the jBASE 5 compiler configuration setup wizard](./58Upgrade_8.jpg)

## Continue with the Install

![Company location](./58Upgrade_9.jpg)

![License Agreement](./58Upgrade_10.jpg)

![Information](./58Upgrade_11.jpg)

![Install Runtime and jBASE Components](./58Upgrade_12.jpg)

![Finished Runtime and jBASE Components Install](./58Upgrade_13.jpg)

We will opt for the Advanced install so that we have control over how jBASE 5.8 is installed:

![Installation Type](./58Upgrade_14.jpg)

Opt to install jBASE 5.8 in a new folder:

![Select Destination Location](./58Upgrade_15.jpg)

Select the location for JBCGLOBALDIR, which can be different from JBCRELEASEDIR:

![Select Directory for jBASE Global files](./58Upgrade_16.jpg)

Select the location where the jBASE spooler may reside, unless you wish to specify a location where all jBASE accounts will reside:

![Select Directory for jBASE Data](./58Upgrade_17.jpg)

Select additional options for the install:

![Select Additional Tasks](./58Upgrade_18.jpg)

![Ready to Install](./58Upgrade_19.jpg)

![Installing](./58Upgrade_20.jpg)

Your results may be different, but these  are things to be aware of post-installation:

![Information](./58Upgrade_21.jpg)

![Complete the jBASE 5 Setup](./58Upgrade_22.jpg)

It should now be possible to log into a jBASE account using an absolute path, but JEDIFILENAME_SYSTEM may need to be defined in the %JBCGLOBALDIR%\\jbase_config.json to enable LOGTO or the use of an account name to function correctly.

If option #2 was selected, all of the environment variables necessary for the jBASE compiler are stored in the %JBCRELEASEDIR%\\system.properties file:

![system.proprties](./58Upgrade_23.jpg)

Back to [Windows](./../README.md)

<PageFooter />

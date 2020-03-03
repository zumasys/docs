# jBASE Profiles

**Created At:** 4/5/2018 12:59:23 PM  
**Updated At:** 4/10/2018 3:52:48 PM  
**Original Doc:** [jbase-profiles57](https://docs.jbase.com/44253-profiles/jbase-profiles57)  
**Original ID:** 306473  
**Internal:** No  

## Document Scope

jBASE 5.7 will support jBASE Profiles for a central repository of your jBASE configuration.  jBASE Profiles ensure that the application and database settings are easily portable to additional application and database servers, without additional manual administration and configuration.

## Description

jBASE profiles are intended to be a replacement for the traditional huge amount of environment variables needed to get jBASE to run, overall a simplified and portable way to define how jBASE is configured.

You can still run your system as it currently runs if this is not for you as internally not much has changed, because of the limitation of OS and jBASE we still need environment variables, for example you will always have to define where you keep your data and programs, the aim of profiles is to try and simplify this.

Beginning with the 5.7 release of jBASE you can easily open a jsh without configuring a single environment variable if that’s the way you want to go,

jBASE profiles are kept in a text file containing a JSON string, each file is split into sections, each section describes an aspect of jBASE.

Profiles can be system wide, unique to a single user or kept in a repository per user making upgrading jBASE and maintaining them more flexible.

The following sections will describe all the different components and behaviors of jBASE profiles.

**Key benefits of using jBASE Profiles:**

- ***Centralized configurations:*** Ensure that environment variables and jBASE configurations are centralized for easier administration.
- ***Reliable roaming experience******:*** Seamlessly migrate production configurations to additional jBASE servers for highly available architectures or simplified disaster recovery.

### Overview

As jBASE starts up it will check the environment and search for any JSON config files, this is processed in the following order.

- No JSON, no environment, gets a warning message and a limited default environment.
- No JSON, but has environment configured, nothing has changed, use environment
- Has JSON, but has environment configured, JSON overrides
- Has JSON, no environment configured, JSON overrides

### JSON locations

You can store your JSON files in one of the following locations or even a combination of user and REPO.

- Per user user.json, lives in $HOME/jbase\_user.json
- Default system.json, lives in $JBCRELEASEDIR/config/system.json
- Repository local, environment variable, $JBASE\_JSON\_REPO, user gregc would then load, $JBASE\_JSON\_REPO/ jbase\_user\_ gregc.json

### Profile Sequence

When a new jBASE sessions is starting up, the following is the sequence of where it will look for a JSON config.

- System
- User
- $JBASE\_JSON\_REPRO.

Having nothing configured will give you a default environment.

## Note

> jBASE .json config files will support macro expansion, this simply means you can use any existing environment variables in your configuration.
>
> e.g. you could set the system file property to, "system": "%HOME%\\SYSTEM",

[Profile Behavior Settings](./../profile-behavior)

[JSON Sections](./../json-sections)

[General Settings](./../general-settings)

[Environment Settings](./../environment-settings)

[Logging Settings](./../logging-settings)

[Debugger Override Settings](debugger_override-settings)

[Additional Utilities Settings](./../additional-utilities)

Back to [Profiles.](./../README.md)

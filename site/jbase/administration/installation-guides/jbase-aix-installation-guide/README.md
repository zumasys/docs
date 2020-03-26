# jBASE AIX INSTALLATION GUIDE

**Created At:** 1/16/2018 7:37:48 PM  
**Updated At:** 11/29/2018 4:12:04 PM  
**Original Doc:** [jbase-56-aix-installation-guide](https://docs.jbase.com/36690-installation-guides/jbase-56-aix-installation-guide)  
**Original ID:** 295004  
**Internal:** No  

**Tags:**
<badge text='unix' vertical='middle' />
<badge text='aix' vertical='middle' />
<badge text='ibm' vertical='middle' />
<badge text='install' vertical='middle' />
<badge text='install jbase on aix' vertical='middle' />
<badge text='installing jbase on aix ' vertical='middle' />

jBASE 5.6 is a 64-bit release and must be installed onto a 64-bit Operating System.

This document assumes you have superuser (su) or root access to the computer.

Root or superuser commands will be represented with the pound sign / hash (#) character.

## Prerequisites

Ensure the volume in which you are installing jBASE 5.6 has sufficient free disk space, approximately 500MB is required, plus additional space for any temporary files.

> **Note:**
>
> ``` bash
> df –k
> ```
>
> will show the current disk usage within each UNIX volume
>
> jBASE is generally installed on whichever volume contains the ‘/opt’ directory structure.

## ‘C’ Compiler

To compile and catalog programs and subroutines, a ‘C’ compiler must be installed on the system where jBASE 5.6 will be installed.

jBASE recommends the use of the following compilers, depending on your operating system platform.

Platform Compiler

AIX XL C/C++

``` bash
-bash-4.3# xlc -qversion
IBM XL C/C++ for AIX, V10.1
Version: 10.01.0000.0000
-bash-4.3# oslevel -r
6100-09
-bash-4.3# lslpp -l xlC*
  Fileset                      Level  State      Description
  ----------------------------------------------------------------------------
Path: /usr/lib/objrepos
  xlC.adt.include           13.1.0.0  COMMITTED  C Set ++ Application
                                                 Development Toolkit
  xlC.aix61.rte             13.1.3.1  COMMITTED  IBM XL C++ Runtime for AIX 6.1
                                                 and later
  xlC.cpp                    9.0.0.0  COMMITTED  C for AIX Preprocessor
  xlC.msg.en_US.cpp          9.0.0.0  COMMITTED  C for AIX Preprocessor
                                                 Messages--U.S. English
  xlC.msg.en_US.rte         13.1.3.1  COMMITTED  IBM XL C++ Runtime
                                                 Messages--U.S. English
  xlC.rte                   13.1.3.1  COMMITTED  IBM XL C++ Runtime for AIX
  xlC.sup.aix50.rte          9.0.0.1  COMMITTED  XL C/C++ Runtime for AIX 5.2
  xlCcmp.13.1.0             13.1.0.0  COMMITTED  XL C++ compiler
  xlCcmp.13.1.0.bundle      13.1.0.0  COMMITTED  XL C++ media defined bundles
  xlCcmp.13.1.0.lib         13.1.0.0  COMMITTED  XL C++ libraries
  xlCcmp.13.1.0.license     13.1.0.0  COMMITTED  XL C++ license files
  xlCcmp.13.1.0.ndi         13.1.0.0  COMMITTED  XL C++ non-default
                                                 installation script
  xlCcmp.13.1.0.tools       13.1.0.0  COMMITTED  XL C++ tools
```

## License Key

To complete the installation, you will need access to the jBASE license key that will have been supplied to you.

## Setup Group and Users

You must first create a jBASE group and add/create a list of jBASE administrators and users. The system administrator should perform all additions.

## Create a Group

Login as ‘root’ and create the ‘jbase’ group. All jBASE users will need to be members of this group.

## AIX mkgroup syntax

``` bash
# mkgroup jbase
```

## Create the jBASE Administrator User

Any existing user can be modified to run jBASE. However, it is recommended that a dedicated jBASE administrator user be created which will be used in the installation of jBASE and the configuration of any other jBASE users.

Login as root and create the “jbaseadm” user. This command will create the jBASE administrator.

## AIX mkuser syntax

``` bash
# mkuser –a home='/home/jbaseadm' shell='/bin/ksh' pgrp='jbase' admgroups='jbase' jbaseadm
```

Setup a password for the new user (password=jbaseadm)

``` bash
# passwd jbaseadm
```

## Create a jBASE User (Optional)

After creating a jBASE Administrator user it is recommended that a non-admin user is also created for normal development tasks

### AIX mkuser syntax for additional user

``` bash
# mkuser –a home='/home/jbaseuser' shell='/bin/ksh' pgrp='jbase' admgroups='jbase' jbaseuser
```

Setup a password for the new user (password=jbaseuser)

``` bash
# passwd jbaseuser
```

### Setup the directory structure for your jBASE Installation

Log in as the jBASE system administrator and create a directory structure for the jBASE installation

``` bash
# mkdir /opt/jbase5
# mkdir /opt/jbase5/5.6.3
```

Change the ‘owner’ and ‘group’ settings for the directories that have just been created so that they are owned by the jBASE administrator user and may be accessed by members of the ‘jbase’ group.

``` bash
# chown –R jbaseadm:jbase /opt/jbase5
```

### Add a symbolic link

Create a ‘symlink’ to the directories just created. By doing this, when a new version of jBASE is released it can be installed in it’s own directory structure which you can point to by changing the symlink

``` bash
# ln -s /opt/jbase5/5.6.3 /opt/jbase5/5.6
```

## Installation

## Extract the contents of the jBASE ‘tar’ file

Log in the as the ‘jbaseadm’ user and navigate to the ‘/opt/jbase5/5.6.3’directory.

Extract the contents of the compressed jBASE ‘tar’ file.

``` bash
umask 0
cd /opt/jbase5/5.6
gzip –d /tmp/jbasetarfile.tar.gz
tar -xvf /tmp/jbasetarfile.tar
```

The jbase tar file will usually be named JBASE\_5.6.xx\_yyyy\_AIX\_6.tar.gz, where ‘xx’ is the point release number and ‘yyyy’ is the build number.

## License Key Installation

License keys for jBASE 5.6 need to be added to the ‘system.properties’ file which will be located in the ‘/opt/jbase5/5.6/config’ folder.

You will have been sent a ‘Server’ license key and may also have been sent a ‘Multisession’ or ‘Websession’ key. Each key must be added as a separate entry in the ‘system.properties’ file as per the installation instructions on the license key. When the keys have been added the last 3 lines of your ‘system.properties’ file will look something like this:

```
#
#################################################################

jruntime.license = qP2XhdjqbdbiqzvfDBgPisP3ITiDfhyT
jruntime.azeroth= 5FLY3q6e4P6I1qdZLr2q4wadhM06VQvzoOGDVX0KZSs=
jruntime.multisession=5FLY3q6e4P6vTff9AETIQYwyjTnxDVK6sS1uFVfPeFQ=
```

For further information on jBASE licensing see the jBASE Knowledgebase:

[jBASE 5 Licensing](./../../../release-notes/5.6.2-release-notes/jbase-5-licensing)

## Configure jBASE Environment Variables

The following settings will allow you to create a basic jBASE environment. For further information on the available environment variables in jBASE see the jBASE Knowledgebase

[Environment Variables](./../../../migration-station/articles/environment-variables)

``` bash
# vi /opt/jbase5/5.6/jbase_env.sh
umask 0002
stty erase ^H
JBCRELEASEDIR=/opt/jbase5/5.6
export JBCRELEASEDIR
JBCGLOBALDIR=$JBCRELEASEDIR
export JBCGLOBALDIR
PATH=$JBCRELEASEDIR/bin:$PATH
export PATH
JBCOBJECTLIST=$JBCRELEASEDIR/lib
export JBCOBJECTLIST
JEDIFILENAME_SYSTEM=/opt/jbase5/5.6/src/SYSTEM
export JEDIFILENAME_SYSTEM
# AIX system libraries (only on AIX)
LIBPATH=$JBCRELEASEDIR/lib:$JRELIB:$LIBPATH
export LIBPATH
```

## Add a pointer to ‘.profile’ of your jBASE Users

Add a pointer to the ‘jbase\_env.sh’ to the ‘.profile’ of each jBASE User by adding the following line at the end of the ‘.profile’ script

``` bash
. /opt/jbase5/5.6/jbase_env.sh
```

For example:

``` bash
# vi /home/jbuser/.profile
PATH=/usr/bin:/etc:/usr/sbin:/usr/ucb:$HOME/bin:/usr/bin/X11:/sbin:.
export PATH
if [ -s "$MAIL" ] # This is at Shell startup. In normal
then echo "$MAILMSG" # operation, the Shell checks
fi # periodically.
. /opt/jbase5/5.6/jbase_env.sh <-- Add this line
```

> **Note:**  
> If you want to run it as a user, simply do that same thing at the shell
>
 ``` bash
 $. /opt/jbase5/jbase_env.sh
 ```

> **Note:**
> If a comprehensive .profile for each user is preferred, then the “IJU” utility can be used to create a template, i.e.:
>
 ``` bash
 /opt/jbase5/5.6/bin/IJU
 ```

## Getting Started with jBASE

At this point jBASE has been installed and licensed.

The following section describes how jBASE may be configured to behave similarly to other ‘MV’ flavours which will be familiar to ‘MV’ users. This will be done using the ‘jbaseuser’ user that was created previously.

## Create a SYSTEM file

Log in as ‘jbaseuser’ and create a SYSTEM file in the $HOME directory

```
CREATE-FILE DATA SYSTEM 11
chmod 666 SYSTEM
```

The JEDIFILENAME\_SYSTEM environment variable in the ‘.profile’ file will have to be changed to point to the new SYSTEM file which has been created.

## Create an account

```
CREATE-ACCOUNT $HOME/PLAY
```

This will create an account folder, create and MD file in the account, populate it via “UpdateMD” and also create an entry for that account in the SYSTEM file

Test that the Account has been correctly defined

```
LOGTO PLAY
jsh PLAY ~ -->
```

Any user should now be able to LOGTO the PLAY account and try out jBASE

```
$ . /opt/jbase5/jbase_env.sh
$ LOGTO PLAY
jsh PLAY ~ -->CREATE-FILE BP TYPE=UD
jsh PLAY ~ -->ED BP HELLO.WORLD
001 CRT 'Hello World!'
jsh PLAY ~ -->BASIC BP HELLO.WORLD
jsh PLAY ~ -->CATALOG BP HELLO.WORLD
jsh PLAY ~ -->HELLO.WORLD
Hello World!
```

Or simply login as the “jbaseuser” and LOGTO PLAY ( You could add the LOGTO PLAY to the .profile)

login: jbaseuser
password:

```
$ LOGTO PLAY
jsh PLAY ~ -->
```

Back to [Installation Guides](./../README.md).

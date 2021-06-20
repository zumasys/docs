# jBASE Licensing (5.8+)

<PageHeader />

**Tags:**
<badge text='5.8+' vertical='middle' />

## Preliminary  

A new licensing model has been introduced with release 5.8 of jBASE and this document serves to describe it. The old model will be retained for the forseeable future, though a timeline for deprecation will be set.

The following licensing subscriptions are supported in jBASE from release 5.8 and beyond:

| Type          | Old model | New model | Description                                                                                         |
| ------------- | --------- | --------- | --------------------------------------------------------------------------------------------------- |
| User          | Yes       | Yes       | Restrict usage to a specified number of logged in and connected users.*                             |
| CPU           | No        | Yes       | Restrict jBASE programs to a specified number of CPUs. All running jBASE programs will be included. |
| Multi-session | Yes       | No        | Not relevant with the use of CPU licensing.                                                         |
| Web session   | Yes       | No        | Not relevant with the use of CPU licensing.                                                         |

> * = Background jobs do not take a license, nor do a small number of jBASE administration utilities.

## The No-License Installation

jBASE may be run without any license subject to hard-coded restrictions. Without any defined license, jBASE will default to a 2-user development license and a self-explanatory message appears like this:

```
$ jsh
jBASE Licensing. No valid license found. Using 2 user developer license
      License will expire in 30 days. To re-enable for another 30 days,
      you will need to log off all users and shut down background
      processes and services and remove IPC resources using 'jlicense removeipc'
Set environment variable JBASE_DISABLE_DEVELOPER_LICENSE_WARNING to remove this message
~ jsh ->
```

## The New jlicense Command

In the old model there were a number of licensing programs, but for the new license there is a single licensing program that covers everything. Run `jlicense --help` to see what is available.

> [The jlicense command](./../jlicense/README.md)

## CPU Licensing

When a CPU license is purchased and activated, it means jBASE will be limited to consecutively running on a maximum number of CPUs (or CPU threads) at any one time. For example, if you have a 4xCPU license, then jBASE will only allow 4 processes to be active at any one time, regardless of how many cores and CPUs your hardware or VM actually has.

When a jBASE process pauses for any reason (e.g. at an `INPUT` statement, or waiting for a record lock), then the CPU license is temporarily relinquished until processing consumes again. In this way, there can be hundreds of jBASE processes "active" on a CPU license, but only 4 consuming CPU at any time. Should there be more jBASE programs wanting CPU than the licenses allow, then jBASE will time swap these processes so that every process gets a slice of the action, but overall the system will run slower.

## Obtaining a License

A license will be provided by jBASE or its partners in the form of a 24 character identifier, bundled into groups of 4 characters like this:

```
5AH2-RKHW-NKUP-7GCL-ZTT8-QVNE
```

## Installing the License

**IMPORTANT: The host MUST have access to the internet as the activation requires connection to the jBASE license server.**

The license can now be activated on the jBASE server and applied to the running jBASE like this:

```
$ jlicense activate --license=5AH2-RKHW-NKUP-7GCL-ZTT8-QVNE
License successfully activated for 2 cpus at 17:14:30  21 DEC 2020
License successfully applied
```

You can check the status of the license at any time using `jlicense info`, which is especially useful after activating a new license:

```
$jlicense info

General information
    License Type                12 (Developer)
    License Key                 5AH2-RKHW-NKUP-7GCL-ZTT8-QVNE
    License Fingerprint         T9jyz8yTrMG1EgCPeK/fGiT+PMkMk5Qe9LwZ2HXOXRM=
    License Machine ID          d7ab18b3-1b8f-425d-81b8-126c1fd7c060
    Total Standard Licenses     0
    CPU License count           2
    CPU License in use          1
    CPUs online (configured)    64 (64)
    Expiration date             21 DEC 2021  17:04:40     (will expire in 8759:12:22)
License validated at            21 DEC 2020  17:14:30  
Products                        Runtime
                                Transaction Journaling
                                Always On
Current license usage
    Actual free standard        0
    Actual used standard        0
    multisession                0
    websession                  0
    Uname                       deepthought

Total of 1 found distributed as follows: 
   0 licensed
   1 unlicensed
   0 background (unlicensed)
```

## Validating the License

Every 7 days, jBASE will automatically check with the jBASE license server the validity of the license. A further 7 days grace period is provided for jBASE to make that connection. Failure to connect to the license server after a total of 14 days means a warning message is issued and after a further 24 hours, new logins are inhibited.

The license can be manually invoked using the `jlicense validate` command. This can give comfort that the above-mentioned validation is working successfully. You can see from output of `jlicense info` when the license was last validated.

Another reason to run `jlicense validate` is that it will pick up any changes to your licensing. For example, if you have purchased another 2xCPU licenses, then the next time `jlicense validate` is executed, it will automatically install the upgrade:

```
$ jlicense validate
License successfully applied
```

## Moving jBASE

The jBASE license, once activated, is tied to a particular installation. It can only be activated once on that installation. Should you move jBASE to another location on your machine, or if you move to another machine, you should first de-activate the license on the old machine before re-activating on a different machine.

If it is not possible to perform this de-activation, (e.g. machine down, forgetfulness), you will still be able to run the activation on a second machine. This will likely result in a communication from Zumasys at some point querying the dual installation. However, if the original installation is simply never used again, then it is assumed to be a dead installation:

```
$ jlicense deactivate
License successfully deactivated for current machine
```

## Emergency Licensing

If all else fails, you can install an emergency license at your jBASE installation. This does NOT require an internet connection.

Below is an example of creating an emergency license and the messages are self explanatory. Be careful as it will overwrite any existing license which you may like to back up.

The license is only valid for 8 hours, after which time you will need to either obtain support from Zumasys for a new license or re-run the `jlicence emergency` command again:

```
$ jlicense emergency

This option generates an emergency license.

WARNING: This will over-write any existing license definition, so
   make a backup of file '/home/jbase/5.0_rels/devel2/config/jbase_cpu_license'.

Once this license is generated, you will need to shut down jBASE completely
   in order to apply it, which means logging off all users, shutting down
   background jobs and services such as jDLS, jbase_agent, printers.

You will also need to run 'jlicense removeipc'

Do you wish to continue (Y/N) ? Y
License successfully activated for 4 cpus at 18:08:40  21 DEC 2020
```

## The $license::status() Method

There is a new class library which gives support for the new licensing, and is callable from jabbascript programs. A jabbascript program is a normal multi-value program that supports language extensions to provide dynamic object support.

The `status()` class method returns details of the license and the users that are logged on. In the program shown below, we declare it as a jabbascript program so that we can use the jabbascript MV extensions, we create an object of class `$license`, we call the `status()` method inside the class and the returned variable `info` is a dynamic object defining the license and the logged on users. Finally we use the `$tojson()` method to convert the dynamic object to an external JSON representation.

The output of the program is also shown, and most of it is self-explanatory, so only snippets are shown for brevity and clarity:

```
 cat test16.jabba
    $option jabba
    obj = new object("$license")
    info = obj->status()
    print info->$tojson(1)
    

./test16 
{
        "license_type":13,
        "license_type_str":"Free",
        "max_users":2,
        "max_cpu":0,
        "slots":[
                {
                        "port":1,
                        "pid":129291,
                        "slot":0,
                        "licensed":true,
                        "background":false,
                        "time_started":1608635719,
                        "time_thread_update":1608635748,
                        "thread_type":1,
                        "thread_type_str":"Normal",
                        "ourselves":true,
                        "clienthostname":"192.168.1.111",
                        "license_type":1,
                        "license_type_str":"Standard"

                }
        ],
        "slot_total":1,
        "slot_licensed":1,
        "slot_unlicensed":0,
        "slot_background":0,
        "current_time":1608635748

}
```

## Calling out of jBASE

If you have a CPU license, you need to be aware of the impact of calling outside of normal jBASE run-time libraries. For most customers, this won't be a problem as their entire application runs inside jBASE libraries.

If however you have your own libraries, you might want to relinquish your jBASE CPU license while executing inside those libraries. For example, if you are doing network I/O, which could take a relatively long time, you don't want to be permanently consuming a license.

If you are inside **C** code, this is how you would code it:

```
#include <jsystem.h>
...
JLibLicenseRelinquish(dp);          // Stop my application from using a jBASE license
.... My own 'C' code or external libraries
JLibLicenseConsume(dp);             // Start consuming a jBASE license
```

If you have any concerns about this, or need help with the interfaces, please contact jBASE/Zumasys support.

Back to [Installation Guides: Licensing](./../../administration/installation-guides/licensing/README.md)

Back to [jBASE Licensing Overview](./../README.md)

<PageFooter />

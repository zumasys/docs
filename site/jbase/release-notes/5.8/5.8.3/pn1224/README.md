# PN1224

<PageHeader />

## Description

Improve core dump handling

## Previous Release Behavior

The only option was for jBASE to either do a system core dump or not, the default being not. Also, the OS ulimit would often prevent a core dump.

## Current Release Behavior

Starting with jBASE 5.8.3, the core dump handling for jBASE has been significantly improved, giving better options and more information.
The following changes apply to AIX and Linux platforms. At present , Windows does not have these options, but that may come in the future.  
There are 4 signals which force a jBASE process to terminate under error conditions.  

These are:

- SIGFPE - Floating point errors
- SIGSEGV - Segmentation violation.
- SIGBUS - Bus error
- SIGILL - Illegal instruction.

### Note

>The main difference between Segmentation Fault and Bus Error is that Segmentation Fault indicates an invalid access to a valid memory, while Bus Error indicates an access to an invalid address.  

When one of these signals occur, we print a few lines of detail to the terminal and some information to a file. The file information is defined by JBC_CORE_DUMP, see below. As an example of the terminal output ...

```bash
jBASE: Pid 12124390: Signal 11: Segmentation fault. Aborting
jBASE: Extra signal information: Invalid permissions for mapped object
jBASE: Signal generated at SUB1.b:5
jBASE: Information dumped to file './core_jbase_12124390'
```

These signals show a serious fault has occurred. The actions taken by jBASE are defined by the environment variable JBC_CORE_DUMP which can be set to a number of options separated by a comma "," or colon ":". There are many actions available, and allow specific data to be dumped. The best option is "all", which provides things like signal details, program stack, program variables, jBASE release information, environment variables.

These options for JBC_CORE_DUMP are:

| Option       | Description |
| ---          | ---         |
| 0            | No dump of anything |
| 1            | Dump the standard infor.mation (basic,stack,core,event). |
| 2            | Dump all information (except shared memory), same as 'all' option. |
| all          | Dump all information (except shared memory), same as '2' option. |
| core         | Force an Operating System core dump (subject to ulimit -c). |
| event        |  Dump the most recent jBASE events. |
| env          | Dump environment variables. |
| filename=xxx | Name of dump file (%p for process id, %t for UTC). |
| help         | Display help information. |
| nowarning    | Do not display warning messages. |
| release      | Dump jBASE release and version information. |
| shared       | Dump the shared memory to a separate file. |
| silent       | Don't display messages to screen. |
| sleep[=nnn]  | Sleep for nn (default 300) seconds to allow a debugger to be attached. |
| stack        | Dump program stack. |
| system       | Dump system information. |
| variables    | Dump variables + program stack. |

A typical setting might be this

```bash
export JBC_CORE_DUMP=all,filename=/tmp/jbase_core_%p_%t
```

This means we dump all information (except for shared memory) to a file in /tmp and the file name includes the process id and time in UTC.  
In the absence of the "filename=" option, jBASE will default to "./core_jbase_%p".  
You can be reminded of this information by running ANY jBASE command like this:

```bash
JBC_CORE_DUMP=help WHO
```

In the absence of JBC_CORE_DUMP environment variable, it defaults to 'JBC_CODE_DUMP=basic', meaning any of the 4 mentioned signals will create a jBASE core dump with basic information, but will NOT by default create an operating system core dump.

## Controlling the core dumps  

### jBASE core dumps

jBASE information dumps are controlled by the 'JBC_CORE_DUMP' environment variable shown above. This also allows you to decide the file name and location of the generated file.

### Operating System core dumps

For an operating system core dump you must have the system limit for core dumps set to non-zero, preferably to a value such as 100000. This is controlled by the ulimit command.  

You must also have jBASE configured to support generating a system core dump. This is done by having 'core' as an action in the JBC_CORE_DUMP environment variable, or using an option that includes it. For example:

```bash
export JBC_CORE_DUMP=basic,release,core
OR
export JBC_CORE_FILE=all
```

You can change the default value of the size of core dumps (plus other system wide limits) by editing the file /etc/security/limits.conf on Linux systems, and on AIX systems edit file /etc/security/limits.
You can also control the location of the OS core dumps. For AIX, use the "chcore" , "lscrore"  and "syscorepath". For Linux, a good reference page is [here](https://linux-audit.com/understand-and-configure-core-dumps-work-on-linux/).

### Shared memory core dumps

These are an optional 3rd file to be dumped and will contain the contents of the shared memory segments used by jBASE. They can be enabled by having the action "shared" in the JBC_CORE_DUMP environment variable. The name of the file will be the same as the jBASE core dump but appended with _sharedmemory.  

In the example below we use a test program to cause a segmentation error. The JBC_CORE_DUMP includes the 'shared' option so shared memory will be dumped. We can later examine the shared memory using the 'shminfo -f filename' command  which will display the contents of shared memory.

```bash
$ export JBC_CORE_DUMP=all,shared,filename=/home/jbase/testing/signal/coredumps/jbase_core_%p_%t

$ test1
jBASE: Pid 53080: Signal 11: Segmentation fault. Aborting
jBASE: Extra signal information: Address not mapped to object
jBASE: Signal generated at test1.jabba:10
jBASE: Information dumped to file '/home/jbase/testing/signal/coredumps/jbase_core_53080_1623691258'
jBASE: Shared memory dumped to file '/home/jbase/testing/signal/coredumps/jbase_core_53080_1623691258_sharedmemory'
Segmentation fault (core dumped)

$jshminfo -f /home/jbase/testing/signal/coredumps/jbase_core_53080_1623691258_sharedmemory

Shared memory recovered from file '/home/jbase/testing/signal/coredumps/jbase_core_53080_1623691258_sharedmemory'
        Revision          1
        Dumped at         Mon Jun 14 18:20:58 2021
        Total dump size   18635312 bytes = 

[ Lines deleted for brevity ]
```

## Summary

- Set the JBC_CORE_DUMP to something simple like "all".
- Add the name of the file and path for jBASE core dumps if you want to change from the default (current directory), using the filename=xxx action in JBC_CORE_DUMP.
- Ensure the value of 'ulimit -c' is big enough, for example 100000.

That's about it to get a couple of high quality core dumps.

Back to [5.8.3 Release Notes](./../README.md)
  
<PageFooter />

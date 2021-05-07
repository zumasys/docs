# jBASE Configuration File

<PageHeader />

The jBASE system configuration file, *jbase_config.json*, is used to configure jBASE environment variables, legacy license keys and other configuration data. This file is normally located at `$JBCGLOBALDIR/config/jbase_config.json`.  

When [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir/README.md) and  [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir/README.md) are separate directories, a stub version of *jbase_config.json* may be found at `$JBCRELEASEDIR/config/jbase_config.json`.  

The stub config file should, at minimum, specify the location of [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir/README.md). When two configuration files are found (one in [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir/README.md) and one in [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir/README.md), the files are combined, and the resulting merged configuration is used for the system configuration.

In special cases, the `JBASE_CONFIG_FILE` environment variable may set before launching a jBASE session. When jBASE starts, this file will be used to configure jBASE, rather than the default configuration.

The default *jbase_config.json* configuration file consists mostly of comments, which describe jBASE environment variables. The intention is to provide brief documentation for all possible jBASE environment variables.

## jBASE Configuration - Environment

``` json
    "environment" : [
        {"name": "JBCGLOBALDIR", "default": "$JBCRELEASEDIR"},
        {"name": "PATH", "value": "$JBCRELEASEDIR/bin:$PATH"}
    ]
```

The `environment` property in the configuration file is a JSON array containing one element per environment variable. Each element is a JSON object with 2 or 3 properties: `name`, `value` and `default`. The *name* property is required, and specifies the name of an environment variable to set. If *value* is specified, then it becomes the value of that variable. If *default* is specified, then it becomes the value of the variable, but only when the variable has not already been set. In this way, environment variables set before starting the jBASE session can override the *default* specified in the configuration file. Using the *value* property will override any variable previously set. You can set the *value* to null ("") to erase an environment variable.

The system environment is updated in the order of the elements in the array. This is important, as the value (or default) in any element may reference other environment variables. If a value references another variable, be sure the referenced variable occurs earlier in the environment array. 

Use normal O/S syntax when referencing an environment variable in a value (or default). For example, on Linux, `"value": "$HOME/bin"` is valid. Similarly, on Windows, use `"value": "%HOME%\\bin"`.

> Note: Notice the double backslashes in the Windows example. This is standard JSON string syntax, where a single backslash must be "escaped" using two backslashes (`\\`).

## jBASE Configuration - Licenses

The `licenses` property in the configuration file is used to store jBASE license keys. This is a JSON object, with up to 5 properties: `runtime`, `system`, `multisession`, `websession` and `eval`.

``` json
    "licenses": {
        "runtime": "qP2XhdjqbdbiqzvfDBgPisP3ITiDfhyT",
        "eval": "asdfasdfasdfasdfasdfasdfasdfasdf"
    }
```

Normally you should use jBASE utilities such as [jlicenseupdate](https://docs.zumasys.com/jbase/administration/installation-guides/licensing-a-jbase-server/) to update the licenses property of the configuration file.

## jBASE Configuration - Other settings

On Linux and AIX, the `umask` property in the configuration file may be used to set the process umask when starting a jBASE session. The value is a 4 digit octal value in the same format as the umask command.

``` json
    "umask": "0002"
```

## jBASE Directories

* [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir/README.md) - This is the directory where the jBASE release files are stored. This directory is specific to each release of jBASE, and is normally named for the release that it contains. Default location is `/opt/jbase/<release>` (Linux) or `C:\jbase\<release>` (Windows). Normally there is a symbolic link, *CurrentVersion*, pointing to the most recent jBASE release directory.
* [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir/README.md) - This directory contains jBASE system configuration files. Traditionally it was the same as [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir/README.md); however, by moving the jBASE configuration files out of [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir/README.md) and into a separate [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir/README.md) directory, the system configuration can easily be maintained when upgrading the jBASE release. Additionally, since it contains the system configuration, backing up the system configuration is simplified. The default location is `/opt/jbase/global` (Linux) or `C:\jbase\global` (Windows).
  > Note: The default location has changed from previous jBASE releases.
* [JBCDATADIR](./../../../environment-variables/jbcdatadir/README.md) - This is the default directory where jBASE data resides. This includes the `SYSTEM` file, user account directories and the spooler. The default location is `/jbasedata` (Linux) or `C:\jbase_data` (Windows).
  > Note: The default location has changed from previous jBASE releases.
* `JBCPROCDIR` - jBASE uses the *proc* directory to manage jBASE resources like ports. The default location is `$JBCGLOBALDIR`.
  > Note: This is the parent of the *proc* directory, not the actual *proc* directory.
* [JBCSPOOLERDIR](./../../../environment-variables/jbcspoolerdir/README.md) - This is the directory where the jBASE spooler entries are located. The default location is `$JBCDATADIR/jspooler`.

## Other jBASE Configuration Files

Besides the system configuration file, *jbase_config.json*, jBASE uses many other configuration files. These are almost always located in `$JBCGLOBALDIR/config`.

> Note: In prior releases of jBASE some of these files were located in [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir/README.md) and others in [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir/README.md). This was not normally a problem because traditionally both  [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir/README.md) and [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir/README.md) referenced the same directory.

The following table summarizes the other jBASE configuration files. Configuration files which have been moved from  [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir/README.md) to [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir/README.md) are marked with asterisk (*).

| *   | config file                | location                                      | description                                                      |
| --- | -------------------------- | --------------------------------------------- | ---------------------------------------------------------------- |
|     | __jBASE config__           |
|     | jbase_versions.json        | /usr/lib/jbase<br>C:\ProgramData\jbase        | registers jBASE installations                                    |
| *   | system.json                | N/A                                           | replaced by jbase_config.json                                    |
|     | system.properties          | $JBCRELEASEDIR/config                         | compiler configuration<br>previously contained license keys      |
| *   | filesecurity               | $JBCGLOBALDIR/config                          | encryption key vault for encrypted files                         |
| *   | Config_EMULATE             | $JBCGLOBALDIR/config                          | built-in and custom jBASE emulation options                      |
| *   | Config_EMULATE_*           | $JBCGLOBALDIR/config                          | defines custom emulation (*= value of $JBCEMULATE)               |
| *   | Config_EMULATE.txt         | $JBCGLOBALDIR/config                          | describes format of Config_EMULATE file                          |
| *   | Config_TERM                | $JBCGLOBALDIR/config                          | maps term type to terminfo name                                  |
| *   | audit_logging.json         | $JBCGLOBALDIR/config                          | configures jBASE audit logging                                   |
| *   | jagent_config              | $JBCGLOBALDIR/config                          | default jbase_agent configuration                                |
| *   | jshlogin                   | $JBCGLOBALDIR/config                          | login script executed by jsh (Linux only)                        |
| *   | jLibDefinition             | $JBCGLOBALDIR/config                          | defines behavior of CATALOG command                              |
|     | __Transaction logging__    |                                               |                                                                  |
|     | jediLoggerConfig           | $JBCLOGCONFDIR/config<br>$JBCGLOBALDIR/config | transaction logger configuration                                 |
|     | jediLoggerAdminLog         | $JBCLOGCONFDIR/config<br>$JBCGLOBALDIR/config | transaction logger admin log                                     |
|     | jediLoggerTransLock        | $JBCLOGCONFDIR/config<br>$JBCGLOBALDIR/config | transaction logger lock file                                     |
|     | __jRFS / jConnect config__ |                                               |                                                                  |
| *   | jrfs_config                | $JBCNETDIR<br>$JBCGLOBALDIR/config            | jRFS client and server configuration                             |
|     | jnet_config                | $JBCNETDIR<br>$JBCGLOBALDIR/config            | jConnect client and server configuration                         |
|     | jnet_map                   | $JBCNETDIR<br>$JBCGLOBALDIR/config            | maps client user information to the server user information      |
|     | jnet_env                   | $JBCNETDIR<br>$JBCGLOBALDIR/config            | set up jConnect environment                                      |
|     | jnet_access                | $JNETDIR<br>$JBCGLOBALDIR/config              | defines server access permissions                                |
|     | __Spooler config__         |                                               |                                                                  |
| *   | jspform_deflt              | $JBCSPOOLERDIR<br>$JBCGLOBALDIR/config        |                                                                  |
| *   | jspjobs_config             | $JBCSPOOLERDIR<br>$JBCGLOBALDIR/config        |                                                                  |
| *   | jspxl_deflt                | $JBCGLOBALDIR/config                          |                                                                  |
| *   | jspxl_*                    | $JBCGLOBALDIR/config                          | (* = value of $DEVCONFIG_TRANSLATE)                              |
|     | jspool_log                 | $JBCSPOOLERDIR                                |                                                                  |
|     | formqueue_*                | $JBCSPOOLERDIR/jobs                           | (* = form queue number)                                          |
|     | __Licensing__              |                                               |                                                                  |
|     | multisession               | $JBCRELEASEDIR                                | directory listing clients permitted to use multisession licenses |
|     | websession                 | $JBCRELEASEDIR                                | directory listing clients permitted to use websession licenses   |

<PageFooter />

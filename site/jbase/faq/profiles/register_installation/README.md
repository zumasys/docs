# register_installation

<PageHeader />

## Syntax

```
register_installation <name> <options>
```

## Description

Maintain details about jBASE product installations on a machine, and display information about installed products and configurations.

| Options | Description |
| --- | --- |
| -L | List any registered products on this machine |
| -R | Register the current product installation in JSON repository |
| -U | Un-register the current product installation in |
| -I | Show details about an installation - use **name** to identify the installation to show (partial match OK). If **name** is omitted, show most recent installation |
| -h | Online help |

### JSON data file name and location

JSON repository file name:                          jbase\_versions.json

Location windows platforms:                     %PROGRAMDATA%\jbase

Location UNIX platforms:                             /usr/lib/jbase

### Example

```
register_installation -R
register versions
Fin.

register_installation -L
List versions

--------------------------------------------------------------------------------------------------------
Package ID
    Installed at                                       Installed            Version    Patch      Change
--------------------------------------------------------------------------------------------------------
JBASE_REPO_KEY_5_7_11__OPT_JBASE5_5.7.11_0EA8915F_24014
    /opt/jbase5/5.7.11                                 12/02/2021 21:04     5.7.11     0ea8915f   24014

JBASE_REPO_KEY_5_8_0__OPT_JBASE5_5.8.0_BA625105_25003
    /opt/jbase5/5.8.0                                  23/03/2021 10:48     5.8.0      ba625105   25003

JBASE_REPO_KEY_5_8_1__OPT_JBASE5_5.8.1_0F51BCF4_25004
    /opt/jbase5/5.8.1                                  19/05/2021 16:38     5.8.1      0f51bcf4   25004

JBASE_REPO_KEY_5_8_2__OPT_JBASE5_5.8.2_08491312_25005
    /opt/jbase5/5.8.2                                  07/06/2021 23:21     5.8.2      08491312   25005

JBASE_REPO_KEY_5_8_3__OPT_JBASE5_5.8.3_948D8070_25007
    /opt/jbase5/5.8.3                                  29/06/2021 23:34     5.8.3      948d8070   25007
--------------------------------------------------------------------------------------------------------

Fin.

register_installation JBASE_REPO_KEY_5_8_3__OPT_JBASE5_5.8.3_948D8070_25007 -I
uuid=JBASE_REPO_KEY_5_8_3__OPT_JBASE5_5.8.3_948D8070_25007
installation_information.installation_path=/opt/jbase5/5.8.3
installation_information.installed=29/06/2021 23:34
release_information.jbase_release=5.8.3
release_information.create_date=Tue Jun 29 13:45:13 2021
release_information.patch_level=948d8070
release_information.change_level=25007
build_options.platform=LINUX_ELF_AS7
build_options.compiler=cc
build_options.compiler_options="JBUILD_OPTION_OPTIMIZED","JBUILD_OPTION_LIBXML","JBUILD_OPTION_JAVADOC_USER","JBUILD_OPTION_INSTALLER","JBUILD_OPTION_OLDTAPE","
JBUILD_OPTION_NO_MACROS","JBUILD_OPTION_NO_LCHOWN","JBUILD_OPTION_NO_SIGSET","JBUILD_OPTION_MMAP_FULL","JBUILD_OPTION_USE_SC_PAGESIZE","JBUILD_OPTION_USE_PW_GEC
OS","JBUILD_OPTION_NO_ALTZONE","JBUILD_OPTION_INLINE_FUNCTIONS","JBUILD_OPTION_STL_COMPARE_BUG","JBUILD_OPTION_SYSERRLIST","JBUILD_OPTION_PROFILE_THREAD","JBUIL
D_OPTION_FILE64","JBUILD_OPTION_JDLS","JBUILD_OPTION_ALLOCA","JBUILD_OPTION_64BIT","JBUILD_OPTION_NOJDP","JBUILD_OPTION_HAS_YYLINENO"
release_config.environment={"name":"JBCGLOBALDIR","value":"/opt/jbase5/global"}
release_config.installation_options.installation_path=/opt/jbase5/5.8.3
release_config.installation_options.symlink=/opt/jbase5/CurrentVersion
release_config.installation_options.jdls_options=port
release_config.installation_options.telnet_options=true
release_config.installation_options.jrcs_options=true
release_config.installation_options.create_system_file=true
release_config.installation_options.spooler_options=true
release_config.installation_options.create_admin_user=true
release_config.installation_options.admin_user=jbase
release_config.installation_options.admin_group=jbase
release_config.installation_options.create_admin_account=true
release_config.installation_options.jbaseadmdir=/opt/jbase5/jbase_data/JBASEADM
system_config.environment={"name":"JBCGLOBALDIR","value":"/opt/jbase5/global"},{"name":"JBCDATADIR","default":"/opt/jbase5/jbase_data"},{"name":"PATH","value":"
$JBCRELEASEDIR/bin:$PATH"},{"name":"LD_LIBRARY_PATH","value":"$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH"},{"name":"LIBPATH","value":"$JBCRELEASEDIR/lib:$LIBPATH"},{"n
ame":"JBCPORTNO","value":"400-5000"},{"name":"JEDIFILENAME_SYSTEM","default":"$JBCDATADIR/SYSTEM]D"},{"name":"JBC_SPOOLER_PORT_BASE","value":"5000"},{"name":"JB
ASE_LOCALE","value":"en_GB"},{"name":"JBASE_TIMEZONE","value":"GB"},{"name":"JBCSPOOLERDIR","default":"$JBCDATADIR/jspooler"}
system_config.umask=0002
system_config.licenses.runtime=qP2XhdjqbdbiqzvfDBgPisP3ITiDfhyT
system_config.licenses.eval=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
system_config.licenses.multisession=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=
```

### What is held in the repository JSON?

``` json
{"jbase_installs": [{
{
        "uuid":"JBASE_REPO_KEY_5_8_3__OPT_JBASE5_5.8.3_948D8070_25007",
        "installation_information":{
                "installation_path":"/opt/jbase5/5.8.3",
                "installed":"29/06/2021 23:34"
        },
        "release_information":{
                "jbase_release":"5.8.3",
                "create_date":"Tue Jun 29 13:45:13 2021",
                "patch_level":"948d8070",
                "change_level":"25007"
        },
        "build_options":{
                "platform":"LINUX_ELF_AS7",
                "compiler":"cc",
                "compiler_options":[
                        "JBUILD_OPTION_OPTIMIZED",
                        "JBUILD_OPTION_LIBXML",
                        "JBUILD_OPTION_JAVADOC_USER",
                        "JBUILD_OPTION_INSTALLER",
                        "JBUILD_OPTION_OLDTAPE",
                        "JBUILD_OPTION_NO_MACROS",
                        "JBUILD_OPTION_NO_LCHOWN",
                        "JBUILD_OPTION_NO_SIGSET",
                        "JBUILD_OPTION_MMAP_FULL",
                        "JBUILD_OPTION_USE_SC_PAGESIZE",
                        "JBUILD_OPTION_USE_PW_GECOS",
                        "JBUILD_OPTION_NO_ALTZONE",
                        "JBUILD_OPTION_INLINE_FUNCTIONS",
                        "JBUILD_OPTION_STL_COMPARE_BUG",
                        "JBUILD_OPTION_SYSERRLIST",
                        "JBUILD_OPTION_PROFILE_THREAD",
                        "JBUILD_OPTION_FILE64",
                        "JBUILD_OPTION_JDLS",
                        "JBUILD_OPTION_ALLOCA",
                        "JBUILD_OPTION_64BIT",
                        "JBUILD_OPTION_NOJDP",
                        "JBUILD_OPTION_HAS_YYLINENO"
                ]
        },
        "release_config":{
                "environment":[
                        {
                                "name":"JBCGLOBALDIR",
                                "value":"/opt/jbase5/global"
                        }
                ],
                "installation_options":{
                        "installation_path":"/opt/jbase5/5.8.3",
                        "symlink":"/opt/jbase5/CurrentVersion",
                        "jdls_options":"port",
                        "telnet_options":"true",
                        "jrcs_options":"true",
                        "create_system_file":"true",
                        "spooler_options":"true",
                        "create_admin_user":"true",
                        "admin_user":"jbase",
                        "admin_group":"jbase",
                        "create_admin_account":"true",
                        "jbaseadmdir":"/opt/jbase5/jbase_data/JBASEADM"
                }
        },
        "system_config":{
                "environment":[
                        {
                                "name":"JBCGLOBALDIR",
                                "value":"/opt/jbase5/global"
                        },
                        {
                                "name":"JBCDATADIR",
                                "default":"/opt/jbase5/jbase_data"
                        },
                        {
                                "name":"PATH",
                                "value":"$JBCRELEASEDIR/bin:$PATH"
                        },
                        {
                                "name":"LD_LIBRARY_PATH",
                                "value":"$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH"
                        },
                        {
                                "name":"LIBPATH",
                                "value":"$JBCRELEASEDIR/lib:$LIBPATH"
                        },
                        {
                                "name":"JBCPORTNO",
                                "value":"400-5000"
                        },
                        {
                            "name":"JEDIFILENAME_SYSTEM",
                            "default":"$JBCDATADIR/SYSTEM]D"
                        },
                        {
                            "name":"JBC_SPOOLER_PORT_BASE",
                            "value":"5000"
                        },
                        {
                            "name":"JBASE_LOCALE",
                            "value":"en_GB"
                        },
                        {
                            "name":"JBASE_TIMEZONE",
                            "value":"GB"
                        },
                        {
                            "name":"JBCSPOOLERDIR",
                            "default":"$JBCDATADIR/jspooler"
                        }
                ],
                "umask":"0002",
                "licenses":{
                    "runtime":"qP2XhdjqbdbiqzvfDBgPisP3ITiDfhyT",
                    "eval":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                    "multisession":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx="

}}]}
```

Back to [Profiles](./../jbase-profiles)

<PageFooter />

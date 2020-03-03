# Additional Utilities

**Created At:** 4/5/2018 5:20:54 PM  
**Updated At:** 4/5/2018 5:40:58 PM  
**Original Doc:** [additional-utilities](https://docs.jbase.com/44253-profiles/additional-utilities)  
**Original ID:** 306601  
**Internal:** No  

## Description

Adds details on the current product to a JSON repository to enable external applications to locate and configure this application.

| Options | Description |
| --- | --- |
| -L | List any registered products on this machine |
| -R | Register the current product installation in JSON repository |
| -U | Un-register the current product installation in |

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
list versions
--------------------------------------------------------------------------------
Installed at                                       Version    Patch      change
--------------------------------------------------------------------------------
c:\BUILDS\ZjBASE_development                       5.6.0      5_60718    20651
--------------------------------------------------------------------------------
Fin.
```

### Whats held in the repository JSON

``` json
{"jbase_installs": [{
“uuid”:"JBASE_REPO_KEY_5_6_0_c__BUILDS_ZjBASE_development_5_60718_20651",
“installation_information” : {
"installation_path" : "c:\\BUILDS\\ZjBASE_development",
“installed”:”03\/27\/2018 15:05”
},
"release_information" : {
"jBase Release" : "5.6.0",
"Create date" : "Mon Mar 05 11:46:11 2018",
"Patch Level" : "5_60718",
"Change Level" : "20651"
},
"build_options" : {
"platform" : "WIN64",
"compiler" : "cl",
"compiler_options" : ["JBUILD_OPTION_DEBUG", "JBUILD_OPTION_NOLICENSE", "JBUILD_OPTION_NOOPTIMIZE", "JBUILD_OPTION_NO_JAVA", "JBUILD_OPTION_NO_ACE", "JBUILD_OPTION_NOJAGENT", "JBUILD_OPTION_NOJCF", "JBUILD_OPTION_NOJEE", "JBUILD_OPTION_NOZLIB", "JBUILD_OPTION_NO_IJQLJEDI", "JBUILD_OPTION_NO_CS", "JBUILD_OPTION_NO_OBJEXNET", "JBUILD_OPTION_NO_JRCS", "JBUILD_OPTION_LIBXML", "JBUILD_OPTION_FILE64", "JBUILD_OPTION_4BYTE", "JBUILD_OPTION_OLDTAPE", "JBUILD_OPTION_NO_SYSCONF", "JBUILD_OPTION_NO_STATFS", "JBUILD_OPTION_NO_MALLINFO", "JBUILD_OPTION_NO_ALTZONE", "JBUILD_OPTION_NO_MACROS", "JBUILD_OPTION_INLINE_FUNCTIONS", "JBUILD_OPTION_NO_PROFILE", "JBUILD_OPTION_SYSERRLIST", "JBUILD_OPTION_JDLS", "JBUILD_OPTION_NOJDP", "JBUILD_OPTION_64BIT", "WIN32", "WIN64"]
},
“system_json” : {
“general” : {
“jbase_data_files” : “c:\\BUILDS\\ZjBASE_development\\jbase_data”,
“system” : “c:\\jbase\\SYSTEM”
}}]}
```

Back to [Profiles](./../jbase-profiles)

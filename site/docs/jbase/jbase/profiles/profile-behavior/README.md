# Profile Behavior

**Created At:** 4/5/2018 4:52:20 PM  
**Updated At:** 4/6/2018 12:57:02 PM  
**Original Doc:** [profile-behavior](https://docs.jbase.com/44253-profiles/profile-behavior)  
**Original ID:** 306592  
**Internal:** No  

## Description

The **JBCRELEASEDIR** environment variable may be used to identify the directory where jBASE is installed. However, if **JBCRELEASEDIR** is not defined, jBASE will determine the directory where it is executing from and internally set **JBCRELEASEDIR** to that location. This occurs before searching for a profile.

Once **JBCRELEASEDIR**has been established, jBASE will search for a JSON configuration profile in the following order:

```
$JBASE_JSON_REPO/jbase_user_<<user name>>.json (UNIX)
%JBASE_JSON_REPO%\jbase_user_<<user name>>.json (Windows)

$HOME/jbase_user.json (UNIX)
%USERPROFILE%\jbase_user.json (Windows)

$JBCRELEASEDIR/config/system.json (UNIX)
%JBCRELEASEDIR\config\system.json (Windows)
```

Once a JSON config profile is located, it is used to configure jBASE. Only the first profile found is used.

If no JSON config profile is found, or if the file is corrupt or otherwise invalid, jBASE environment variables are used to configure jBASE.

If no JSON config profile is found, and the **JBCRELEASEDIR** environment variable is not defined, jBASE will automatically set up a default configuration based on the directory where it is executing from. In this case, a warning will be displayed when starting jBASE, since the default settings may not be the what the user expects. It is recommended that jBASE be configured either using a profile, or by setting appropriate environment variables.

When processing the JSON config profile, jBASE internally sets environment variables based on the settings in the JSON file. If the environment variable corresponding to a particular setting is already defined, the environment variable takes precedence over the JSON config setting. For example, if the **JBCDATADIR** environment variable is set before starting jBASE to **/usr/dbms**, and the JSON config file property **jbase\_data\_files** is set to **/opt/jbase**, the **JBCDATADIR** environment variable is not altered and remains **/usr/dbms**.

Back to [Profiles](./../jbase-profiles)

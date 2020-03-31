# Defaults

**Created At:** 6/8/2018 1:05:10 PM  
**Updated At:** 7/13/2018 10:08:03 AM  
**Original Doc:** [defaults](https://docs.jbase.com/46350-jql/defaults)  
**Original ID:** 321283  
**Internal:** No  

## Alternative Dictionaries

In order to enable dictionary definition records from multiple dictionary files to be used *without* specifying the **USING** connective, an environment variable [JBCDEFDICTS](./../../environment-variables/jbcdefdicts) can be configured for multiple dictionary files.

```
export JBCDEFDICTS=UserDictFile:GeneralDictFile (UNIX)
```

```
set JBCDEFDICTS=CustomDictFile;GeneralDictFile (Windows)
```

The order in which the dictionaries are searched for dictionary definitions is as follows:

1. Dictionary of the file being queried
2. MD/VOC (see JEDIFILENAME\_MD)
3. Files specified by JBCDEFDICTS

Back to [jBASE Query Language (jQL)](jbase-query-language-jql-)

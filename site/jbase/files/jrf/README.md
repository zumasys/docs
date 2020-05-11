# jRF

<PageHeader />

**Tags:**
<badge text='hash files' vertical='middle' />
<badge text='file resize' vertical='middle' />

## Description

The **jrf** utility provides automated facilities to resize and convert from one Hash file type to another. In order to resize the file enough disk space must be available to create a second temporary version of the file, as the resize process creates a temporary file and then copies the data from the original file to the temporary file. Once copied, the temporary file is renamed to the original file.

### Syntax

```
jrf {-options} {{DICT} filename1 {{DICT} filename2 ...}}
jrf {-options} *
```

| Option | Explanation |
| --- | --- |
| \* | Process all files in the current director (ignored if a list of files or a preceding select-list is supplied). |
| **-H3** | Force to HASH3 file type. |
| **-H4** | Force to HASH4 file type. |
| **-H5** | Force to HASHP (jPlus) file type. |
| **-H7** | Force to HASHD (Dynamic) file type (*default if no other file type is specified*). |
| **-C** | Only the restore specification will be set, so that the file is resized automatically when the file is restored. To resize files to a lower modulo requires that the 'D' option also be invoked along with the 'C' option. |
| **-D** | Allow downsize of file. |
| **-E** | Resize empty files. |
| **-I** | Ignore (do not process) empty files. |
| **-L** | Do not transaction log the temporary file created during process. |
| **-Mn** | Allow the hash method to be overridden when resizing the file. In normal operation the default hash method for the file should be used, however the -M option allows experimentation with different hash methods, which may have a small benefit dependent upon the nature of the record key, 'n' specifies the hash method 3,4,5 or 7. |
| **-N** | Decrypt the file. This option has no effect if the file is already decrypted. |
| **-O** | Encrypt (Obfuscate) the file. This option has no effect if the file is already encrypted. |
| **-R** | Reporting only (do not actually resize). Display the suggested resize parameters. |
| **-Sm{,s{,i}}** | Size to parameters    **m** = modulo, **s** = separation, **i** = in group maximum size |
| **-T** | Convert to Case Sensitive |
| **-U** | Convert to Case Insensitive |
| **-V** | Verbose mode |
| **-V1** | Very verbose mode |
| **-h** | **-?** | Display syntax and options |

***\*\*\* Invalid options are ignored \*\*\****

### Notes

- A preceding select-list of file names can be supplied to the **jrf** command.
- If it becomes necessary to resize a file specified by the **JEDIFILENAME\_MD** environment variable then you must unset **JEDIFILENAME\_MD** prior to resizing. The same holds true for the **JEDIFILENAME\_SYSTEM** environment variable.
- The temporary file used during the resize operation is created in the directory that the **jrf** command is run from. Therefore, a file cannot be resized via Q-pointer, F-pointer or **JEDIFILEPATH** access. You must **cd** to the directory where the file exists or specify the full path to the file.
- WARNING: The **jrf** utility should ONLY be executed when users are NOT connected to the database otherwise data loss can occur. In other words, the file should not be opened by another process.

Back to [Files](./../README.md)

<PageFooter />

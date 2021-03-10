# jRF

<PageHeader />

**Tags:**
<badge text='hash files' vertical='middle' />
<badge text='file resize' vertical='middle' />

## Description

The **jrf** utility provides automated facilities to resize and convert from one file type to another. In order to resize the file enough disk space must be available to create a second temporary version of the file; the resize process creates a temporary file and then copies the data from the original file to the temporary file. Once copied, the temporary file is renamed to the original file.

### Syntax

```
jrf {-options} {{DICT} filename1 {{DICT} filename2 ...}}
jrf {-options} *
jrf  -HJBC {-V | -V1} filename
```

| Option | Explanation |
| --- | --- |
| \* | Process all files in the current director (ignored if a list of files or a preceding select-list is supplied). |
| **-H3** \| **-Hj3** | Convert to a HASH3 file type |
| **-H4** \| **-Hj4** | Convert to a HASH4 file type |
| **-H5** \| **-Hjp** | Convert to a HASHP (jPlus) file type |
| **-H7** \| **-Hjd** | Convert to a HASHD (Dynamic) file type (*default if no -H file type is specified*) |
| **-Hjbc** | Convert to a jBC (BASIC Program) file type<br>(All other options are ignored except -V or -V1) |
| **-Hmongo** | Convert to a Mongo file type |
| **-C** | Only the restore specification will be set, so that the file is resized automatically when the file is restored. To resize files to a lower modulo requires that the 'D' option also be invoked along with the 'C' option |
| **-D** | Allow downsize of file |
| **-E** | Resize empty files |
| **-I** | Ignore (do not resize) empty files |
| **-K** | Skip files that are the same -H*filetype*<br>This is particularly useful when used in combination with `*` or `-X` |
| **-L** | Do not transaction log the temporary file created during process. |
| **-Mn** | Allow the hash method to be overridden when resizing the file. In normal operation the default hash method for the file should be used, however the -M option allows experimentation with different hash methods, which may have a small benefit dependent upon the nature of the record key, 'n' specifies the hash method 3,4,5 or 7. |
| **-N** | Decrypt the file. This option has no effect if the file is already decrypted |
| **-O** | Encrypt (Obfuscate) the file. This option has no effect if the file is already encrypted |
| **-R** | Reporting only (do not actually resize). Display the suggested resize parameters |
| **-Sm{,s{,i}}** | Size to parameters    **m** = modulo, **s** = separation, **i** = in group maximum size |
| **-T** | Convert to Case Sensitive |
| **-U** | Convert to Case Insensitive |
| **-V** | Verbose mode |
| **-V1** | Very verbose mode |
| **-X** | Process all files in the current directory and all sub-directories recursively |
| **-h** \| **-?** | Display syntax and options |

***\*\*\* Invalid options are ignored \*\*\****

### Notes

- Options are case insensitive, e.g. `-HJD` is the same has `-hjd` or `-Hjd`
- A preceding select-list of file names can be supplied to the **jrf** command.
- If it becomes necessary to resize the file specified by the **JEDIFILENAME\_MD** environment variable then you must unset **JEDIFILENAME\_MD** prior to resizing. The same holds true for the **JEDIFILENAME\_SYSTEM** environment variable.
- The temporary file(s) used during the resize operation is created in the directory from where the **jrf** command is run. Therefore a file cannot be resized via Q-pointer, F-pointer or **JEDIFILEPATH** access; you must **cd** to the directory where the file exists or specify the full path to the file.
- If the `-HJBC` option is specified, it superceeds all other options and only one file can be converted at a time.
- Options  `-HJBC`, `-Hmongo`, `-K` and `-X` are only available on jBASE 5.8 forward.

## Warning

>The **jrf** utility should ONLY be executed when users are not connected to the database otherwise data loss can occur. In other words, the file should not be opened by another process.

>It is recommended to have a current backup before running **jrf**.

Back to [Files](./../README.md)

<PageFooter />

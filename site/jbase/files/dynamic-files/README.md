# Dynamic Files

<PageHeader />

**Tags:**
<badge text='resize' vertical='middle' />
<badge text='auto resize' vertical='middle' />
<badge text='no maintenance' vertical='middle' />
<badge text='dynamic' vertical='middle' />
<badge text='resilient' vertical='middle' />
<badge text='jr' vertical='middle' />
<badge text='jrscan' vertical='middle' />

## Description

This new file type allows jBASE files to be created without specifying a size (modulo, separation, secondary size).  The file will dynamically resize itself as the data in the file grows, and it achieves this transparently and without any pauses that are often associated with other dynamic files.  

A CLEAR-FILE operation will return the file to its original size.

The performance of these new dynamic files is at least as good as existing jBASE file types, and in some instances can be significantly quicker. The disc usage of dynamic files is typically no more than 10% greater than any other jBASE file type.

The format is simple:

```
fbcentos-~: create-file DEMO
[ 417 ] File DEMO]D created , type = JD
[ 417 ] File DEMO created , type = JD
fbcentos-~: ls -l DEMO*
-rw-rw-r-- 1 gregc gregc 32768 Dec  1 12:04 DEMO
-rw-rw-r-- 1 gregc gregc 32768 Dec  1 12:04 DEMO]D
```

Just omit all of the size parameters and jBASE will default to a Dynamic File instead of the usual default of P (jPlus) files.

An alternate way to create dynamic files is using **TYPE=HASHD** or **TYPE=JD** as below, in which case we ignore all of the size parameters, e.g. modulo, separation, secondary size.

```
fbcentos-~: create-file DEMO 1 23 TYPE=HASHD
[ 417 ] File DEMO]D created , type = JD
[ 417 ] File DEMO created , type = JD
```

A final way to use dynamic files is to set the **JEDI\_PREFILEOP** environment variable as shown below, in which case this forces the **TYPE=JD** to be added to all **create-file** commands, thus over-riding the usual default of jPlus files and ignoring any modulo/separation provided.

```
fbcentos-~: export JEDI_PREFILEOP=TYPE=HASHD
fbcentos-~: create-file DEMO 1 23
[ 417 ] File DEMO]D created , type = JD
[ 417 ] File DEMO created , type = JD
```

### Note
>
> Effective as of jBASE 5.7.1, all files in an account can be converted to Dynamic by issuing this command: [**jrf**](./../jrf) **-E \***  
>  
> Dynamic files do not shrink automatically when items are purged. The only way to shrink a dynamic file is via the use of CLEAR-FILE

Return to [Files](./../jbase-files)

<PageFooter />

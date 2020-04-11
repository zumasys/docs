# Using Subroutine in Index Definitions

<PageHeader />

**Tags:**
<badge text='subroutines' vertical='middle' />
<badge text='file indexing' vertical='middle' />

## Description

It is possible to call a jBC subroutine from an index definition. The subroutine should have five parameters as follows:

| Parameter | Description |
| --- | --- |
| Result | This is to return the result of the calculation. |
| Filevar | File variable of file for which the update is being processed. |
| Record | Record being updated. |
| Key | Record key of the record being updated. |
| Field | Field, or attribute, already extracted as part of the index definition |

As an example, consider the following index creation

```
jsh --> CREATE-INDEX FILENAME INDEXNAME BY 1 : CALL(2,"INDEX-DEF")
```

When an update occurs the index key is calculated by taking attribute 1 and concatenating it with the output from a call to a subroutine called INDEX-DEF. The source code for this may look something like this:

INDEX-DEF

```
SUBROUTINE INDEX-DEF(result , file , record , key , field )
IF NUM(field) THEN result = "*1" ELSE result = "*0"
result := record<3>
RETURN
```

In the above example the result is created in the first parameter, the "result" variable. This is calculated by taking the string "\*1" or "\*0" and concatenating it with attribute 3 from the record being updated. The choice of "\*1" or "\*0" depends upon whether the extracted attribute, passed in the fifth parameter as variable "field" , is numeric or not. The index definition was "CALL(2,"INDEX-DEF")" so this extracted attribute will be attribute 2.

Any normal jBC code will execute in these subroutines but note that:

- The code should always create exactly the same result given the same record. This means avoiding the use of functionality that creates a variable value, such as the RND() function, the TIME() or DATE() functions , the users port number and so on. If this occurs then there will be no way jBASE can delete a changed index value and so the index file will continually grow with invalid data even if the number of records remain constant.
- These subroutines will be called implicitly from other running jBC code which to its knowledge has merely executed a DELETE or WRITE statement. Any code that changes the nature of the environment such as using the default select list, turning echo on or off, turning the break key on or off should be avoided. There are ways around many of these, for example turning the echo on and off so long as the code remembers in all cases to restore it to its original status., or a SELECT to a local variable rather than the default select list.
- Depending upon the application, these subroutines may need to be accessed by users other than the account in which the files exist. Therefore all persons who have access to OPEN and update the file must also have access to be able to CALL this subroutine.

This can be done in a number of ways:

1. All users who are to update the file may have the environment variable JBCOBJECTLIST set to include the library where these subroutines were catologed into. For instance if the subroutines have been cataloged from account 'greg' then set up the JBCOBJECTLIST as follows so that failing to find the subroutine in the user's current lib directory, will look in the lib directory for greg (this from the Korn shell)

```
export JBCOBJECTLIST=$HOME/lib:~greg/lib
```

2. CATALOGing into a directory that is common to all users. Such as directory is the lib directory where jBASE is installed. In this example, there is no need to set up JBCOBJECTLIST. However, there is need to re-catalog all these subroutines when a new version of jBASE is loaded. The output directory for CATALOG may be altered with the JBCDEV\_LIB environment variable. For example, from the Unix Korn shell:

```
export JBCDEV_LIB=$JBCRELEASEDIR/lib
CATALOG BP INDEX-DEF
```

Back to [Indexes](./../README.md)

  
<PageFooter />

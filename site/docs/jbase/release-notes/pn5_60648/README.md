# PN5_60648

**Created At:** 3/11/2019 12:35:19 PM  
**Updated At:** 3/11/2019 1:03:24 PM  
**Original Doc:** [pn5_60648](https://docs.jbase.com/release-notes/pn5_60648)  
**Original ID:** 370968  
**Internal:** No  


### Description

Stale header data in JP files (Error number 2017)

### Previous Release Behavior

The reason Error 2017 occurs is because the header in the group is stale. We keep a track of the **update number**, which is used for consistency. In a group with 4 frames, one frame may have an invalid update number showing it was stale information.



### Current Release Behavior

This is not exactly a fix but more of an explanation as to why the error occurs and what you can do about it.

The header in a group can become stale and we keep track of the update number, which is used for consistency.

When the inconsistency occurrs, it exhibits itself with error number 2017. By setting the environment variable **JEDI\_IGNORE\_UPDATE\_NO=1**. the error is ignored.

This allows files to continue without a problem, but the data inside could be stale. It also means that a user can COPY the data to a new file, but with the knowledge they may have lost updates.

What can be done is to make a fresh copy of the file like this:

```
a) Make sure no users are accessing the file.

b) Change to the directory/accounnt that contains the file.

c) Create a temporary file:
    create-file tempfile 1 97
    Note: Create an appropriate size for the temporary file.

d) Set the work-around environment variable:
    export JEDI_IGNORE_UPDATE_NO=1    [Linux]
    set JEDI_IGNORE_UPDATE_NO=1       [Windows]

e) Copy the items to the temporary file

f) Delete the original file and rename the temporary file to the real actual file name
```

By setting the environment variable **JEDI\_IGNORE\_UPDATE\_NO**, we ignore that error on the new file. This allows files to continue without a problem, but the data inside could be stale.

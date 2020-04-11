# GETUSERGROUP

**Created At:** 9/6/2017 1:47:12 PM  
**Updated At:** 1/5/2018 1:50:52 PM  
**Original Doc:** [276069-getusergroup](https://docs.jbase.com/36868-jbase-basic/276069-getusergroup)  
**Original ID:** 276069  
**Internal:** No  

## Description

For UNIX, the jBC function **GETUSERGROUP** returns the group number for the user ID specified by @uid. It takes the general form:

```
 GETUSERGROUP(uid)
```

An example of use is the assignment of the user group to a variable as:

```
var_Group = GETUSERGROUP(@UID)
CRT "My user group is : " : var_Group
```

which, depending on your UNIX system, might display :

```
My user group is : 1000
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />

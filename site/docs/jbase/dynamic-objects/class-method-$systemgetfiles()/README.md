# Class Method: $system::getfiles()

**Created At:** 4/5/2018 1:45:57 PM  
**Updated At:** 10/5/2018 2:08:22 PM  
**Original Doc:** [class-method-system-getfiles](https://docs.jbase.com/42948-dynamic-objects/class-method-system-getfiles)  
**Original ID:** 306496  
**Internal:** No  

## Description

The **getfiles()** method creates a sub-object of all files visible to the **JEDIFILEPATH** environment variable or defined as Q- or F-pointers in the MD/VOC provided **JEDIFILENAME\_MD** is defined.

Files in the current directory are also included by default.

An optional parameter can filter out a specific file.

The sub-object contains 2 properties:

**filepath** - an array of the search paths for files

**files** - an array of sub-objects where each sub-object has the following properties:

**fullpath** - the full path to the file

**directory** - the directory containing the file

**name** - the file name

**index** - the position the file is found in the **filepath** property; this is number is zero-based

## Return Value

The total number of files found.

## Examples

Display everything:

```
equ beautify to 5
my_system = new object("$system")
my_system->getfiles()
crt my_system->$tojson(beautify)
```

Display a single file:

```
equ beautify to 5
my_system = new object("$system")
my_system->getfiles("JDEMO")
crt my_system->$tojson(beautify)
```

Result:

```
{
    "filepath":[
        "C:\\jbase\\globals\\MD",
        "C:\\home\\testfiles",
        "."
    ],
    "files":[
        {
            "fullpath":"C:\\home\\testfiles\\JDEMO",
            "directory":"C:\\home\\testfiles",
            "name":"JDEMO",
            "index":1
        }
    ]
}
```

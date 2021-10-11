# ITYPE

<PageHeader />  

## Description

The **ITYPE** function returns the value resulting from the evaluation of an I-type expression in a jBASE file dictionary. It takes the general form:

```
ITYPE (i.type)
```

Where:

**i.type** is an expression evaluating to the contents of the compiled I-descriptor.

[comment]: <> (The Idescriptor must be compiled before the **ITYPE** function uses it; otherwise, a run-time error message results.)

Using one of several methods, set **i.type** to the evaluated I-descriptor.  
One way is to read the I-descriptor from a file dictionary into a variable, then use the variable as the argument to the **ITYPE** function.  
If the I-descriptor references a record ID, the current value of the system variable **@ID** is used.  
If the I-descriptor references field values in a data record, the data is taken from the current value of the system variable **@RECORD**.

To assign field values to **@RECORD**, read a record from the data file into **@RECORD** before invoking the ITYPE function.

If **i.type** evaluates to null, the **ITYPE** function fails and the program terminates with a run-time error message.

## Note

> Set **@FILENAME** to the name of the file before **ITYPE** execution.  
> Note also that this function should be able to evaluate regular "A/S" and "D" type dictionary items.

## Example

Here is a complete example:

```
*
* Tear-down and set-up
*
    fileName = 'WORK'
    EXECUTE "DELETE-FILE " : fileName
    EXECUTE "CREATE-FILE " : fileName   ;* Assume Type = jD
    OPEN fileName TO f.Name ELSE ABORT 201, fileName
    OPEN "DICT", fileName TO d.Name ELSE ABORT 201, "DICT " : fileName
* DICT item for attribute 1
    dictRec = ""
    dictRec<1> = "D"
    dictRec<2> = "1"
    dictRec<5> = "25L"
    dictRec<6> = "S"
    WRITE dictRec ON d.Name, 'Footwear'
*
* DICT item for I-descriptor
    dictDesc = "Description"
    dictRec = ""
    dictRec<1> = "I"
    dictRec<2> = "Footwear[@VM, 1, 1] : ', size ' : Footwear[@VM, 2, 1]"
    dictRec<4> = dictDesc
    dictRec<5> = "25T"
    dictRec<6> = "S"
    WRITE dictRec ON d.Name, dictDesc
*
* Data items
    dataRec = ""
    dataRec<1> = "slippers" : @VM : "8"
    WRITE dataRec ON f.Name, 'Jim'
    dataRec = ""
    dataRec<1> = "boots" : @VM : "10"
    WRITE dataRec ON f.Name, "Greg"
    dataRec = ""
    dataRec<1> = "slippers" : @VM : "5"
    WRITE dataRec ON f.Name, "Alan"
*
* Set-up is complete, now to process the data
*
    @FILENAME = fileName
    READ itypeRec FROM d.Name, dictDesc ELSE ABORT 202, "DICT " : fileName : ", " : dictDesc
*
    SSELECT f.Name TO footwearList
    LOOP
        READNEXT itemID FROM footwearList ELSE BREAK
        @ID = itemID
        READ @RECORD FROM f.Name, @ID ELSE ABORT 202, fileName : ", " : itemID
        itypeResult = ITYPE(itypeRec)
        CRT @ID : " wears " : itypeResult
    REPEAT
*
END
```

The output of this program is:

```
[ 417 ] File WORK]D created , type = JD
[ 417 ] File WORK created , type = JD
Alan wears slippers, size 5
Greg wears boots, size 10
Jim wears slippers, size 8
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />

# SUBLISTS - V CODE

<PageHeader />

**Tags:**
<badge text='sublist' vertical='middle' />
<badge text='file' vertical='middle' />
<badge text='data definition' vertical='middle' />

## Description

File records which contain sublists can be accessed with the COUNT and LIST commands and the WITHIN modifier. For the commands and the modifier to function properly, the V processing code must be included in field 8 of the file definition record. See the File Specifiers topic in the jQL Command Sentence Construction topic for more details.

This can be done as:

```
V;;field-no
```

where **field-no** is the number of the field which contains the sublist.

### Example

Consider the STOCK file used by a camera factory where each data record can represent either an assembly or a component part.

Take as an example the record set that defines a simple camera assembly. The data records contain the following data:

```
    A1
001 Camera Assy
002 A21]A22]A23
003 10

    A21
001 Lens Assy
002 A210]A211
003 15

    A22
001 Body
002
003 10

    A23
001 Shutter Assy
002 A230]A231
003 11

    A210
001 Optics
002
003 19

    A211
001 Barrel
002
003 21

    A230
001 Iris Mech
002
003 13

    A231
001 Iris Housing
002
003 14

```

The key is the part number, field 1 contains the description, field 2 is a multivalued list of components that go to make up the part, and field 3 is the current stock level.

Record A1 represents assembled cameras. It points to the sub-assemblies (A21, A22 and A23) that are used to make each camera. The sub-assemblies in turn point to their component parts; A21 points to A210 and A211, A22 does not have any components, and A23 points to A230.

Having established the logical data relationships, we now need to ensure that the system understands that field 2 is a multivalued sublist. We do this by updating field 8 in the file definition record to read "V;;2", like this:

```
STOCK
001 D
002
003
004
005
006
007
008 V;;2
009 L
010 10
```

Now all we need to do is to create three [data definition records](./../data-definition-records-and-dictionary-structure/README.md) in the dictionary of STOCK - one for each field. We will name them DESC, COMPONENTS, and QTY.

The final step is to issue a COUNT or LIST command which uses the WITHIN modifier:

```
:LIST WITHIN STOCK "A1" DESC COMPONENTS QTY
PAGE 1 Time Date
LEVEL STOCK Description.... Components Qty

1     A1    CAMERA ASSY     A21         10
                            A22
                            A23
2     A21   LENS ASSY       A210        15
                            A211
3     A210  OPTICS                      19
3     A211  BARREL                      21
2     A22   BODY                        10
2     A23   SHUTTER ASSY    A230        11
                            A231
3     A230  IRIS MECH                   13
3     A231  FILM MECH                   14
8 RECORDS LISTED
```

Back to [jQL](./../README.md)
  
<PageFooter />

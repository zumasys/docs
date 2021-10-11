# SUBLISTS - V CODE

<PageHeader />

**Tags:**
<badge text='sublist' vertical='middle' />
<badge text='file' vertical='middle' />
<badge text='data definition' vertical='middle' />

## Description

File records which contain sublists can be accessed with the COUNT and LIST commands and the WITHIN modifier. For the commands and the modifier to function properly there are two methods both of which can be utilized in the file definition or the dictionary definition keyed by the filename.

1. The V processing code in attribute <8>.
2. Place the field-no in attribute <6>

See the File Specifiers topic in the jQL Command Sentence Construction topic for more details.

**MD/VOC STOCK**
```
001 F
002 STOCK
003 STOCK]D
004
005
006
007
008 V;;2
```

where **2** is the number of the field which contains the sublist.

Alternative method:
```
001 F
002 STOCK
003 STOCK]D
004
005
006 2
```

The same methodology applies to Q pointers.

Alternatively you can use the dictionary (e.g. if you don't rely on MD/VOC for file access):

**DICT STOCK STOCK**
```
001 D
002 0
003 
004 Stock
005 6R
006 S
007
008 V;;2
```

```
001 A
002 0
003 Stock
004
005
006 2
007
008
009 R
010
```

### Example

Consider the STOCK file used by a camera factory where each data record can represent either an assembly or a component part.

Take as an example the record set that defines a simple camera assembly. The data records contain the following data:

| <!----> | <!----> |
| --- | --- |
| Key                                         A1<br>001                                        Camera Assy<br>002                                        A21]A22]A23<br>003                                        10  | Key                                      A21<br>001                                      Lens Assy<br>002                                      A210]A211<br>003                                      15  |

| <!----> | <!----> |
| --- | --- |
| Key                                        A22<br>001                                       Body<br>002                                      <br>003                                       10 | Key                                      A23<br>001                                     Shutter Assy      <br>002                                     A230]A231  <br>003                                     11 |

| <!----> | <!----> |
| --- | --- |
| Key                                         A210<br>001                                        Optics<br>002                                        <br>003                                        19 | Key                                      A211<br>001                                      Barrel<br>002<br>003                                      21 |

| <!----> | <!----> |
| --- | --- |
| Key                                        A230<br>001                                        Iris Mech<br>002<br>003                                        13 | Key                                          A231<br>001                                          Iris Housing<br>002      <br>003                                          14                                 |

The key is the part number, field 1 contains the description, field 2 is a multivalued list of components that go to make up the part, and field 3 is the current stock level.

Record A1 represents assembled cameras. It points to the sub-assemblies (A21, A22 and A23) that are used to make each camera. The sub-assemblies in turn point to their component parts; A21 points to A210 and A211, A22 does not have any components, and A23 points to A230.

Having established the logical data relationships, we now need to ensure that the system understands that field 2 is a multivalued sublist. We do this by updating field 8 in the file definition record to read "V;;2",
like this:

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

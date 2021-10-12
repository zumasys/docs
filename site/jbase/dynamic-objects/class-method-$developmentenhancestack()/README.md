# Class Method: $development::enhancestack()

<PageHeader />

## Description

The **enhancestack()** method will convert the array passed from $system::userstats()->stack into source file names and line numbers.

## Syntax

```
$development::enhancestack(stackname, {newdir})
$development->enhancestack(stackname, {newdir})
```

## Arguments

| Argument | Description |
| --- | --- |
| stackname | Name of variable containing the C stack to be enhanced|
| newdir    | Opional string containing the name of an alternative directory into which the enhanced stack should be written.<br>Default would be the library folder where the stack was first created. |


## Return value

Any array of surce file name and line numbers 

## Example

```
sys = new object("$system")
cstack = sys->userstats()->cstack
crt cstack->$tojson(1)
**
newdir = "/dbms/testing/lib"
obj2 = $development->enhancestack(cstack,newdir)
crt obj2->$tojson(1)

```

Result:

```json
[
        "0x7f87d53d25c4: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(JLibADiagnosticsGetCStack+0x56) [0x7f87d53d25c4]",
        "0x7f87ca817652: /home/mikes/5.0_rels/jbcdevdevelopment/lib/libclasses.so(JBCM__$system__userstats__V+0x1a3c) [0x7f87ca817652]",
        "0x7f87d533870e: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(+0xa270e) [0x7f87d533870e]",
        "0x7f87d5334615: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(jObjectMethodN+0x10b) [0x7f87d5334615]",
        "0x7f87cacdacc0: /data/SandBox/bin/enhancestack.test.so(jBASEMainFunctionPointer+0x16b) [0x7f87cacdacc0]",
        "0x7f87d53e27f5: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(+0x14c7f5) [0x7f87d53e27f5]",
        "0x7f87d53dee6c: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(JBASEUserObjectPerformRun+0x19ac) [0x7f87d53dee6c]",
        "0x7f87d53e5f3d: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(+0x14ff3d) [0x7f87d53e5f3d]",
        "0x7f87d53e5c27: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(JLibCPERFORM_IIBBBBBBB+0x23c) [0x7f87d53e5c27]",
        "0x7f87caaada6f: /home/mikes/5.0_rels/jbcdevdevelopment/bin/jed.so(jBASEMainFunctionPointer+0x1ed45) [0x7f87caaada6f]",
        "0x7f87d53e27f5: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(+0x14c7f5) [0x7f87d53e27f5]",
        "0x7f87d53dee6c: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(JBASEUserObjectPerformRun+0x19ac) [0x7f87d53dee6c]",
        "0x7f87d53e5f3d: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(+0x14ff3d) [0x7f87d53e5f3d]",
        "0x7f87d53e5c27: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(JLibCPERFORM_IIBBBBBBB+0x23c) [0x7f87d53e5c27]",
        "0x7f87caefc254: /home/mikes/5.0_rels/jbcdevdevelopment/bin/jsh.so(+0x1f254) [0x7f87caefc254]",
        "0x7f87caefb69c: /home/mikes/5.0_rels/jbcdevdevelopment/bin/jsh.so(ExecuteCommand+0x10f6) [0x7f87caefb69c]",
        "0x7f87caee1acd: /home/mikes/5.0_rels/jbcdevdevelopment/bin/jsh.so(jBASEMainFunctionPointer+0xeb3) [0x7f87caee1acd]",
        "0x7f87d53e27f5: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(+0x14c7f5) [0x7f87d53e27f5]",
        "0x7f87d53dcd78: /home/mikes/5.0_rels/jbcdevdevelopment/bin/../lib/libjbase.so(JBASEUserObjectRun+0x8fc) [0x7f87d53dcd78]",
        "0x4033e7: LOGTO() [0x4033e7]",
        "0x7f87d1506555: /lib64/libc.so.6(__libc_start_main+0xf5) [0x7f87d1506555]",
        "0x401249: LOGTO() [0x401249]"
]
[
        {"To be supplied"}
]

```

## Notes

In order to to illustrate the ability to obtain line numbers, this example was tested on a system where the jBASE release was built with debug information.

Back to [$development Class](./../class-$development/README.md)

<PageFooter />
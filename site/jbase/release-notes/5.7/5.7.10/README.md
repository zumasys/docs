# jBASE 5.7.10 Release notes

<PageHeader />

This release includes various internal bug fixes and the following enhancements and patches:

## Patches

- [PN753](./pn753/README.md) - jBC: A date conversion on large integer causes segmentation violation  
- [PN978](./pn978/README.md) - Compiler: Variables with trailing periods  
- [PN1005](./pn1005/README.md) - Incorrect permissions on the runtime-errors file  
- [PN1010](./pn1010/README.md) - jQL: Index mismatches dictionary justification  
- [PN1011](./pn1011/README.md) - jQL: Exploded sort with BREAK-ON not displaying a translated single valued attribute  
- [PN1013](./pn1013/README.md) - jQL: Allow ID output to be truncated to the width defined in the dictionary
- [PN1014](./pn1014/README.md) - jQL: Incorrect results from sorting right-justified alphanumeric data  
- [PN1034](./pn1034/README.md) - jQL: A-correlative sum function ignored in math operations  

## Notes

>If you are running with a variant of our **D3** emulation (or any custom emulation based on a standard one) then, in order to obtain updates to the base emulation, we strongly recommend to change your emulation settings to something similar to, for example, the following:

```
jbased3:
   dup = d3
   named_common = unassigned
   md_int_only = true
   md_int_only_emulate_jbase3 = true
```

>In this example, the **dup = d3** entry will inherit all configuration options in the **d3** section.  
>If the **d3** section contains any **dup** entries then they will also be inherited, and so on.  
>All other configuration settings below the **dup** line are either new or will override the inherited setting.  
>
>This will ensure that you continue to make use of any changes made to the standard **D3** emulation.  
>
>The modifications you employ may be different that those above.  
>
>Use the **config-strings** command to review your configuration.

## New Features

[New Locking Models](../../../../jbase/record-locking/locking-models/README.md)

[Debugger enhancement](../../../../jbase/debugger/jbc-debugger-commands/README.md) - The `q` command: Quiting out of jBC programs

[Back to 5.7.x Release Notes](./../README.md)
  
<PageFooter />

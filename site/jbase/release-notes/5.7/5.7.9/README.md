# jBASE 5.7.9 Release notes

<PageHeader />

This release includes various internal bug fixes and the following enhancements and patches:

## Patches

- [PN720](./PN720/README.md) - jQL: Memory Leak creating an index with an A-correlative.  
- [PN779](./pn779/README.md) - jQL - Query using range criteria on right-justified dictionaries with alphanumeric values does not sort correctly.  
- [PN797](./pn797/README.md) - jQL: ACCESS(6) is not being updated for each value when using BY-EXP.  
- [PN810](./pn810/README.md) - jQL: A Sum operation of an A or F correlative operates on the entire attribute when it should be operating on each multi-value and, depending on the emulation, each sub-value.  
- [PN811](./pn811/README.md) - jQL: Erroneous text appears on BREAK-ONE line.  
- [PN812](./pn812/README.md) - jQL: Dictionary subroutine not operating on sub-values.
- [PN813](./pn813/README.md) - jQL: Math operations in D3 emulation should treat null as 0.  
- [PN818](./pn818/README.md) - jQL: Listing multi-valued/sub-valued data returns the wrong delimiters
- [PN828](./pn828/README.md) - jQL: In D3 emulation, underlining of BREAK-ON totals is the default.  
- [PN845](./pn845/README.md) - jQL: Conversion is processed in a named-attribute.  
- [PN846](./pn846/README.md) - jQL: A query involving F and A correlatives with an attribute pointing to a sub-value list hangs.  
- [PN882](./pn882/README.md) - jQL: BREAK-ON issue when only one detail line [D3 emulation].  
- [PN884](./pn884/README.md) - jQL erroneously repeating multi-values.  
- [PN885](./pn885/README.md) - jBC: Output of BASIC command different on Windows vs Linux.  
- [PN886](./pn886/README.md) - jQL: Calling subroutine on attribute 7 returns incorrect value.  
- [PN887](./pn887/README.md) - jQL: Problem with **SELECT** and controlling attributes.  
- [PN892](./pn892/README.md) - jQL: access(6) not returning the correct value in D3 emulation.  
- [PN895](./pn895/README.md) - jQL: BY-EXP sort is case sensitive.  
- [PN896](./pn896/README.md) - New option for jdiag to append config-strings information to jdiag.out.  
- [PN906](./pn906/README.md) - Add the ability to temporarily run a program as unlicensed.
- [PN911](./pn911/README.md) - "&SAVEDLISTS&" argument not accepted by PROC/U01AD.  
- [PN967](./pn967/README.md) - jQL: Exploded sort causes single value data issue.  
- [PN976](./pn976/README.md) - jQL: BREAK-ON totals accumulate.  
- [PN980](./pn980/README.md) - jQL: Nulls are converted to zero when using a substring in A/F correlatives
- [PN985](./pn985/README.md) - Make **end** a synonym of **clearselect**  

## Notes

>There have been several new configuration options added to the **D3** emulation.  
>If you are running with a variant of our **D3** emulation (or any custom emulation based on a standard one), then the best way forward would be to change your emulation settings to something similar to, for example, the following:

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

## New Commands

- [END](./../../../utilities/clearselect/README.md)

[Back to 5.7.x Release Notes](./../README.md)
  
<PageFooter />

# Installation Guides

<PageHeader />

## Topics

[AIX](./aix/jbase-aix-installation-guide/README.md)  
[Linux](./linux/linux-installation-guide/README.md)  
[Windows](./windows/README.md)  
* * *
[Licensing](./licensing/README.md)  
* * *
[Platform Availability](./platform-availability/README.md)  
* * *
[Upgrading from a Previous Version](./upgrading-from-a-previous-version/README.md)  

## Note

>There have been several new configuration options added to our **D3** emulation.  
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

* * *

[Back to Administration](./../README.md)

<PageFooter />

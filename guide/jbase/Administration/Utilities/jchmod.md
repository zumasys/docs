# jchmod

**Created At:** 7/6/2018 12:12:02 PM  
**Updated At:** 7/7/2018 7:45:33 AM  


## Description 

The **jchmod**utility provides a mechanism to modify Hash file parameters. The -L and +L options will also affect operating system level directory files.

## Syntax

```
jchmod -Options +Options Filename
```

## Options:


| Option<br> | Explanation<br> |
| --- | --- |
| -t<br> | Tabulate description about the file<br> |
| -B<br> | Remove backup of file using jbackup<br> |
| -C<br> | Remove control file usage flag<br> |
| -J<br> | Remove journaled file updates<br> |
| -L<br> | Remove logging the file<br> |
| -M<br> | Disable monitoring the file (Audit Logging)<br> |
| -N<br> | Remove the network friendly flag<br> |
| -R<br> | Remove resize specification<br> |
| -S<br> | Remove secure mode updates (j3 only)<br> |
| -T<br> | Remove transaction boundary support<br> |
| +A<br> | Auto-detect if a file is network friendly<br> |
| +B<br> | Add backup of file using jbackup<br> |
| +C<br> | Add control file usage flag<br> |
| +J<br> | Add journaled file updates<br> |
| +L<br> | Add logging the file<br> |
| +M<br> | Enable monitoring the file (Audit Logging)<br> |
| +N<br> | Add the network friendly flag<br> |
| +S<br> | Add secure mode updates (j3 only)<br> |
| +T<br> | Add transaction boundary support<br> |
| +Rspec<br> | Add restore spec , used during jrestore<br> |


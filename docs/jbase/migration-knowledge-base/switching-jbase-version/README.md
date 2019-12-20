# Switching jBASE Version

**Created At:** 8/11/2017 6:50:00 PM  
**Updated At:** 8/11/2017 7:06:55 PM  


To switch between releases you need to follow these steps(the new alpha has already been installed):

1. Make sure everyone is off the system

2. Switch the symbolic link to use the new alpha release:



e.g.

```
drwxrwxrwx 11 zumasys jbase 4096 Aug  9 18:30 .
drwxr-xr-x. 4 root    root    71 Nov  5  2016 ..
drwxrwx--- 19 zumasys jbase 4096 Sep  7  2016 5.5.0
drwxrwx--- 20 zumasys jbase 4096 Oct  3  2016 5.5.1
drwxrwx--- 19 zumasys jbase 4096 Nov 21  2016 5.5.2
drwxrwx--- 20 zumasys jbase 4096 Aug  8 19:25 5.6.0
lrwxrwxrwx   1 zumasysjbase    5 Aug  9 18:30 CurrentVersion -> 5.6.0
drwxrwxrwx  2 root    root    44 Apr 17 16:33 databases
drwxrwx---  20 zumasys jbase 4096Aug  9 12:30 jBASEforCONV
drwxrwx--- 19 zumasys jbase 4096 Apr  5  2016 jBASEforSHIMS.20170324_125506
drwxrwx--- 21 zumasys jbase 4096 Mar 24 12:55 jBASEforSHIMS.20170804_151251
drwxrwx--- 21 zumasys jbase 4096 Aug  4 15:12 jBASEforSHIMS.20170808_190659
 
ln-s jBASEforCONV CurrentVersion
```



3. Reboot

4. Reverse to set back to 5.6.0

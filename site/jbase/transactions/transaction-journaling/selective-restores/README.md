# Selective Restores

<PageHeader />

There may be times when a selective restore is preferable to a full restore. This cannot be automated and must be judged on its merits.  

For example, assume you accidentally deleted it a file called CUSTOMERS. In this case you would probably want to log users off while it is restored, while certain other files may not require this measure. The mechanism to restore the CUSTOMERS file would be to selectively restore the image taken by a jbackup and then restore the updates to the file from the logger journal. For example:  

```
# jrestore –h ‘/JBASEDATA/PROD/CUSTOMERS*’ < /dev/rmt/0
# cd /tmp
# create-file TEMPFILE TYPE=TJLOG set=current terminate=eos
[ 417 ] File TEMPFILE]D created , type = J4
[ 417 ] File TEMPFILE created , type = TJLOG
# SELECT TEMPFILE WITH PATH EQ \/JBASE_ACCOUNTS/PROD/CUSTOMERS]\
21 Records Selected

# jlogdup input set=current output set=database
```

If required, use the jlogdup rename and renamefile options to restore the data to another file.  

## Note

>In order to preserve the chronological ordering of the records do not use a SSELECT command on the time field. This may not produce the correct ordering (multiple entries can occur during the same time period – the granularity being one second).  

[Next Page](./../failure-recovery/README.md)

Back to [Transaction Journaling](./../README.md)

<PageFooter />

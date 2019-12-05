# Considerations for Distributed Files

Description  Although jBASE does not restrict directly populating part files, records should always be written through the distributed file stub. Be aware that if a record is placed in the wrong part file, and that record is subsequently handled through the partition algorithm, it will be placed in the part file according to the partition algorithms  

**Created At:** 9/14/2018 12:21:36 PM  
**Updated At:** 10/31/2018 8:14:05 AM  

**Tags:**
<badge text='distributed files' vertical='middle' />

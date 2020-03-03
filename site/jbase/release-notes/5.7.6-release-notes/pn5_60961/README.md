# PN5_60961

**Created At:** 1/14/2020 10:29:31 AM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60961](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60961)  
**Original ID:** 516417  
**Internal:** No  


### Description

Add milestones to jlogdup.

### Previous Release Behavior

Due to unidirectional nature of jlogdup, it is messy to accurately know, from the sender's side, the progress (timestamp) of the receiving side, when jlogdup needs to be restarted.



### Current Release Behavior

Using reverse channel of socket connection, receiving side periodically sends the timestamp of the last record processed to the sender. Sender records this progress in a milestone file, which can be used to set the start time upon restart.

# PN5_60961

<PageHeader />

## Description

Add milestones to jlogdup.

### Previous Release Behavior

Due to unidirectional nature of jlogdup, it is messy to accurately know, from the sender's side, the progress (timestamp) of the receiving side, when jlogdup needs to be restarted.

### Current Release Behavior

Using reverse channel of socket connection, receiving side periodically sends the timestamp of the last record processed to the sender. Sender records this progress in a milestone file, which can be used to set the start time upon restart.

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)

  
<PageFooter />

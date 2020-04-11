# PN5_60605

<PageHeader />

## Description

The jBASE **who** command conflict with Unix/Linux 'who'

### Previous Release Behavior

Running the 'who' command would always run the jBASE version regardless of what shell the user is in.

This was due to the installer placing $JBCRELEASEDIR/bin before /usr/bin.

### Current Release Behavior

The 'who' command now runs as expected from within the jShell and OS shells.

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />

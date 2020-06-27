# PN5_60634

<PageHeader />

## Description

Distributed files give a "DISTRIB: Reentrant call to Jedi Distributed file driver" message.

### Current Release Behavior

Prior  to this patch, when a program exited the message "DISTRIB: Reentrant call to Jedi Distributed file drive" would be seen on the screen.

This occurred when:

1. more than one distributed files was opened
2. the program exited
3. the file cache closed

Back to [5.6.3 release Notes](./../README.md)

<PageFooter />

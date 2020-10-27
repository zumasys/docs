# PN5_60804

<PageHeader />

## Description

Enhance the PortBas command to tag all changes

### Previous Release Behavior

When PortBas was run, a list of changed keywords would be placed in the header of the program. This was insufficient as there was no audit trail as to what lines were changed and in what way.

### Current Release Behavior

The PortBas command is enhanced in the following manner:

- a comment will be prepended to the beginning of any original line that was changed
- a comment will be appended to the end of all changed lines
- the original commented line will always preceed the changed line
- comments will not be added if the H option is used

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)
  
<PageFooter />

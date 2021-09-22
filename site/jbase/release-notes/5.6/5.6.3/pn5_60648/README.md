# PN5_60648

<PageHeader />

## Description

User was encountering error 2007 when accessing a file.

### Previous Release Behavior

There were 2 reasons for these errors.

One was a minor internal logic error.

The second was because the header in the group was stale. We keep a track of the update number, which is used for consistency. In a group with 4 frames, one frame had an invalid update number showing it was stale information.

### Current Release Behavior

The logic error is fixed.

The second one now exhibits itself with error number 2017 (previously 2007) , this change in error number differentiates it.

By setting the environment variable **JEDI_IGNORE_UPDATE_NO** , we ignore that error. This allows files to continue without a problem, but the data inside could be stale. This means a customer can COPY the data to a new file, but with the knowledge they may have lost updates.  

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />

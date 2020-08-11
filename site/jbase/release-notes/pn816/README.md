# PN816

<PageHeader />

## Description

jrestore fails with segmentation violation when OS files greater than 2GB have been backed up

## Previous Release Behavior

Should a jbackup include a non-jBASE files, e.g. a **.tar** or **.gz** file, and that file is greater than 2GB, then jrestore will fail with a segmentation violation even if you are doing a selective restore that doesn't include that file.

## Current Release Behavior

The segmentation violation does not occur.

Back to [5.7.8 Release Notes](../5.7.8/README.md)
  
<PageFooter />

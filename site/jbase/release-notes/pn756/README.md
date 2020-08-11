# PN756

<PageHeader />

## Description

Change the default spooler security when running **SP-NEWTAB**.

## Previous Release Behavior

The default security of queues and jobs was set to **CREATOR** preventing users from managing queues and jobs they do not own.

## Current Release Behavior

**SP-NEWTAB** no longer defaults to **CREATOR** and requires the user to specifically enter the security settings for queues and jobs.
i.e. CREATOR, QUEUE, NONE

The default security for queues and jobs is set to **NONE**.

Back to [5.7.8 Release Notes](../5.7.8/README.md)
  
<PageFooter />

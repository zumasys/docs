# PN5_60925

<PageHeader />

## Description

**jprof** command no longer creates a report when JDIAG is set with  **JDIAG=profile=long:filename=xxx**

### Previous Release Behavior

The tools for profiling jBASE code are set by the **JDIAG** environment variable. When used with the **jprof** command, a report was not created.

### Current Release Behavior

Using  **JDIAG=profile=long:filename=xxx** now allows the **jprof** command to create a report.

Back to [5.7.5 Release Notes](./../README.md)

  
<PageFooter />

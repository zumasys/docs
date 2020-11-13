# PHANTOM

<PageHeader />

## Description

Start a process which executes in the background without using a jBASE license.  

The command may take the form:

```
PHANTOM {BRIEF} {SQUAWK} {UNIQUE} Command
```

where:

**BRIEF**   - Suppresses output from command.  
**SQUAWK**  - Display record id of output file.  
**UNIQUE**  - Append milliseconds past midnight to output filename.  
**Command** - The command to be executed by the phantom process.

Output from the **PHANTOM** process is stored in a **&PH&** file.

Back to [Background Processing](./../README.md)

<PageFooter />

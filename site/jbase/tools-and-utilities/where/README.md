# WHERE

<PageHeader />

**Tags:**
<badge text='display' vertical='middle' />
<badge text='output processing' vertical='middle' />

## Description

The **WHERE** utility can be used to display information on processes executing jBASE programs. It takes the general form:

```
WHERE Ports (Options
```

Where:

- **Ports** can be a range of Ports of the form Port-Port
- **options** may be any of:

| Option | Description |
| --- | --- |
| A | all ports displayed |
| N | nopage |
| P | send output to printer |
| S | display processes NOT waiting at jSHELL prompt |
| U | suppress own process from display |
| V | verbose output |

## Example  

```
jsh SandBox ~ -->WHERE 401 (V

 Port   Device     User Acct    PID      Command
 401    2          zumasys      99095    Port 401 details at 13:08:47 21 JAN 2021
                                         Thread type Normal
                                         Usage Count 0 from 100K
                                         Application Open Files 8 , Actual O/S Open Files 6
                                         Memory: Free 490,464   Used 517,328
                                         READ's 35 , WRITE's 2
                                         DELETE's 3 , CLEARFILE's 0
                                         EXECUTE's 2 , INPUT's 208
                                         OPEN's 26
                                    ---- jsh -
                                         Program performing EXECUTE/PERFORM at jsh.b,153
                                    ---- jed PGM lots_of_processes.jabba
                                         Program at keyboard INPUT at CommandNext.b,103
```

## Note

> The output of **WHERE** can be [customized](./../customizing-the-output-of-commands/README.md).

Back to [Tools and Utilities](./../README.md)

<PageFooter />

# jlogmonitor

<PageHeader />

## Syntax

```bash
jlogmonitor {-h|?} {-ccmd} {-Cnn} {-Dnn} {-E} {-Inn) {-Snn}
```

## Syntax Elements  

| Option | Description |
| ---    | ---         |
| -ccmd  | The command cmd is executed when an error occurs. |
| -Cnn   | If the file system utilization of the journal log exceeds nn% full then an error message is displayed.<br>The error message is repeated for every 1% increase in file system utilization. |
| -Dnn   | If the jlogdup process processes no records (or if there is no jlogdup process active), then after nn minutes of inactivity it displays an error message.<br>It repeats the error message every nn minutes while the jlogdup process(es) is inactive. |
| -E     | If the jlogdup program reports an error, this option causes jlogmonitor to also display an error.<br>You can view the actual nature of the error by either looking at the screen where the jlogdup process is active, or by listing the jlogdup error message file (assuming the –eERRFILE option was used). |
| -h     | display help  |
| -lnn   | The status of the Journaler can be ACTIVE, INACTIVE or SUSPENDED.<br>If the status of the journaler is either INACTIVE or SUSPENDED (with jlogadmin) for more than nn minutes, it displays an error message.<br>The error message will be repeated every nn minutes that the journaler is not active |
| -Snn   | Use this option to determine if any updates are being applied to the journal logs.<br>If no updates are applied to the current journal log set for nn minutes it displays an error message.<br>It repeats the error message for every nn minutes of system inactivity. |

## Note  

>You must specify at least one of the options, -C, -D, -E, -I or -S.
>
>This command has been deprecated on jBASE 5.7 (and later) for docker

## Example

```bash
jlogmonitor –c"MESSAGE * %"
```

The command "MESSAGE \* %" is executed for every message sent to the screen by jlogdup. The jlogmonitor interprets the use of the % in the command and replaces it with the error message.

Back to [Transaction Journaling](./../README.md)

<PageFooter />

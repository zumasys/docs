# SP-SKIP

<PageHeader />

## Description

This command changes the number of blank pages to eject at the end of each print job. It takes the general from:

```
SP-SKIP formqueue number-of-pages
```

where:

- **formqueue** is the formqueue to change
- **number-of-pages** is the number of blank pages (0 to 10) to be ejected after despooling the print job.

> ### Note
>
> The page-eject value in the SKIP field affects all print jobs despooled from that formqueue. An alternate command [SP-EJECT](./../sp-eject) can be used to set the number of page ejects for a set of print jobs.

If entered without arguments, the user will be prompted as:

```
FORM-QUEUE PAGES:
```

The user will then enter the name of the formqueue and the number of pages desired.

Back to [Spooler](./../jbase-spooler).

  
<PageFooter />

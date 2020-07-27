# MVSENDGRID.CONFIG
<PageHeader />

**Tags:**
<badge text='objects' vertical='middle' />
<badge text='rest' vertical='middle' />

MVSENDGRID.CONFIG will setup your initial configuration.  The configuration is stored in your MD/Voc as MVSENDGRID.CONFIG.JSON.

## Command Syntax

```
CALL MVSENDGRID.CONFIG
```
You will be asked for your SendGrid UserName and Password.

## Config Layout

```
LIST-ITEM MD MVSENDGRID.CONF.JSON
    MVSENDGRID.CONFIG.JSON
001 {
002   "username": "SendGrid User Name",
003   "password": "SendGrid Password"
004   }
```

<PageFooter />

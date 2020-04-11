# Z

<PageHeader />

**Tags:**
<badge text='background process' vertical='middle' />

## Description

Starts a new thread like PH-START.

Background tasks started with Z can run concurrently by setting the following environment variable:

```
set Z_DISABLE_QUEUEING=1 [Windows] 
export Z_DISABLE_QUEUEING=1 [Linux/Unix]
```

Setting this environment variable disables the queueing behavior so that background jobs started with Z / ZH will run concurrently provided there are available ports in the PH-LINES list.

```
jsh home ~ -->set Z_DISABLE_QUEUEING=1 
jsh home ~ -->Z SLEEP 30 TASK STARTED ON LINE 1000 FOR ACCOUNT danielk Id AAAOlAAADWrLsqzg 
jsh home ~ -->Z SLEEP 30 TASK STARTED ON LINE 1001 FOR ACCOUNT danielk Id AAAOlAAADWrLsuix 
jsh home ~ -->
```

## Note

> The Z\_DISABLE\_QUEUEING environment variable is also utilized with ZH.

Back to [Background Processing](./../README.md)

  
<PageFooter />

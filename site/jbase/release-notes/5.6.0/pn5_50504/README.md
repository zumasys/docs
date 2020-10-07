# PN5_50504

<PageHeader />

## Description

The Z and ZH commands do not allow concurrent background tasks.

## Previous Release Behavior

The Z and ZH commands would not allow concurrent background tasks; they would always queue to the first available port number defined in PH-LINES.

```
jsh home ~ -->Z SLEEP 30
TASK  STARTED ON LINE 1000 FOR ACCOUNT danielk Id AAAOlAAADWrLmaad
jsh home ~ -->Z SLEEP 30
TASK  QUEUED ON LINE 1000 FOR ACCOUNT danielk Id AAAOlAAADWrLmixI
jsh home ~ -->
```

The second job will queue on port 1000 until the first job completes.

## Current Release Behavior

Background tasks can now run concurrently by setting the following environment variable:

```
set Z_DISABLE_QUEUEING=1      [Windows]
export Z_DISABLE_QUEUEING=1   [Linux/Unix]
```

Setting this environment variable disables the queueing behavior so that background jobs started with Z / ZH will run concurrently provided there are available ports in the PH-LINES list.

```
jsh home ~ -->set Z_DISABLE_QUEUEING=1
jsh home ~ -->Z SLEEP 30
TASK  STARTED ON LINE 1000 FOR ACCOUNT danielk Id AAAOlAAADWrLsqzg
jsh home ~ -->Z SLEEP 30
TASK  STARTED ON LINE 1001 FOR ACCOUNT danielk Id AAAOlAAADWrLsuix
jsh home ~ -->
```

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />

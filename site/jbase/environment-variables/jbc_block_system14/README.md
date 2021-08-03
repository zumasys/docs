# JBC_BLOCK_SYSTEM14

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

When this environment variable is set, calls to **SYSTEM(14)** will result in a 100 millisecond delay.

## Values

1

## Default

Not set.

## Setting

As per normal environment variable. The environment variable can be set dynamically with the [**PUTENV()**](./../../jbc/putenv/README.md) function.

## UNIX

```
export JBC_BLOCK_SYSTEM14=1
```

## Windows

```
set JBC_BLOCK_SYSTEM14=1
```

## Note

> Looking for type ahead data using **SYSTEM(14)** in a tight loop can have a detrimental impact on system performance because left unchecked, such loops can consume all available system resources. With **JBC\_BLOCK\_SYSTEM14** set, each call to **SYSTEM(14)** incurs a 100 millisecond delay, so a loop with **SYSTEM(14)** doesn't waste system resources by looping too quickly.
>
> It should be noted that the accuracy of the pause is dependent on the granularity of the system clock and the load on the system. Most operating systems and hardware will provide a granularity of 10 milliseconds.

Back to [Environment Variables](./../README.md)  
  
<PageFooter />

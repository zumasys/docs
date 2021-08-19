## PM5_60898

<PageHeader />

## Description

Correct the (M) option on the BASIC compiler in order to use multi-tasking for compilations

## Previous Release Behavior

The (M) option was notionally added, but seems to have stopped working. It is probably little used, which is a shame as it can be used to great effect

## Current Release Behavior

The (M) option now works. The code has been re-written using the new $jobs class.

As an example, I used the (M) option on an internal jBASE file to compile all our QA programs like this:

```
jsh-> time BASIC QA *
[ Lots of screen output removed ]
usr: 0.47   sys: 1.67   elapsed: 2m18.84s

jsh-> time BASIC QA * (M)
[ Lots of screen output removed ]
Source file (2053 sources) compiled successfully
usr: 0.22   sys: 0.17   elapsed: 0m6.90s
```

In this case, using the (M) option has increased the speed from 138 seconds to approx 7 seconds##

Back to [5.8.0 Release Notes](./../README.md)

<PageFooter />

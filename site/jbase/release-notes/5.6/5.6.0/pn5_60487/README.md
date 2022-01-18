# PN5_60487

<PageHeader />

## Description

This change improves the handling of mutexes in jBASE.

## Previous Release Behavior

The problems were usually seen on a Windows platform. They could have occurred on other platforms, but would have failed silently. For now we'll concentrate on Windows.

Various Mutex errors were reported. Timeout messages were common, as well as MutexLock: Error: Result nn, Error 0 error messages.

The timeout messages sometimes have details of the position in the jBASE run-time, and this was often when doing a mallinfo() call to obtain memory allocation information.

A lot of the mutex error problems seem to point to the jBASE listening thread interacting with the main thread.

## Current Release Behavior

While it is not certain that all instances of this have been addressed, should a mutex timeout error occur then jBASE will provide additional information as to the nature and source of the error, e.g.

```text
MutexLock: Result nn, Error nn, filename /home/jbasedev/xxx/jbase/blahblahb.c,453
```

This will hopefully give us more information on where and why the errors have occurred so that they can be addressed in a future release.

Specifically, the changes that were made are:

The timeout for the errors have been increased. A 5 second timeout on taking a mutex on a heavily loaded system just wasn't sufficient.
Improved error messages.

On Windows, the mutex had additional information such as the owner of the mutex and if it is locked, to enable a self-testing mechanism as to the consistency of the mutex. Unfortunately, that mechanism wasn't thread safe and we could have errors about MutexLock: mutex already locked by thread, File 'jlibMalloc.c', Line 339 which were spurious and caused solely by the mechanism designed to test for errors. All references to this extra information (mutexptr->locked, mutexptr->locked_thread, and so on) has now been removed as it is not thread safe and so of no real use.

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />

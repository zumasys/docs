# Adjusting the jDLS lock table size

<PageHeader />

To change the number of locks, you have to re-initialise shared memory. This cannot be done while jBASE processes are active.

On Windows, the last jBASE user to exit will release shared memory and the first jBASE process after that will re-allocate shared memory.

Linux is different. You have to either manually remove the jBASE shared memory OR reboot.

So, what is important is the first program to run BEFORE we initialise shared memory.

If you just run a normal jBASE program, it defaults to 3020/20.

If you run jDLS, it defaults to 3020/20, but you can change that with the -s option.

Shared memory can be re-initialised in one of two ways:

```
  jDLS -Ko.    (The -K removes the IPC, the -o stops the “Are you sure?” prompt)
  jlicense removeipc (jBASE 5.8. only)
```

So, for Linux, as a summary:
a) Ensure IPC is removed.
b) First thing to start must be jDLS, and then the -s parameter cab be used.

One alternative is to set an environment variable something like this:

```
 JBASE_JRLA_LOCKS=250000,50
```

If you do this, it won’t take effect until you’ve re-initialised shared memory, but if the first program run is NOT jDLS, then it sets the default instead of 3020/20.

Back to [FAQ](./../README.md)

<PageFooter />

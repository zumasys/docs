# PN5_60967

<PageHeader />

## Description

Enhance the maximum Q-pointer resolution error message to include the name of the originating Q-pointer.

### Previous Release Behavior

If you have **JEDIENABLEQ2Q=1** and a jBASE program/command tries to open a Q pointer called ***my\_bad\_q\_pointer*** which chains through more than 10 subsequent Q pointers the following message would display:

```
ERROR! Qpointer resolution count of 11 exceeds maximum
```

### Current Release Behavior

The message now displayed is:

```
ERROR opening file "my_bad_q_pointer"! Qpointer resolution count of 11 exceeds maximum
```

Both commands are now working.

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)

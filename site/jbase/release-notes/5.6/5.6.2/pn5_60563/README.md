# PN5_60563

<PageHeader />

## Description

Add option (S to MSG command to suppress the time and date from the message

### Previous Release Behavior

```
jsh home ~ -->MSG !1 Time is nature's way of keeping everything from happening all at once.
jsh home ~ -->From Einstein / Port 1 at 08:55:07 09 MAY 2017: Time is nature's way of keeping everything from happening all at once.
```

### Current Release Behavior

```
jsh home ~ -->MSG !1 Time is nature's way of keeping everything from happening all at once. (S
jsh home ~ -->From Einstein / Port 1: Time is nature's way of keeping everything from happening all at once.
```

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />

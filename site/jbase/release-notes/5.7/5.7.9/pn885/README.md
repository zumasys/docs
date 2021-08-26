# PN885

<PageHeader />

## Title
Output of BASIC command different on Windows vs Linux
## Previous Release Behavior

Windows
```
jsh JBASEADM ~ -->BASIC BP TEST
TEST
BASIC_1.c
Source file TEST compiled successfully
```

Linux
```

jsh JBASEADM ~ -->BASIC BP TEST
TEST
Source file TEST compiled successfully
```

Notice the Windows version prints out the name of the **.c** file while Linux does not.

## Current Release Behavior

Windows
```
jsh JBASEADM ~ -->BASIC BP TEST
TEST
Source file TEST compiled successfully
```

Windows output now matches the Linux output.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />

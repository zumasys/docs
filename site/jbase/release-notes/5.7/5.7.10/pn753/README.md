# PN753

<PageHeader />

## Description

jBC: A date conversion on large integer causes segmentation violation

## Previous Release Behavior


```
jbase-centos5-~/bp: cat date1.jabba
    input x
    crt oconv(x, "d")

jbase-centos-~/bp: date1
?112233445566778899
jBASE pid 9566: Segmentation violation. Aborting.
Segmentation fault
```

The same thing occurs if a large integer is passed on the command line...

```
jbase-centos-~/bp: cat date2.jabba
    crt oconv(sentence(1), "d")

jbase-centos-~/bp: date2 112233445566778899
jBASE pid 9623: Segmentation violation. Aborting.
Segmentation fault
```

## Current Release Behavior

Any date that won't fit into a signed 32 bit integer will return **0**, giving a converted date of **31 Dec 1967**.


Back to [5.7.10 Release Notes](./../README.md)
  
<PageFooter />

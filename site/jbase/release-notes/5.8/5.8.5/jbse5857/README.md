# JBSE-5857

<PageHeader />

## Description  

Segfault when COUNTing a file, with or without a parameter

## Previous Release Behavior  

```text
COUNT CREDIT.REPORTS WITH DNUM2 = "430620"

jBASE: Pid 253222: Signal 11: Segmentation fault. Aborting
jBASE: Extra signal information: Address not mapped to object
jBASE: Signal generated at count.b:5
jBASE: Information dumped to file './core_jbase_253222'
```

## Current Release Behavior

```text
COUNT CREDIT.REPORTS WITH DNUM2 = "430620"

 No Records counted
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />

# PN1323

<PageHeader />

## Description

Segv when testing WITHIN keyword in "d3" emulation

## Previous Release Behavior

Does not work either in "universe" or "d3" emulation.

## Current Release Behavior

Use of WITHIN is correctly supported

```
jsh wychbooks ~ -->LIST WITHIN STOCK "A1" DESC COMPONENTS QTY

PAGE    1

level    STOCK    Description....    Components    Qty..

  1      A1       Camera Assy        A21              10
                                     A22
                                     A23
  2      A21      Lens Assy          A210             15
                                     A211
  2      A22      Body                                10
  2      A23      Shutter Assy       A230             11
                                     A231
  3      A210     Optics                              19
  3      A211     Barrel                              21
  3      A230     Iris Mech                           13
  3      A231     Iris Housing                        14


 8 Records Listed
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />

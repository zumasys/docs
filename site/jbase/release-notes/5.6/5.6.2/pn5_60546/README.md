# PN5_60546

<PageHeader />

## Description

Index queries with more complex expressions would only work if the operator was EQ or NE.

### Previous Release Behavior

KEY-SELECT/QUERY-INDEX using EQ or NE would work but LT, GT, LE, GE did not work.

### Current Release Behavior

Index queries now work using any comparative operator.

Back to [5.6.2 Release Notes](./../README.md)

  
<PageFooter />

# PN5_60545

<PageHeader />

## Description

Case Insensitivity: Slow string concatenation

### Previous Release Behavior

When **case\_insensitive\_runtime\_strings = true** was in effect, string concatenation was extremely slow.

### Current Release Behavior

String concatenations, in case insensitive mode, have been sped up on the order of up to 5000% faster.

Back to [5.6.2 release Notes](./../README.md)

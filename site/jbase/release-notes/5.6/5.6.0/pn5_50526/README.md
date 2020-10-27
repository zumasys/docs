# PN5_50526

<PageHeader />

## Description

jQL issue with null associated multi-value sets when doing a division operation

## Previous Release Behavior

If a record has an associated (i.e. correlated) set of attributes and (at least) one of those sets is 'null' (i.e. the whole set is null) then none of the other sets are processed and jQL shows 'zero' for the calculation.

## Current Release Behavior

Divsion by null returns the numerator, or zero if the numerator is null.

This default behavior can be changed by setting configuration option jql_divide_by_zero_zero = true in the Config_EMULATE file.

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />

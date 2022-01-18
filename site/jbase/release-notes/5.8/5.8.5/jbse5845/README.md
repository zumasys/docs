# JBSE-5845

<PageHeader />

## Description  

STATUS() value not reset by ICONV/OCONV of valid time

## Previous Release Behavior

If an ICONV or OCONV is fed an invalid value, the STATUS() result should be non-zero.  

In this situation, a subsequent ICONV/OCONV does not reset STATUS().  

## Current Release Behavior

STATUS() result is set as expected.

Back to [5.8.6 Release Notes](./../README.md)

<PageFooter />

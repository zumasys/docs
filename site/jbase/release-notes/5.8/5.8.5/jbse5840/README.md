# JBSE-4840

<PageHeader />

## Description

The JQL_ITYPE_CONV subroutine was added to help parse I-Type dictionaries with special characters such as + - / ( ) in the ID. This was a temporary solution until it could be properly implemented in a jQL C++ routine.

## Previous Release Behavior

If a jQL query invokes the subroutine (via an I-Type), then a LOGTO is performed and the query repeated, a segfault occurs.

## Current Release Behavior

jQL C++ routine implemented.

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />

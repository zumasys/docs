# PN680

<PageHeader />

## Description

Switching accounts via jremote's switchAccount method fails to pickup the correct version of cataloged programs.

## Previous Release Behavior

If you have a subroutine cataloged in two different accounts (different versions) and call the subroutine in one account via jremote then issue a switchAccount to point to a different account that has a cataloged subroutine of the same name the subsequent call still calls the version from the previous account.

## Current Release Behavior

switchAccount now clears the subroutine cache and picks up the correct subroutine version.

## Notes

This behavior was not restricted to switchAccount but anything that issued a JBASELogto(account, action) with an action other than "1" (which is what the LOGTO verb uses).

Back to [5.7.7 release Notes](../jbase-5.7.7-release-notes/README.md)
  
<PageFooter />

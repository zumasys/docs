# PN5_60787

<PageHeader />

## Description

Util: Paragraphs with "N" in attribute 1 do not get called with **LOGTO**

### Previous Release Behavior

Using "N" instead of "PA" in attribute 1 of a Paragraph, a login Paragraph was not called when using **LOGTO** or "jsh -"

### Current Release Behavior

"N" is now recognized as a valid synonym for Paragraphs when used in the login process.

Back to [5.7.1 Release Notes](./../README.md)

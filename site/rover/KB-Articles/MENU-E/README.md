# MENU.E

<PageHeader />

## Overview

Use **MENU.E** (ACE module > Data Entry menu) to add commands to an existing menu. The first field prompts for the menu ID and provides a lookup of the available menus.

## Menu Structure

Most modules within M3&mdash;such as AP, AR, Engineering, and Inventory&mdash;include a primary menu and three sub‑menus. For example, the Accounts Payable primary menu is `AP.MENU`. This menu only lists the sub‑menus (see screenshot&nbsp;#1). The sub‑menus contain commands for the various procedures. For instance, `AP.REPORT` lists all AP reports, forms, and query screens (see screenshot&nbsp;#2).

## Adding Commands

When you add new commands, follow the same structure. If you create a sales report (for example `SALES.CR1`), add it to the Reports and Inquiries menu (`MRK.REPORT`) found in the Sales/Marketing module (`MRK.MENU`).

Feel free to add reports to any menu that suits your workflow.

## Custom Menus

MENU.E can also be used to create entirely new menus. Some customers build custom menus for a department or employee so users can see everything they need in a single place instead of navigating between multiple modules or menus.

## Adding Reports to a Menu

Reports created via the report writers `RD.E` and `RP.E` can be added to a menu. Reports created via `REPORT.E` and `RW.E` cannot be added to a menu.

<PageFooter />

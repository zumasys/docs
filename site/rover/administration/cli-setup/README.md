# Rover Installer Command-Line Options

This document describes the command-line properties available when installing Rover using `msiexec`.

## Overview

The Rover installer supports silent and automated installations through MSI command-line properties. These properties allow administrators to pre-configure the application without user interaction.

## Basic Usage

```cmd
msiexec /i "rover-installer.msi" /qn [PROPERTIES...]
```

| Flag | Description |
|------|-------------|
| `/i` | Install the specified MSI package |
| `/qn` | Quiet mode, no UI |
| `/qb` | Basic UI (progress bar only) |
| `/l*v install.log` | Enable verbose logging to file |

## Configuration Properties

### Core Settings

| Property | Values | Description |
|----------|--------|-------------|
| `CLI_RESET_CONFIG` | `"1"` or `"0"` | When `"1"`, overwrites existing configuration file during upgrade. Default behavior preserves existing configuration. |
| `CLI_SHOWMULTIPLE` | `"1"` or `"0"` | When `"1"`, enables the configuration file selector dropdown on the login form, allowing users to switch between multiple configuration files. |
| `CLI_PROMPTMODE` | `"1"`, `"2"`, or `"3"` | Controls visibility and editability of advanced fields. See [Prompt Modes](#prompt-modes) below. |

### Connection Settings

| Property | Example Value | Description |
|----------|---------------|-------------|
| `CLI_SERVER_ADDRESS` | `"myserver.example.com"` | Default server address/hostname for connection |
| `CLI_SERVER_PORT` | `"22"` | Default port number (typically `22` for SSH, `23` for Telnet) |
| `CLI_CONNECTION_TYPE` | `"SSH"` or `"TELNET"` | Connection protocol to use |
| `CLI_ACCOUNT` | `"MYACCOUNT"` | Default account name |

### Field Visibility Overrides

These properties override the `CLI_PROMPTMODE` setting for individual fields. Set to `"1"` to show, `"0"` to hide.

| Property | Description |
|----------|-------------|
| `CLI_SHOW_ADDRESS` | Show/hide the Server Address field |
| `CLI_SHOW_PORT` | Show/hide the Port field |
| `CLI_SHOW_CONNECTION_TYPE` | Show/hide the Connection Type dropdown |
| `CLI_SHOW_ACCOUNT` | Show/hide the Account field |

### Field Read-Only Overrides

These properties override the `CLI_PROMPTMODE` setting for individual fields. Set to `"1"` for read-only, `"0"` for editable.

| Property | Description |
|----------|-------------|
| `CLI_READONLY_ADDRESS` | Make Server Address read-only or editable |
| `CLI_READONLY_PORT` | Make Port read-only or editable |
| `CLI_READONLY_CONNECTION_TYPE` | Make Connection Type read-only or editable |
| `CLI_READONLY_ACCOUNT` | Make Account read-only or editable |

> **Note:** Username and Password fields are always shown on the main form and are always editable. They cannot be made read-only or hidden.

## Prompt Modes

The `CLI_PROMPTMODE` property provides a simplified way to configure field visibility and editability:

| Value | Name | Behavior |
|-------|------|----------|
| `"1"` | Show All Prompts | All fields (Server, Port, Connection Type, Account) are visible on the main login form and fully editable. |
| `"2"` | Hide Editable | Advanced fields are hidden from the main form but appear in a collapsible "Additional Settings" section. Fields remain editable. |
| `"3"` | Hide Read-Only | Advanced fields are hidden from the main form and appear in a collapsible "Additional Settings" section. Fields are read-only (users cannot modify pre-configured values). |

### Login Form Layout

**PROMPTMODE=1 (Show All):**
```
┌─────────────────────────────┐
│ Server:      [____________] │
│ Port:        [____________] │
│ Connection:  [SSH      ▼ ] │
│ Username:    [____________] │
│ Password:    [____________] │
│ Account:     [____________] │
│                             │
│   [Sign On]    [Exit]       │
└─────────────────────────────┘
```

**PROMPTMODE=2 or 3 (Hidden fields):**
```
┌─────────────────────────────┐
│ Username:    [____________] │
│ Password:    [____________] │
│                             │
│   [Sign On]    [Exit]       │
│                             │
│ ▶ Additional Settings       │
│ ┌─────────────────────────┐ │
│ │ Server:    [__________] │ │
│ │ Port:      [__________] │ │
│ │ Connection:[SSH     ▼ ] │ │
│ │ Account:   [__________] │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

## Installation Examples

### Example 1: Basic Silent Install with Server Configuration

```cmd
msiexec /i "rover-installer.msi" /qn ^
    CLI_SERVER_ADDRESS="production.example.com" ^
    CLI_SERVER_PORT="22" ^
    CLI_CONNECTION_TYPE="SSH" ^
    CLI_ACCOUNT="PROD"
```

### Example 2: Locked-Down Installation (Users Can Only Enter Credentials)

```cmd
msiexec /i "rover-installer.msi" /qn ^
    CLI_PROMPTMODE="3" ^
    CLI_SERVER_ADDRESS="secure.example.com" ^
    CLI_SERVER_PORT="22" ^
    CLI_CONNECTION_TYPE="SSH" ^
    CLI_ACCOUNT="LOCKED"
```

### Example 3: Flexible Installation (Hidden but Editable Settings)

```cmd
msiexec /i "rover-installer.msi" /qn ^
    CLI_PROMPTMODE="2" ^
    CLI_SERVER_ADDRESS="default.example.com" ^
    CLI_SERVER_PORT="22" ^
    CLI_CONNECTION_TYPE="SSH" ^
    CLI_ACCOUNT="DEFAULT"
```

### Example 4: Upgrade with Configuration Reset

```cmd
msiexec /i "rover-installer.msi" /qn ^
    CLI_RESET_CONFIG="1" ^
    CLI_SERVER_ADDRESS="newserver.example.com" ^
    CLI_SERVER_PORT="22" ^
    CLI_CONNECTION_TYPE="SSH" ^
    CLI_ACCOUNT="NEWACCT"
```

### Example 5: Enable Multiple Configuration Files

```cmd
msiexec /i "rover-installer.msi" /qn ^
    CLI_SHOWMULTIPLE="1" ^
    CLI_PROMPTMODE="1" ^
    CLI_SERVER_ADDRESS="server1.example.com" ^
    CLI_SERVER_PORT="22" ^
    CLI_CONNECTION_TYPE="SSH" ^
    CLI_ACCOUNT="ACCT1"
```

### Example 6: Custom Field Visibility (Override PROMPTMODE)

Show all fields except Account, make Port read-only:

```cmd
msiexec /i "rover-installer.msi" /qn ^
    CLI_PROMPTMODE="1" ^
    CLI_SHOW_ACCOUNT="0" ^
    CLI_READONLY_PORT="1" ^
    CLI_SERVER_ADDRESS="server.example.com" ^
    CLI_SERVER_PORT="22" ^
    CLI_CONNECTION_TYPE="SSH" ^
    CLI_ACCOUNT="HIDDEN"
```

### Example 7: Silent Install with Logging

```cmd
msiexec /i "rover-installer.msi" /qn /l*v "C:\Logs\rover_install.log" ^
    CLI_SERVER_ADDRESS="server.example.com" ^
    CLI_SERVER_PORT="22" ^
    CLI_CONNECTION_TYPE="SSH" ^
    CLI_ACCOUNT="MYACCT"
```

## Upgrade Behavior

By default, the installer preserves existing configuration files during upgrades:

| Scenario | `CLI_RESET_CONFIG` | Result |
|----------|-------------------|--------|
| Fresh install | N/A | New configuration created from template with specified values |
| Upgrade, config exists | `"0"` or not set | Existing configuration preserved (CLI values ignored) |
| Upgrade, config exists | `"1"` | Existing configuration overwritten with new values |

## Configuration Files

The installer writes to two configuration files:

1. **`configuration.json`** - Located in `%APPDATA%\Zumasys\Rover\`
   - Contains connection settings, field visibility, and read-only states
   
2. **`settings.json`** - Located in `%APPDATA%\Zumasys\Rover\`
   - Contains the `AllowMultipleConfigs` setting

## Troubleshooting

### Verify Installation Properties

Enable verbose logging to verify properties are being passed correctly:

```cmd
msiexec /i "rover-installer.msi" /l*v "install.log" CLI_SERVER_ADDRESS="test"
```

Then search `install.log` for `CustomActionData` to see the values received by the installer.

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Settings not applied | Existing config preserved | Use `CLI_RESET_CONFIG="1"` |
| Fields still editable | Wrong PROMPTMODE | Use `CLI_PROMPTMODE="3"` for read-only |
| Fields not hidden | Individual override | Check for conflicting `CLI_SHOW_*` properties |

## Property Reference Summary

```cmd
msiexec /i "rover-installer.msi" /qn ^
    CLI_RESET_CONFIG="0|1" ^
    CLI_SHOWMULTIPLE="0|1" ^
    CLI_PROMPTMODE="1|2|3" ^
    CLI_SERVER_ADDRESS="hostname" ^
    CLI_SERVER_PORT="port" ^
    CLI_CONNECTION_TYPE="SSH|TELNET" ^
    CLI_ACCOUNT="account" ^
    CLI_SHOW_ADDRESS="0|1" ^
    CLI_SHOW_PORT="0|1" ^
    CLI_SHOW_CONNECTION_TYPE="0|1" ^
    CLI_SHOW_ACCOUNT="0|1" ^
    CLI_READONLY_ADDRESS="0|1" ^
    CLI_READONLY_PORT="0|1" ^
    CLI_READONLY_CONNECTION_TYPE="0|1" ^
    CLI_READONLY_ACCOUNT="0|1"
```
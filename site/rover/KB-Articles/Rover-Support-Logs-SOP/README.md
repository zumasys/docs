# SOP - Collecting Rover, QM, and M3 Services Support Logs

<PageHeader />

## Purpose

Use this SOP to identify and collect the most relevant logs and troubleshooting artifacts for Rover, QM, and M3 Services support cases.

## Scope

This SOP covers:

- Rover install and deployment issues
- Rover client configuration issues
- Legacy M3 client issues
- M3 Services status/history issues
- Login and logout audit requests

## SOP

### 1. Identify the symptom

| Symptom | Primary artifact to collect |
|---|---|
| Rover install failed or upgrade failed | Rover MSI verbose install log |
| Silent install did not apply settings | Rover MSI verbose install log |
| Rover client settings are wrong or missing | `configuration.json` and `settings.json` |
| Legacy M3 client issue | Session activity log |
| Need live host/client troubleshooting for legacy M3 | Debug Window output |
| Batch service did not start or stopped unexpectedly | Service status log entries in `BS.E` |
| Need user login/logout history | `USERLOG.R1` output |
| QM issue | No publicly documented QM support log verified |

### 2. Collect the correct log or artifact

| Product / component | Artifact | What it is used for | How to collect | Location |
|---|---|---|---|---|
| Rover desktop installer | MSI verbose install log | Install, upgrade, deployment, and CLI property troubleshooting | Re-run installer with verbose logging, for example: `msiexec /i "rover-installer.msi" /l*v "C:\Logs\rover_install.log"` | Whatever path is specified in the `msiexec /l*v` command |
| Rover desktop client | `configuration.json` | Verifies connection settings, field visibility, and read-only state | Copy file from user profile | `%APPDATA%\Zumasys\Rover\configuration.json` |
| Rover desktop client | `settings.json` | Verifies stored client settings such as `AllowMultipleConfigs` | Copy file from user profile | `%APPDATA%\Zumasys\Rover\settings.json` |
| Legacy M3 client | Session activity log | Captures session-level client activity for troubleshooting | Enable logging, reproduce issue, collect log | Same folder as the M3 client program |
| Legacy M3 client | Debug Window | Displays live traffic between host and client | Enable Debug Window and capture the displayed data | No documented file location |
| M3 Services / batch services | Service status log entries | Confirms process start/stop history and recent service events | Review service history in `BS.E` | No documented filesystem path |
| Rover / M3 application | `USERLOG.R1` output | Confirms who logged in, from where, and when | Run `USERLOG.R1` with needed filters and export/print results | Report output, not a documented OS log file |
| QM | Separate QM support log | Not publicly documented in reviewed sources | Not currently documented | Not currently documented |

### 3. Add case notes before escalation

Record the following in the ticket:

- exact issue description
- date and time of issue
- affected user and workstation
- environment or account
- steps to reproduce
- artifact collected
- whether the issue was reproduced while logging was enabled

### 4. Escalation notes

Escalate after collecting the primary artifact for the symptom. Include:

- the collected file or report output
- screenshots where applicable
- whether issue is reproducible
- any missing documented log source, especially for QM or M3 Services file-path questions

## Known gaps

| Area | Gap |
|---|---|
| QM | No verified public documentation for a distinct support log name or path |
| Rover desktop runtime logging | No verified public documentation for a separate runtime log file path |
| M3 Services file storage | No verified public documentation for a filesystem location of retained service logs |

## Internal note

Some items in this SOP are troubleshooting artifacts rather than traditional log files. They are included because support commonly needs them and they are documented as part of troubleshooting.

<PageFooter />

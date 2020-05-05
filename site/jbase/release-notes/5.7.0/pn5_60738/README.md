# PN5_60738

<PageHeader />

## Description

Utilities: Add an option to the **config-strings** command to display output in Config\_EMULATE format.

### Previous Release Behavior

The **config-strings** utility was only able to display the configuration in one way, i.e. with the configuration option and value separated by several spaces, e.g.

```
configuration_option                   value
```

### Current Release Behavior

A new option, -c, allows you to display the configuration in the same format as it appears in the Config\_EMULATE file, e.g.

```
configuration_option = value
```

This allows the cut-and-paste of the output into a new configuration.

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />

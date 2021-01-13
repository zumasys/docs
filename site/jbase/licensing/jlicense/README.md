# jlicense

<PageHeader />

## The jlicense command

A new utility has been introduced in jBASE 5.8 for use with licensing which allows for the installation and verification of license keys:

```
jsh jBASEAdmin ~ -->jlicense --help
jlicense: Called as
        jlicense activate                 Validate, activate and apply a license key
                  [ --noapply                           During the activate, do not apply the license
                  [ --license=AAAA-BBBB-CCCC            The license key to be validated. If omitted, then use
                  [ --silent                            Remove all messages except error messages
        jlicense apply                    Re-apply a previously activated license
        jlicense deactivate               De-activate the current license key
        jlicense emergency                Generate an emergency 8-hour license
        jlicense help                     Display help screen
        jlicense info | status            Display current licensing information
        jlicense validate                 Validate a license key
                  [ --license=AAAA-BBBB-CCCC            The license key to be validated. If omitted, then use
                  [ --noapply                           During the validate, do not re-apply the license
                  [ --silent                            Remove all messages except error messages
                                                        an existing license stored in jBASE.
                 -v OR --verbose                        All commands - verbose output


```

See the [jBASE Licensing](./../cpu/README.md) page for examples.

Back to [Licensing](./../README.md)

<PageFooter />

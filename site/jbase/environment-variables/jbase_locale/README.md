# JBASE_LOCALE

<PageHeader />

## Description

This environment variable sets the locale for UTF8, sorting and data collation sequences. It is required for use with Internationalization and should also be set when using jBASE Secondary Indexes.

## Values

Any valid locale. Use the **jlocales** command for a list of supported locales.

## Default

None

## Setting

Normal environment variable, so it can be set at any time by the commands:

### Warning

It is a common misconception that a locale of C is the same as en\_US. If a system defaults to a locale of C then it should be explicitly set system-wide to a value of **en\_US**.

## UNIX

```
export JBASE_LOCALE=en_US
```

## Windows

```
set JBASE_LOCALE=en_US
```

## Note

> JBASE_I18N does not need to have been set for this environment variable to be used.
>

  
<PageFooter />

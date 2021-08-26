# Verb synonyms

<PageHeader />

It is possible to add synonyms to the MD/VOC for frequently used verbs by creating a "VQ" entry.

## Syntax

```
    GL
001 VQ
002 GET-LIST

```

where "GL" is a synonym for GET-LIST.

## Example

```
jsh SandBox ~ -->SE MD EQ "SE"

 1 Records selected

>CT MD

    SE
001 VQ
002 SELECT

```

Back to [jQL Keywords and Connectives](./../README.md)

<PageFooter />

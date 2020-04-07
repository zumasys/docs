# Literal Operand 

<PageHeader />

## Description

Specifies a literal string or numeric constant enclosed in double quotes. It takes the general form:

```
"literal"
```

where literal is a text string or a numeric constant.

## Note

> A number not enclosed in double quotes is assumed to be a field number (FMC).

### Examples

```
A;N(S.CODE) + "100"
```

Adds 100 to each value (subvalue) in the field defined by S.CODE.

```
A;N(S.CODE) : "SUFFIX"
```

Concatenates the string "SUFFIX" to each value (subvalue) returned by S.CODE.

Back to [A-Corelatives](./../a-correlatives)

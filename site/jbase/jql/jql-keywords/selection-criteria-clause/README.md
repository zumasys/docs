# Selection Criteria Clause  

<PageHeader />

The selection criteria clause allows you to specify data-specific limits on the range of records that will be eligible for processing.  
If a record list of any type is outstanding when processing reaches the selection criteria, only those in the list will be submitted to the selection process;  
if there are no record lists outstanding the selection process considers all records in the file.  
Each selection criterion specifies a field (data or key) for testing to determine selection of a record.  
The selection criterion begins with the connective (WITH (or IF) and must also include a field name.  
The field name can be followed by a value selection clause otherwise it defaults to NE ““ (not equal NULL)

## Syntx  

```
WITH | IF { NOT } { EACH } field {value-selection clause} {{AND | OR}
{ WITH |IF } {NOT} {EACH} field {value-election clause}...}
```

Value selection clause has the form:  

```
{relational-operator} “value string” {{logical-connective}
{relational operator} “value string”}. . .
```

## Value Strings  

Value strings are character strings enclosed in delimiters (usually single quotes within item-idselection criteria and double quotes within ordinary selection criteria); also used to compare against character strings in the file.  
The value string cannot contain the character by which it is delimited. For example: if the value string is enclosed in single quotes, it may contain double quotes, but not single quotes.  
Otherwise, the value string can contain any printable character, excluding RETURN, LINE FEED, and system delimiters.  
The simplest value string is a character string that has precisely those characters for testing (for example. ‘Johansen’) however a value string can also include the following special characters:  

Left ignore ([) at the beginning of the string to indicate that the item-id may start with any characters (for example,’[son’)

Right ignore (]) at the end to indicate that the item-id may end with any characters (for example, Johan]’)

Wild cards(\^) anywhere within the string, each wild card matching one character of any value (for example, ‘Joh\^ns\^n).  

### Example  

The following sentence lists CUSTOMER information with CUSTOMER numbers “40823” or “40825”. Note: the equal sign makes these values strings rather than item-ids. Hence, without an implicit item list, the processor must search the entire file, comparing all items-ids against these two value strings; thus it would be better to omit the equal sign as shown in the previous example, to avoid this;

```
LIST CUSTOMER = ‘40823’ ‘40825’
```

## Single and Double Quotes  

Values string delimiters are single quote (‘) and double quote (“).  
You can enclose an item-id value string in double quotes, but only if it is entered immediately after the file name.  
Use single quotes within item-id selection clauses and doubles quotes within ordinary selection criteria except when you are searching for an item-id that includes single quotes.

## Between Connective  

The connective BETWEEN followed by two value strings is a shorthand way of saying ‘all values greater than the first value string and less than the second’.  
The value of the second value string must be greater than the value of the first to select items.  
Value strings including special characters \^, [ and ] are not valid.  

## Relational Operators  

These express a relationship between an item-id (or attribute value in the case of selection criteria) and the value string. At least one relational operator is required in an item-id selection clause.  
Value strings within the clause not preceded by a relational operator are treated as if preceded by the equal operator.
The operator test for relationships Equal (=), less than or equal (<=) etc., the result of a relational operation is a truth-value: true or false.  
You can enter relational operators as special characters symbols or as their mnemonic equivalents:

| Data Type      | Relational Operator | Synonyms | Description |
| ---            | --- | ---   |    ---       |  
| Numeric Fields | EQ          |  =           | Equal                             |  
|                | NE          |  #           | Not Equal                         |  
|                | NOT         |              |                                   |  
|                | NO          |              |                                   |  
|                | GT          | >            | Greater Than                      |  
|                | AFTER       |              | After                             |  
|                | GE          | >=, =>       | Greater than or equal             |
|                | LT          | <            | Less than                         |  
|                | BEFORE      |              | Before                            |  
|                | LE          | <=, =<       | Less than or equal                |  
| String Fields  | LIKE        | MATCHES      | Matches a pattern or text         |
|                |             | MATCHING     |                                   |
|                | UNLIKE      | NOT.MATCHING | Does not match a pattern or text  |  
|                | SAID        | SPOKEN, ~    | Sounds like                       |  
|                | EQ          | =            | Equal to                          |  
|                | NE          | #            |                                   |  
|                | GE          | >=, =>       | Greater than or equal to          |  
|                | GT          | >, AFTER     | Greater Than                      |  
|                | LE          | =<, >=       | Less than or equal to             |  
| Null Values    | IS.NULL     |              | Tests if a field for a null value |  
|                | IS.NOT.NULL |              | Tests a field for no null values  |  

## Logical Connectives  

The logical connective AND or OR joins two relational expressions.  
The default connective is OR.  
If giving two relational expressions without a logical operator between them, items satisfying either expression are selected (as if the OR connective had been used).  
The connective AND yields a truth-value of true if all the truth values it is combining are true.  
If any truth-value is false, the result of the AND connective is false. 
The OR connective yields a truth value of true if at least one of the truth values it is combining is true.  

## Synonyms

Ampersand (&) is a synonym for AND  
Exclamation point (!) s a synonym for OR  

## Left Ignore examples

The following sentence lists information about all the CUSTOMER code numbers ending in 00.

```
LIST CUSTOMER = ‘[00’
```

The following sentence does not list any rooms because there is no relational operator, the value "[23" is treated as an item-id.
```
LIST CUSTOMER ‘[23’
```

## Wild Card Examples  

The following sentence lists information about all the CUSTOMERS with numbers that begin with three, end with five, and have an intervening character of any value

```
LIST CUSTOMER = ‘3^5’
```

The following sentence does not list any CUSTOMER because there is no relational operator, the string "3^5" is treated as an item-id.

```
LIST CUSTOMER ‘3^5’
```

## AND Connective Examples

The following sentence lists information about ORDERs numbered "200" to "399".

```
LIST ORDER => ‘200’ AND < ‘400’
```

The following sentence results in a report listing customer information only about CUSTOMER "40823" because in the absence of a relational operator,assumes an equal (=). The only CUSTOMER number greater than "40823" and equal to "40825" is "40825".

```
LIST CUSTOMER > ‘40823’ AND ‘40825’
```

## Apparent item-id List Example  

The following sentences do not list information regarding "117" and "119" because they would not be on the implicit list. Although this sentence seems to have an explicit item-id list and an item-id selection clause, the whole series is a selection clause because there is a relational operator somewhere in the list.

```
SELECT ORDER GT ‘200’
42 RECORDS SELECTED
```

## Further Examples of item Lists  

The following sentence lists ORDER information with numbers that are both greater than or equal to "200" and less than "700":  

```
LIST ORDER >= ‘200’ AND LT ‘700’
```

The following sentence displays information about orders with numbers less than 200 and with available dates after May 17 2020.

```
LIST ORDER < ‘200’ WITH AVAILABLE AFTER “MAY 17 2020”
```

The following sentence displays CUSTOMER information "500" and greater than "199" and with CUSTOMER ADDRESS. The second AND arises because the sentence includes both item selection and data selection criteria: these operations perform one after the other, giving an effective AND function. The OR between “ST” and “D” is implicit.

```
LIST CUSTOMER LT ‘500’ AND GT ‘119’ WITH CUS.ADDR “ST” “D”
```

The following sentence lists ORDERS with numbers less than "200" or greater than "399".

```
LIST ORDERS < ‘200’ OR > ‘399’
```

Back to [jQL Keywords and Connectives](./../README.md)

<PageFooter />

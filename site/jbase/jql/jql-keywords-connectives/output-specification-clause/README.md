# Output Specification Clause  

<PageHeader />

The output specification clause names the fields that are to be included in the report  

## Syntax  

``` 
field {print limiter}
TOTAL field {print-limiter}
BREAK-ON field “{text}{option{option}...’}{text}
```

***print limiter** has the form:  

```
{NOT} {relational operator} “value string” {{logical-connective} {NOT} {relational-operator} “value string”}...
```

### Syntax Elements  

**TOTAL** specifies that a running total of a numeric field be maintained.  
**field** identifies the name of a data definition record.  

**print-limiter** suppresses output of values (to subvalue level) that do not match the clause, which replaces suppressed values with blanks.  
Any detail lines that would as a result, be blank, are suppressed.  
Any totals produced include just the values that match the limiting clause.  

**BREAK-ON** specifies that control break be performed and a break line displayed, each time the value of a field changes.  

**text** comprises any printable characters except RETURN, LINE FEED, double quotes, single quotes or system delimiters.  

**options** is one OR more of the following:  

| <!----> | <!----> |
| --- | --- |
| B   | Break: works in conjunction with the B option of the Heading and FOOTING modifiers to insert the break value in the heading or footing. |  
| D   | Data: suppresses the break if only one detail line has been output since the last break. |  
| L   | Line: suppresses the blank line preceding the break data line. Overrides the U option if both are specified. |  
| P   | Page: throws a new page after each new break value until all the data associated with the current break has been output. |  
| R   | Rollover: Inhibits a page break until all the data associated with the current break has been output. |  
| U   | Underlines: if specified places underlines on the line above the accumulated totals. Ignored if used with the "L" option. |  
| V   | Value: inserts the value of the control break field at this point in the BREAK-ON option. |  

### Note

>If the sentence contains an output specification clause, it ignores any default definition records in the dictionary.  

Back to [jQL Keywords and Connectives](./../README.md)  

<PageFooter />

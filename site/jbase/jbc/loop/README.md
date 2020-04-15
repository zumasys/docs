# LOOP

<PageHeader />  

**Tags:**
<badge text='until loop' vertical='middle' />
<badge text='loop until' vertical='middle' />
<badge text='until' vertical='middle' />
<badge text='loop while' vertical='middle' />
<badge text='while loop' vertical='middle' />
<badge text='loop' vertical='middle' />
<badge text='while' vertical='middle' />
<badge text='program execution' vertical='middle' />
<badge text='control structures' vertical='middle' />

## Description

The **LOOP** construct allows the programmer to specify loops with multiple exit conditions. The construct takes the general form:

```
LOOP statements1 WHILE|UNTIL expression DO statements2 REPEAT
```

Where:

- **statements1** and **statements2** consist of any number of standard statements including  the **LOOP** statement itself, thus allowing for nested loops. **statements1** will always be executed at least once, after which the **WHILE** or **UNTIL** clause is evaluated.
- **expression** is tested for Boolean TRUE/FALSE by either the **WHILE** clause or the **UNTIL** clause.

When tested by the **WHILE** clause **statements2** will only be executed if expression is Boolean TRUE. When tested by the **UNTIL** clause, **statements2** will only be executed if the expression evaluates to Boolean FALSE. .

**REPEAT** causes the loop to start again with the first statement following the **LOOP** statement. An example of use is as:

```
loop
    input answer,1 until NUM(answer)
repeat
```

to keep asking for an input until the user enters a numeric value.

See also: [BREAK](./../break), [CONTINUE](./../continue)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />

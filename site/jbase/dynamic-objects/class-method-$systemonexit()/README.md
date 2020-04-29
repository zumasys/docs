# Class Method: $system::onexit()

<PageHeader />

## Description

The **onexit()** method allows another method or subroutine to be called when the calling program *exits*.

When we talk about *exit*, it means the program typically does a **STOP** or **EXIT()** and control returns to the parent process (if any).

## Syntax

```
$system::onexit("class::method")
$system::onexit("subroutine")
$system::onexit("class", "method" {, arguments})
$system::onexit("class::method" | "subroutine"{, ""{, arguments}})
```

## Return value

None

## Examples

This example illustrates calling a method that displays a message when the **test1** program is run.

```
method Example::show_message(message)
    $system::onexit("Example::onexit_msg", "", message)
end method

method Example::onexit_msg(message)
    crt "Here is the message sent from ":message<1,1>
    crt message<1,2>
end method
```

```
program test1
obj = new object("Example")
obj->show_message("Goodbye, cruel world!")
```

```
jsh ~ 3 -->test1
Here is the message sent from Example::onexit_msg
Goodbye, cruel world!
jsh ~ -->
```

The **onexit** method could also have been called as: ```$system::onexit("Example", "onexit_msg", message)```

---

This example illustrates calling a subroutine from the **onexit()** method.

```
subroutine onexit_subroutine(arg)
    crt arg<1,2>
end subroutine

method Example::onexit_subcall(arg)
    $system::onexit("onexit_subroutine", "", arg)
end method
```

```
program test2
obj = new object("Example")
obj->onexit_subcall("Goodbye, cruel world!")
```

```
jsh ~ 2 -->test2
Goodbye, cruel world!
jsh ~ 2 -->
```

## Notes

Note that, in both examples, the program returned to the jShell as that was the parent process.

See also [$system::ontermintate()](../class-$systemonterminate()/README.md)

<PageFooter />

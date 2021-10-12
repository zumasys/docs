# Class Method: $system::onterminate()

<PageHeader />

## Description

The **onterminate()** method allows another method or subroutine to be called when there is no parent process of the program that called the method or subroutine.

When we talk about *terminate*, we mean the program has done a STOP or EXIT() and there is *no* parent jBASE program, meaning the process itself will terminate.

## Syntax

```
$system::onterminate("class::method")
$system::onterminate("subroutine")
$system::onterminate("class", "method" {, arguments})
$system::onterminate("class::method" | "subroutine"{, ""{, arguments}})
```

## Return value

None

## Examples

This example illustrates calling a method that displays a message when the **test1** program is run.

```
method Example::show_message(message)
    $system::onterminate("Example::onterminate_msg", "", message)
end method

method Example::onterminate_msg(message)
    crt "Here is the message sent from ":message<1,1>
    crt message<1,2>
end method
```

```
program test1
obj = new object("Example")
obj->show_message("I'll be back!")
```

```
jsh ~ -->test1
jsh ~ -->exit
Here is the message sent from Example::onterminate_msg
I'll be back!

C:\home>
```

Note that **Example::show_message()** did not run until *after* the parent process, **jsh** in this case, was terminated. This action ensures that everything gets reset at the last possible moment.

The **onterminate** method could also have been called as: ```$system::onterminate("Example", "onterminate_msg", message)```

---

This example illustrates calling a subroutine from the **ontermintate()** method.

```
method Example::onterminate_subcall(arg)
    $system::onterminate("onterminate_subroutine", "", arg)
end method
```

```
program test2
obj = new object("Example")
obj->onterminate_subcall("I'll be back!")
```

```
jsh ~ -->test2
jsh ~ -->exit
I'll be back!

C:\home>
```

## Notes

Note that, in both examples, termination of the parent process, **jsh** in this case, is what triggered **onterminate()**.

See also [\$system::onexit()](../class-method-$systemonexit()/README.md)  

[Back to $system class](./../class-$system/README.md)  

<PageFooter />

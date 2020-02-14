# jBC Coding Guidelines

**Created At:** 10/30/2017 9:57:24 AM  
**Updated At:** 10/30/2017 10:47:15 AM  
**Original Doc:** [jbc-coding-guidelines](https://docs.jbase.com/40575-jbase-development/jbc-coding-guidelines)  
**Original ID:** 283501  
**Internal:** Yes  

## 1. Abstract

"Programs are meant to be read by humans and only incidentally for computers to execute." -- Donald E. Knuth

"I can't say it often enough -- the bottlenecks throughout development come from limitations in human communication. Over and over you will be making decisions, "I could do it this way or I could do it that way, but this way over here communicates best", so that’s what you should do. If there’s a radical thought here, that’s it; that when you program, you have to think about how someone will read your code, not just how a  computer will interpret it." -- Kent Beck

## 2. Coding Standards

- For jBC (BASIC) code, do it in JED, and do the following so that all code is formatted the same way:

```
<Esc>, "bion", <Esc>, "bi"
```

- Ignore  the 80-char rule, that's just daft and makes code unreadable by  breaking logical lines into multiple parts. It's the 21st century and we  have big screens.
- Try to follow the "one statement per line" rule.
- Use lowercase variable names, not "CamelCase" or "javaVariable" styles, and separate words with an underscore character, e.g.

```
full_output_path
expected_result
customer_file_variable
```

- Labels should have descriptive names, not numbers.
- Avoid placing **\***, **!** or **rem** on a line by itself to separate code blocks, use a single blank line.
- Avoid contiguous blank lines; this keeps more code in view.
- Avoid trailing spaces at the end of lines. JED trims trailing spaces by default for **.b** programs.
- Avoid using platform specific constructs like directory and path delimiters, and locations that only exist on one platform like **/tmp** or **c:\temp**.
- Use single-quotes and double-quotes consistently.
- Use **@AM**, **@VM**, etc instead of **CHAR(nnn)**
- ***And never ever put system delimiters in quotes!***

```
"x]y]z"
```

- should be:

```
"x":@VM:"y":@VM:"z"
```

- Use spaces freely in expressions to make things easy to read, e.g.

```
CRT OCONV(value, conversion)
total_amount = amount * quantity
command_to_execute =  @IM:"k":"rm -f":temp_directory_and_id
```

## 3. Naming

- Program and subroutine names follow the same rules as variable names and end in **.b**, with the exception of QA test names which have their own naming conventions to comply with.
- Use **Intention Revealing** names; don't use abbreviations that only makes sense to you so that the  next guy that reads the code months later will understand; that next  guy may be you! Therefore name variables (as well as program names) so that they communicate well by what they do, not how they do it. How are they used? What is its purpose?

You have probably had the experience of reading code whose temporary variables had names like "a", "b" and the ever popular "temp". As a  reader, you have to go through the code holding these useless names in your head until the light comes on. "Aha! 'b' is the flag that causes the loop to terminate."

 Name a temporary variable for the role it plays in the computation. Use variable naming as an opportunity to communicate valuable tactical information to future readers. Good names eliminate the need for  additional comments.

Don't do:

```
x=DCOUNT(f,CHAR(254))
```

- Instead do:

```
number_of_feedback_lines = DCOUNT(feedback, @AM)
```

Self-documenting  code like this eliminates the cruft of adding loads of comments to  explain things. Of course comments, where needed to clarify the code,  are always welcome.

And finally, some excellent advice from Kent Beck's book "Smalltalk Best Practice Patterns". Even though this is a book on Smalltalk, this advice applies to any programming language:

•  Once and only once: If I only have one minute to describe good style, I reduce it to a simple rule: In a program written with good style, everything is said once and only once. This isn’t much help in creating  good code, but it’s a darned good analytic tool. If I see several methods with the same logic, several objects with the same methods, or several systems with similar objects, I know this rule isn’t satisfied.  This leads us to the second property:

•  Lots of little pieces: Good code invariably has small methods and small objects. Only by factoring the system into many small pieces of state and function can you hope to satisfy the "once and only once" rule. I get lots of resistance to this idea, especially from experienced developers, but no one thing I do to systems provides as much help as breaking it into more pieces. When you are doing this, however, you must always be certain that you communicate the big picture effectively. Otherwise, you’ll find yourself in a big bowl of "Pasta à la Smalltalk",  which is every bit as nasty a dish as "Fettucine à la C".

I interpret this last point as: If you find that there is more than one section of code doing the same thing, then refactor that out into a subroutine or function.

\*\*\*

And that's about it. If we all stick to this then all of the code will start to look tidy and familiar. ***This bit is the most import thing to take on***!

jBASE is massive and mostly very messy, so we have to start somewhere. One day soon we will have many developers maintaining jBASE again and following these simple guidelines will avoid future chaos.

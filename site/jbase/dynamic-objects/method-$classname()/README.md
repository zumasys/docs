# Method: $classname()

<PageHeader />

## Description

The **$classname()** method returns the name of the class as a text string.

## Syntax

```
var->$classname()
```

## Arguments

None

## Return values

The name of the class as a text string

A null return value indicates that either **var** is not an object or the object was created with no classname, e.g.

```
var = new object
crt dquote(var->$classname()) ;* displays ""
```

## Example

This mainline code creates a **book** object from a **Library** class, passing 2 arguments, book title and author, to the class's constructor method, then displays the JSON representation of the object:

```
$option jabba
book = new object("Library", "Phaedrus", "Plato")
crt "The class name is ":dquote(book->$classname()):"."
crt book->$tojson()
```

Here's the constructor for the **Library** class:

```
$option jabba
method Library::Library(title, author)
    this->title = title
    this->author = author
end method
```

Running the mainline code displays:

```
The class name is "Library".
{"title":"Phaedrus","author":"Plato"}
```

## Notes

  
Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  

<PageFooter />

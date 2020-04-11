# Method: $inherit() - Object Inheritance

<PageHeader />

**Object inheritance** is a mechanism that allows an instance of a class to inherit all of the properties and methods of the classes of other object instances. Object inheritance is [recursive](./../dynamic-objects-inheritance) in the same way as [Class inheritance](./../method-$inherit%28%29---class-inheritance).

An example will make this clearer:

Here we have 3 classes: **Vehicle**, **Engine,** **Body**:

```
ID: class_vehicle.jabba

method Vehicle::Vehicle()
    varg = new object("$vararg")
    try
        if varg->size() ne 1 then throw "Too many arguments, only 1 allowed!"
        this->type = varg->next()
        this->make = ""
        this->model = ""
    catch ex
        crt ex->message
        stop
    end try
end method

method Vehicle::model(modelname)
    this->model = modelname
    return this
end method

method Vehicle::make(make)
    this->make = make
    return this
end method
```

```
ID: class_engine.jabba

method Engine::Engine()
    this->cylinders = 6      ;* default
end method
```

```
ID: class_body.jabba

method Body::Body()
    this->color = "black"    ;* default
    this->size = "standard"  ;* default
end method

method Body::display()
    beautify = 5
    crt this->$tojson(beautify)
end method
```

We can now build new car object like this:

```
ID: car.jabba

car = new object("Vehicle", "car")
car->make("Jupiter Motors")->model("Europa")

body = new object("Body")

engine = new object("Engine")
engine->cylinders = 4

car->$inherit(body, engine)
car->display()
```

After assigning some initial properties to the car object we then *inherit* the properties and methods from the body and engine instances. If their classes had inherited from other classes then those inherited members would be available to our car object

Running this code produces the following output:

```
{
    "type":"car",
    "make":"Jupiter Motors",
    "model":"Europa",
    "color":"black",
    "size":"standard",
    "cylinders":6
}
```

  
<PageFooter />

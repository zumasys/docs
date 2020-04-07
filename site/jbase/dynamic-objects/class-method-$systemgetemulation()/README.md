# Class Method: $system::getemulation()

<PageHeader />

## Description

The **getemulation()** method is used to obtain the current configuration settings. It creates a sub-object with a property name of **emulation** containing all available emulation settings.

When the object is created, the current configuration (defined by the [JBCEMULATE](./../../environment-variables/jbcemulate) environment variable) is used to set the values of each property.

The properties of the object are the emulation (configuration) options. The value of each property indicates whether the emulation setting has been set to **true**, **false** or is **undefined** within the current emulation according to this table:

| Value | Description |
| --- | --- |
| -1 | undefined |
| 0 | false |
| 1 | true |

## Return value

The number of properties (emulation options) in the object.

## Examples

Display everything in the **emulation** object:

```
equ beautify to 5
emulation = getenv("JBCEMULATE")    ;* Get the emulation we are currently running in
my_system = new object("$system")
count = my_system->getemulation()
configuration = my_system->emulation
configuration->$sort()
crt "JBCEMULATE=":emulation
crt "The number of emulation options available is: ":count
crt configuration->$tojson(beautify)
```

```
JBCEMULATE=D3
The number of emulation options available is: 121
{
    "allow_bad_day_of_month":-1,
    "allow_missing_with":-1,
    "allow_unassigned_assignment":-1,
    "alternate_chain_exit":-1,
    "alternative_oconv":-1,
    "breakon_l_suppresses_blank_line":-1,
    "byexp_mv_dup_like_d3":1,
    "case_insensitive_execute":1,
[big snip]
    "treat_with_as_or_with":1,
    "truncate_decimal":1,
    "u50bb_3_values":1,
    "use_command_as_default_heading":-1,
    "use_id_lptr_reporting":-1,
    "use_sql_syntax_for_select":0,
    "use_uv_locate":-1,
    "ux1ad_use_four_digits":-1,
    "wrap_r_just":1
}
```

If this output is compared with the  output from the **config-strings** command then you can verify, for example, that:

- **alternative\_oconv** is not defined in the emulation
- **use\_sql\_syntax\_for\_select** is set to **false**
- **treat\_with\_as\_or\_with** is set to **true**

Display a single emulation setting by accessing a specific property of the **emulation** sub-object:

```
sys = new object("$system")
sys->getemulation()
print "dates_upper_case = ":sys->emulation->dates_upper_case
```

In **jbase** emulation, this displays:

```
dates_upper_case = 1
```
Display all configuration options that are set to **true**:

```
jbcemulate = GETENV("JBCEMULATE")
obj = new object("$system")
obj->getemulation()
emulation = obj->emulation
emulation->$sort()
print "The following options are set for ":dquote(downcase(jbcemulate)):" emulation:"
print
iter = emulation->$iterator(
nextkey = ""; nextvalue = ""
loop while iter->next(nextkey, nextvalue) do
    if nextvalue = @true then
        print nextkey
    end
repeat
```

## Notes

The following emulation settings are not included:

- compiler\_options
- dup
- named\_common
- prt\_video
- readv0
- reality\_video
- unnamed\_common

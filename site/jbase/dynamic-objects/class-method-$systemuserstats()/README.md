# Class Method: $system::userstats()

<PageHeader />

## Description

The userstats() method creates a sub-object of all information about the current user.

The sub-object currently contains 30 properties, similar in format to the information returned in the @USERSTATS variable :

**port_number** - port number  
**number_programs** - number of program running   
**connect_time** - Connect time  
**pid** - Process ID  
**account_name** - Account name  
**user_name** - User name  
**term_jbase** - Terminal name in jBASE format  
**term_os** - Terminal name in UNIX format  
**tty** - Name of the tty device  
**lang** - Language name  
**listening_thread_time** - Time listening thread executed  
**heap_free** - Mallinfo memory free  
**heap_used** - Mallinfo memory used  
**thread_type** - Type of thread  
**executes** - Number of executes  
**inputs** - Number of inputs  
**user_defined_data** - User defined thread data   
**clock_ticks_per_second** -  Clock ticks per second  
**clock_ticks_elapsed** - Clock ticks elapsed
**cpu_user** - User CPU time  
**cpu_system** - System CPU time  
**cpu_user_child** - Child User CPU time  
**secure_files** - Secure file count  
**source_name** - Souce code file name  
**line_number** - Souce code line number  
**source** - Reserved  
**database** - an array of sub-objects where each sub-object currently has the following properties:  
    - **database_name**  
    - **opens**  
    - **reads**  
    - **writes**  
    - **deletes**  
    - **clearfiles**  
    - **open_count_app**  
    - **open_count_actual**  
    - **lock_block_filename**  
    - **lock_block_key**  
    - **transends**  
    -  **transaborts**  
    - **locks**  
    - **locks_blocked**  
    - **locks_failed_nowait**  
    - **releases**  
    - **releases_files**  
**program** - an array of sub-objects where each sub-object currently has the following properties:  
    - **line_number**  
    - **file_number**  
    - **perform_level**  
    - **status**  
    - **command_line**  
    - **args** - an array of sub-objects containing details of any arguments supplied to the program.  
    - **file_list** - an array of sub-objects containing a list of files associated with this program.  
    - **stack_list** - an array of sub-objects containing the program stack.  
**cstack** - - an array detailing the contents of the C stack  

## Return Value

An array of statistics related to the current user.  

## Examples

Display everything:

```
equ beautify to 5
sys = new object("$system")
stats = sys->userstats()
crt stats->$tojson(beautify)
```
 
Result:

```json
userstats.test
{
    "port_number":401,
    "number_programs":3,
    "connect_time":"1633967828",
    "pid":42303,
    "account_name":"SandBox",
    "user_name":"zumasys",
    "term_jbase":"vt220",
    "term_os":"vt220",
    "tty":"/dev/pts/4",
    "lang":"en_US",
    "listening_thread_time":"1633967912",
    "heap_free":859264,
    "heap_used":1893248,
    "thread_type":"Normal",
    "executes":6,
    "inputs":390,
    "user_defined_data":"",
    "clock_ticks_per_second":100,
    "clock_ticks_elapsed":432440981,
    "cpu_user":"0.04",
    "cpu_system":"0.07",
    "cpu_user_child":"0.07",
    "cpu_system_child":"0.08",
    "secure_files":0,
    "source_name":"userstats.test.jabba",
    "line_number":5,
    "source":"",
    "database":{
        "database_name":"default",
        "opens":28,
        "reads":34,
        "writes":8,
        "deletes":20,
        "clearfiles":0,
        "open_count_app":7,
        "open_count_actual":5,
        "lock_block_filename":"",
        "lock_block_key":"",
        "transends":0,
        "transaborts":0,
        "locks":2,
        "locks_blocked":0,
        "locks_failed_nowait":0,
        "releases":4,
        "releases_files":0
    },
    "program":[
        {
            "line_number":1749,
            "file_number":5,
            "perform_level":3,
            "status":"Program running normally",
            "command_line":"userstats.test",
            "args":[
                "userstats.test"
            ],
            "file_list":[
                "JBASEOBJECT",
                "jclass_system.jabba_22585_1632950171_15_tmp.jabba",
                "JBC.h",
                "jportB.h",
                "jdefc.h",
                "jclass_system.jabba"
            ],
            "stack_list":[
                {
                    "call_level":1,
                    "gosub_level":1,
                    "source_name":"userstats.test.jabba",
                    "line_number":5,
                    "source":""
                }
            ]
        },
        {
            "line_number":1228,
            "file_number":1,
            "perform_level":2,
            "status":"Program performing EXECUTE/PERFORM",
            "command_line":"jed PGM userstats.test.jabba",
            "args":[
                "jed",
                "PGM",
                "userstats.test.jabba"
            ],
            "file_list":[
                "JBASEOBJECT",
                "jed.jabba",
                "jutil.h",
                "jdefc.h",
                "JBC.h",
                "jportB.h"
            ],
            "stack_list":[
                {
                    "call_level":1,
                    "gosub_level":4,
                    "source_name":"jed.jabba",
                    "line_number":1114,
                    "source":""
                },
                {
                    "call_level":1,
                    "gosub_level":3,
                    "source_name":"jed.jabba",
                    "line_number":946,
                    "source":""
                },
                {
                    "call_level":1,
                    "gosub_level":2,
                    "source_name":"jed.jabba",
                    "line_number":501,
                    "source":""
                },
                {
                    "call_level":1,
                    "gosub_level":1,
                    "source_name":"jed.jabba",
                    "line_number":240,
                    "source":""
                }
            ]
        },
        {
            "line_number":134,
            "file_number":0,
            "perform_level":1,
            "status":"Program performing EXECUTE/PERFORM",
            "command_line":"jsh -",
            "args":[
                "jsh",
                "-"
            ],
            "file_list":[
                "jsh.b",
                "JBC.h",
                "jportB.h",
                "jutil.h",
                "jdefc.h",
                "jemulateB.h"
            ],
            "stack_list":[
            ]
        }
    ],
    "cstack":[
        "0x7f22a541ffc3: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(JLibADiagnosticsGetCStack+0x33) [0x7f22a541ffc3]",
        "0x7f2299bec323: /opt/jbase5/5.8.4/lib/libclasses.so(JBCM__$system__userstats__V+0x1453) [0x7f2299bec323]",
        "0x7f22a53ab8d3: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(+0x6f8d3) [0x7f22a53ab8d3]",
        "0x7f22a53ac646: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(jObjectMethodN+0xd6) [0x7f22a53ac646]",
        "0x7f22999d6bbd: /dbms/SandBox/bin/userstats.test.so(jBASEMainFunctionPointer+0x168) [0x7f22999d6bbd]",
        "0x7f22a542772e: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(+0xeb72e) [0x7f22a542772e]",
        "0x7f22a542a315: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(JBASEUserObjectPerformRun+0xc35) [0x7f22a542a315]",
        "0x7f22a542dfb1: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(+0xf1fb1) [0x7f22a542dfb1]",
        "0x7f22a542f38f: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(JLibCPERFORM_IIBBBBBBB+0x19f) [0x7f22a542f38f]",
        "0x7f2299e8ec9d: /opt/jbase5/CurrentVersion/bin/jed.so(jBASEMainFunctionPointer+0x1febd) [0x7f2299e8ec9d]",
        "0x7f22a542772e: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(+0xeb72e) [0x7f22a542772e]",
        "0x7f22a542a315: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(JBASEUserObjectPerformRun+0xc35) [0x7f22a542a315]",
        "0x7f22a542dfb1: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(+0xf1fb1) [0x7f22a542dfb1]",
        "0x7f22a542f38f: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(JLibCPERFORM_IIBBBBBBB+0x19f) [0x7f22a542f38f]",
        "0x7f229a0d610f: /opt/jbase5/CurrentVersion/bin/jsh.so(+0x1510f) [0x7f229a0d610f]",
        "0x7f229a0d8c26: /opt/jbase5/CurrentVersion/bin/jsh.so(ExecuteCommand+0x1106) [0x7f229a0d8c26]",
        "0x7f229a0c8038: /opt/jbase5/CurrentVersion/bin/jsh.so(jBASEMainFunctionPointer+0x3338) [0x7f229a0c8038]",
        "0x7f22a542772e: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(+0xeb72e) [0x7f22a542772e]",
        "0x7f22a542c095: /opt/jbase5/5.8.4/bin/../lib/libjbase.so(JBASEUserObjectRun+0x565) [0x7f22a542c095]",
        "0x7f22a1966555: /lib64/libc.so.6(__libc_start_main+0xf5) [0x7f22a1966555]",
        "0x4012a5: LOGTO() [0x4012a5]"
    ]

``` 
Display program details:

```
equ beautify to 5
sys = new object("$system")
prog = sys->userstats()->program
crt "program is " : prog->$tojson(beautify)
```
    
Result:

```json
program is [
    {
        "line_number":1749,
        "file_number":5,
        "perform_level":2,
        "status":"Program running normally",
        "command_line":"userstats.program.test",
        "args":[
            "userstats.program.test"
        ],
        "file_list":[
            "JBASEOBJECT",
            "jclass_system.jabba_22585_1632950171_15_tmp.jabba"
            "JBC.h",
            "jportB.h",
            "jdefc.h",
            "jclass_system.jabba"
        ],
        "stack_list":[
            {
                "call_level":1,
                "gosub_level":1,
                "source_name":"userstats.program.test.jabba",
                "line_number":5,
                "source":""
            }
        ]
    },
    {
        "line_number":134,
        "file_number":0,
        "perform_level":1,
        "status":"Program performing EXECUTE/PERFORM",
        "command_line":"jsh -",
        "args":[
            "jsh",
            "-"
        ],
        "file_list":[
            "jsh.b",
            "JBC.h",
            "jportB.h",
            "jutil.h",
            "jdefc.h",
            "jemulateB.h"
        ],
        "stack_list":[
        ]
    }
]
```

[Back to $system class](./../class-$system/README.md)  

<PageFooter />

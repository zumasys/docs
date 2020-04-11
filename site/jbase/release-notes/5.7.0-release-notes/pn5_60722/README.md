# PN5_60722

<PageHeader />

### Description

jAgent: Add new convenience options to jbase\_agent



### Current Release Behavior

New option syntax is:

- --config   [default]
- --config=path
- --config=extension


```
--config
  Take the default file from JBCRELEASEDIR/config
  e.g: jbase_agent --config

--config=<<path to configuration file>>
  Specify absolute path to a config file.
  e.g: jbase_agent --config=/home/account/agent/default_agent_setup

--config=<<config file extension>>
  Specify extension of config file held in JBCRELEASEDIR/config
  e.g: jbase_agent --config=odbc
  will cause jbase_agent to look in JBCRELEASEDIR/config for a file called, jagent_config_odbc.
```

  
<PageFooter />

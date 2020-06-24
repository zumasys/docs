# Triggers - Overview

<PageHeader />

**Tags:**
<badge text='triggers' vertical='middle' />

## Description

Database triggers provide users with the capability to monitor updates to the database to file level. The three database updates for which triggers are provided are Write, Delete and Clear. Two database trigger events, a pre update event and a post update event are provided for each update type. The pre update event is triggered before the update to the database is executed and the post update event is triggered after the database update.

The following jBASE database trigger utilities enable users to configure and display database triggers for any file within the database.

| Utility  | Function |
| --- | --- |
| [CREATE-TRIGGER](./../create-trigger) | create trigger events for a file |
| [DELETE-TRIGGER](./../create-trigger) | delete trigger events for a file |
| [LIST-TRIGGER](./../list-trigger/README.md) | list triggers events on a file |

The trigger events manifest themselves by calling a user supplied subroutine, which can be independently configured for each file. Each user subroutine must make provision for all the event types which could be triggered for that file. The [trigger API](./../trigger-api) document gives more information about this.  The [trigger guidelines document](./../triggers-guidelines) gives more information about best practices when using triggers.

Back to [Triggers](./../README.md)

<PageFooter />

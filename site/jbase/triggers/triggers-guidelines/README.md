# Triggers-Guidelines

<PageHeader />

**Tags:**
<badge text='use of triggers' vertical='middle' />

## Description

Triggers give the jBASE application developer a powerful mechanism to easily add sophisticated database logic. However with this power comes the possibility of misuse which could degrade performance or make the overall logic in an application more convoluted. The following guidelines should be considered before defining triggers. They are especially relevant to existing applications where trigger functionality may not have been considered in the design.

- The principal rule is that the trigger logic should be divorced from the application logic. Consideration should be given to the fact that other applications may be written that access a file with a trigger defined on it.
- The trigger subroutines should have a single purpose. Do not build dependencies into the trigger subroutine.
- Consider the additional load on the system that a trigger can impose. This can be estimated from the number of database events that a file is subject to and from the code in the subroutine. Avoid statements such as EXECUTE in the trigger subroutine; they can severely affect system performance when there are many subroutine calls for a specific database event. The jBASE profiling tool [jprof](./../../tools-and-utilities/jprof) is useful in determining run-time efficiency.
- Be especially careful when defining triggers for the pre- and post-read events. For example, jQL queries on files with read triggers will result in one or more subroutine calls. This could significantly add to the time for selects and reports on files with large numbers of records. The situation worsens considerably if the file being queried has dictionary items which specify translates to other files that also have read triggers defined.
- Be careful to avoid infinite recursion. For example, if a post-write trigger is defined, do not write anything else to the file in the trigger subroutine; this will result in infinite recursion.

Back to [Triggers](./../README.md)

<PageFooter />

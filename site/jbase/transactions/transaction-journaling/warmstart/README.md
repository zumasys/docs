# Warmstart

<PageHeader />

This facility is designed to enable the databases defined by the administrator to be brought back to a stable, working position, following a power failure. Without this it is not clear whether all transactions have been committed to the database following such events. Databases which have been shutdown prior to the power outage will not require recovery, so recovery is not attempted on them. Those databases which were active at the time the computer lost power will be recovered. This recovery will take the form of a database roll-forward of all complete transactions. A complete transaction is deemed to be one which has entered the commit phase of processing. Those transactions which were incomplete will not be recovered at all. The databases will be left in a consistent state following recovery. It is the database administrator’s responsibility to determine which transactions require re-entry.

Back to [Transaction Journaling](./../README.md)

<PageFooter />

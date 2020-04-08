# MSG

<PageHeader />

**Tags:**
<badge text='message' vertical='middle' />
<badge text='msg' vertical='middle' />
<badge text='msg' vertical='middle' />

## Description

The jBASE **MSG** command sends a message to other users using either port numbers or account/user ids. It takes the general form:

```
MSG {!port | account/userid } text (Options
```

where:

- **!port** is the target port number for the message.
- **account/userid** is the target user or users for the message.
- **text** is the message body.
- **options** are:
  - **v**- do not strip unprintable characters from the error message

Examples of use may be as:

```
MSG !31 As Zeus said to Narcissus, watch yourself
```

Sends a message to the tty device associated with port number 31.

```
MSG Jim There is little future in being right when your boss is wrong
```

Sends message to the tty device for all users named Jim.

```
m = @(-3):"Please log off now!"
EXECUTE "MSG jeff ":m:" (V"
```

jBC code to send a message with screen control to user jeff.

Back to [Utilities](./../utilities)

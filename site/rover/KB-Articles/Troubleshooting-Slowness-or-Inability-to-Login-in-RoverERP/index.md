# Troubleshooting Slowness or Inability to Login in RoverERP

<PageHeader />

<badge text='Administration' vertical='middle' />

## Problem Statement

Users are experiencing slowness or are unable to log in to RoverERP. These issues may affect various functions, including running reports, opening screens, performing lookups, or entering and saving data.

---

## Symptoms

- Users are unable to log in to RoverERP
- Users experience slowness when running reports, opening screens, performing lookups, or entering or saving data
- Errors may be displayed during login attempts

---

## Cause

- The system may be running out of available licenses, preventing new logins
- Performance issues may be related to server load, network latency, or database performance
- Specific errors or slowness may be tied to certain actions or modules within RoverERP

---

## Resolution Steps

### If Unable to Login

#### 1. Check License Availability

- Navigate to SYSTEM.D
- Verify that the number of active users does not exceed the licensed limit
- If licenses are exceeded, log off unused sessions or increase the license count as needed

#### 2. Review Error Messages

- Note any error messages received during login attempts
- Take screenshots of errors and provide them to support for further analysis

### If Experiencing Slowness

#### 1. Test System Performance

- Run standard reports and perform lookups to assess system responsiveness
- Note if slowness occurs during specific actions (for example, running reports, opening screens, entering data, saving records)

#### 2. Identify Patterns

- Determine if slowness is system-wide or isolated to certain users, modules, or times of day
- Check if slowness occurs when entering specific data, such as customer or part numbers

#### 3. Gather Details

- Document which actions are slow and any error messages encountered
- Collect screenshots and detailed descriptions for support

---

## Verification

- [ ] Confirm that users can log in successfully and that the number of active sessions does not exceed the license limit
- [ ] Verify that system performance is acceptable for all standard actions, including running reports, opening screens, and saving records

---

## Note

- Always monitor license usage to prevent login issues
- Persistent slowness or login problems should be reported to RoverERP support with detailed information and screenshots

---

## Additional Information

- For ongoing issues, review server and network performance, and consult your IT team or RoverERP support
- Regularly update RoverERP and related infrastructure to maintain optimal performance

<PageFooter />

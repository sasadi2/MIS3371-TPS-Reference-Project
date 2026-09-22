# Week 5 — CSS and Responsive Interface Testing Checklist

Use this checklist after applying the Week 5 stylesheet.

---

## 1. HTML/CSS Connection

- [ ] `index.html` contains `<link rel="stylesheet" href="styles.css">`
- [ ] `styles.css` is in the same `src` directory
- [ ] Page loads with styling applied
- [ ] Removing or renaming the stylesheet link causes styling to disappear

---

## 2. Desktop Layout

At a normal laptop/desktop width:

- [ ] Main content is centered
- [ ] Content does not stretch excessively across a wide screen
- [ ] Sections are visually separated
- [ ] Employee ID and Expense Date appear in one row
- [ ] Category and Amount appear in one row
- [ ] Description uses the full available form width
- [ ] Form controls are aligned consistently
- [ ] Button is clearly identifiable

---

## 3. Form Usability

- [ ] Every control still has a visible label
- [ ] Labels remain readable
- [ ] Required fields remain identifiable
- [ ] Clicking a label still focuses/toggles the correct control
- [ ] Native HTML validation still works
- [ ] CSS has not removed the meaning or function of the form

---

## 4. Responsive Test

Resize the browser to a narrow width.

Expected:

- [ ] Two-column form rows stack vertically
- [ ] No important content is cut off horizontally
- [ ] Text remains readable
- [ ] Input controls fit within the screen
- [ ] Submit button becomes full width
- [ ] Reference-data cards remain readable

---

## 5. Keyboard / Focus Test

Use `Tab` and `Shift+Tab`.

- [ ] Focus moves through controls logically
- [ ] Focus is visually obvious
- [ ] Submit button has visible focus
- [ ] Hover styling does not replace keyboard focus styling

---

## 6. Native Constraint Regression Tests

CSS must not change the Week 4 form rules.

### Blank required field

Expected: browser blocks submission.

### Amount = `0`

Expected: browser rejects it because `min="0.01"`.

### Amount = `184.50`

Expected: accepted by native validation.

### Amount = `5600`

Expected: still accepted as valid input.

The amount must **not** be rejected simply because director approval will later be required.

---

## 7. Known Week 5 Limitations

The interface still does not dynamically enforce:

```text
if expenseAmount > 75:
    receiptAttached must be true
```

and it does not dynamically determine:

```text
directorApprovalRequired
status
transactionId
timestamps
```

Those require later JavaScript and application logic.

---

## Week 5 Definition of Done

The interface should now:

- look organized and professional,
- preserve semantic HTML,
- remain accessible,
- use reusable CSS classes,
- work at desktop and narrow widths,
- still represent the same Week 3 transaction design.

It should **look like a complete interface even though intelligent behavior has not been added yet**.

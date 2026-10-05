# Week 7 — Validation Testing Checklist

## Before Testing

- [ ] `app.js` is connected to the HTML page.
- [ ] Browser console shows no JavaScript errors.
- [ ] Expense Amount and Receipt controls still have correct IDs.
- [ ] Native HTML constraints still work.

---

## Receipt Rule Boundary Tests

Business rule:

```text
receipt required when amount > 75
```

| Amount | Receipt Checked? | Expected Browser Result |
|---:|:---:|---|
| 50.00 | No | Receipt not required |
| 75.00 | No | Receipt not required |
| 75.01 | No | Receipt required / submission blocked |
| 75.01 | Yes | Receipt requirement satisfied |

---

## Director Approval Boundary Tests

Business rule:

```text
director approval required when amount > 5000
```

| Amount | Expected Message |
|---:|---|
| 4999.99 | Standard approval path |
| 5000.00 | Standard approval path |
| 5000.01 | Director approval required |
| 5600.00 | Director approval required |

---

## Combined Submit Tests

### Test A — $50, no receipt

Expected:
- client-side checks pass
- standard approval path

### Test B — $100, no receipt

Expected:
- receipt error appears
- browser-side submission does not continue
- focus moves to the receipt checkbox

### Test C — $100, receipt attached

Expected:
- receipt requirement satisfied
- client-side checks pass

### Test D — $5,600, receipt attached

Expected:
- receipt requirement satisfied
- director approval required
- client-side checks pass

---

## Regression Checks

- [ ] Required HTML fields still work.
- [ ] Amount `0` is still rejected by native HTML validation.
- [ ] Amount `5600` is **not** rejected as invalid.
- [ ] Responsive CSS from Week 5 still works.
- [ ] Week 6 approval message still updates while typing.

---

## Week 7 Definition of Done

The browser interface should now:

- react to relevant field changes,
- evaluate at least one conditional rule,
- give useful visible feedback,
- block a known invalid conditional case,
- preserve the distinction between client-side help and trusted server enforcement.

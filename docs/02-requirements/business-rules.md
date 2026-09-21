# Business Rules

Business rules define organizational policy and transaction behavior. They are not all the same as field validation.

| Rule ID | Rule | Type | Later Enforcement |
|---|---|---|---|
| BR-01 | Expense amount must be greater than `0` | Validation / business constraint | Browser for early feedback + application authoritative validation |
| BR-02 | Receipt evidence is required when amount is greater than `$75` | Conditional business rule | JavaScript for UX + application authoritative enforcement |
| BR-03 | Expenses greater than `$5,000` require director approval | Routing / approval rule | Application logic |
| BR-04 | A request must have a unique transaction ID once officially submitted | Identity rule | Application generates; data tier persists |
| BR-05 | Only valid state transitions may update official transaction status | State-control rule | Application logic |
| BR-06 | A rejected request cannot proceed to reimbursement processing | Workflow rule | Application logic |
| BR-07 | Important approval and completion events must have trusted timestamps | Audit rule | Application creates event; data tier persists |
| BR-08 | A high-value request cannot be completed without required director approval | Authorization / completion rule | Application logic |

---

## Validation vs. Business Rule Examples

### Example A — Invalid value

`amount = -10`

The amount is unusable because the expense amount must be greater than zero.

### Example B — Valid value, different workflow

`amount = 5600`

The amount itself is valid. The transaction must follow the director-approval path.

### Example C — Conditional requirement

`amount = 100` and `receiptAttached = false`

The amount is valid, but the transaction violates the receipt rule.

---

## Week 4 Implementation Note

Basic HTML can express simple field constraints such as:

```html
<input type="number" min="0.01" step="0.01" required>
```

Basic HTML cannot correctly express the full conditional rule:

> Receipt is required only when `amount > 75`.

That rule will be implemented later with JavaScript for user feedback and later again in application logic for authoritative enforcement.

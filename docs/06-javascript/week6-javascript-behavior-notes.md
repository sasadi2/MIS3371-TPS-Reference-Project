# Week 6 — JavaScript Behavior Notes

## Objective

Week 6 adds the first behavior to the same Expense Reimbursement interface developed in Weeks 4–5.

The progression is:

```text
HTML = structure + meaning
CSS = presentation + layout
JavaScript = browser-side behavior
```

The current reference implementation demonstrates only a small, purposeful behavior: when the employee enters an expense amount, the page explains whether the amount follows the standard approval path or requires director approval.

## Concepts Demonstrated

- external `app.js`
- `const`
- numbers and strings
- `Number(...)` conversion
- `if / else`
- a reusable function
- `document.querySelector(...)`
- `.value`
- `.textContent`
- `addEventListener(...)`
- `input` event
- `submit` event
- `preventDefault()` for the classroom demo

## Business Rule Used

```text
If expenseAmount > 5000:
    directorApprovalRequired = true
else:
    directorApprovalRequired = false
```

The amount itself remains valid. JavaScript is demonstrating how the page can react to a valid value whose business meaning changes the transaction path.

## Important Boundary

The Week 6 browser code is **not the authoritative business layer**. Later application/server logic must still validate trusted business rules and valid state transitions.

## What Is Not Implemented Yet

- conditional receipt enforcement
- complete client-side validation
- reviewer actions
- official state transitions
- transaction ID generation
- API requests
- database persistence
- authentication / authorization

Those are later steps.

# Week 4 Interface Notes
## Comprehensive Reference Page

## Objective

The Week 4 reference page now shows **every field in the Expense Reimbursement data dictionary**.

This is intentional: students should be able to see how the full transaction data model relates to the browser interface.

However, the page also demonstrates an important design principle:

> **Not every transaction field should be editable by the user.**

---

## Field Groups Shown on the Page

### 1. Employee-entered business data

These values are collected with actual HTML form controls:

- `employeeId`
- `expenseDate`
- `expenseCategory`
- `expenseAmount`
- `description`
- `receiptAttached`

These are the fields the employee is responsible for supplying.

---

### 2. Derived / reference data

These values are displayed as transaction information, but are not employee-editable:

- `employeeName`
- `department`
- `managerId`
- `receiptRequired`
- `directorApprovalRequired`

Later, application logic or organizational reference data will provide them.

---

### 3. System / control data

These values are part of the official transaction record and must be controlled by the system:

- `transactionId`
- `status`

A user should not be allowed to type or arbitrarily change these official values.

---

### 4. Review / audit data

These values support review decisions and history:

- `submittedAt`
- `reviewedAt`
- `directorReviewedAt`
- `completedAt`
- `rejectionReason`

Most of these values appear later in the transaction lifecycle.

---

## Why We Do Not Use Inputs for Every Field

A comprehensive data dictionary does **not** mean every field belongs in the employee form.

For example, this would be a poor design:

```html
<label for="status">Status</label>
<input id="status" name="status" value="Approved">
```

because it suggests that the user controls the official transaction state.

Instead, the reference page presents system-controlled values as descriptive information using semantic HTML.

---

## Native HTML Constraints

The employee form still uses only appropriate Week 4 constraints.

For amount:

```html
<input
  id="expenseAmount"
  name="expenseAmount"
  type="number"
  min="0.01"
  step="0.01"
  required>
```

The page intentionally does **not** use `max="5000"` because an amount above `$5,000` is valid data.

It simply changes the approval workflow later.

---

## Conditional Receipt Rule

Business rule:

> If `expenseAmount > 75`, receipt evidence is required.

Basic HTML alone cannot fully implement this conditional dependency.

The Week 4 page therefore shows:

- `expenseAmount`
- `receiptAttached`
- `receiptRequired`

but does not yet calculate or enforce the conditional relationship.

That will come later with JavaScript and authoritative application logic.

---

## Current Scope

Implemented:

- semantic structure,
- full data-model visibility,
- accessible employee form,
- appropriate controls,
- labels,
- native HTML constraints.

Not implemented yet:

- CSS,
- JavaScript,
- dynamic calculations,
- business-rule execution,
- API/backend,
- database persistence,
- authentication.

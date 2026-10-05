# Week 7 — Validation and Business-Rule Behavior

## Goal

Week 7 makes the browser-side transaction interface more useful by combining the JavaScript skills from Week 6 with **conditional validation and business rules**.

The progression is:

```text
HTML constraints
    +
JavaScript conditional rules
    +
DOM events/messages
    ↓
Better client-side transaction behavior
```

This is still **not trusted server enforcement**. Browser-side JavaScript can be changed or bypassed, so critical rules must also be enforced by application/server logic later.

---

## Rule 1 — Receipt Required

Business rule:

> Receipt evidence is required when `expenseAmount > 75`.

Reusable function:

```javascript
function requiresReceipt(amount) {
  return amount > 75;
}
```

The condition is intentionally `>` rather than `>=`.

- `$75.00` → receipt not required by this rule
- `$75.01` → receipt required

---

## Rule 2 — Director Approval

Business rule:

> Director approval is required when `expenseAmount > 5000`.

```javascript
function requiresDirectorApproval(amount) {
  return amount > 5000;
}
```

This is a routing/business rule, not an input-validity rule.

`5600` is still a valid amount. It simply follows a different approval path.

---

## Checkbox Values

Text/number controls are commonly read with `.value`.

A checkbox is read with `.checked`:

```javascript
const receiptAttached = receiptCheckbox.checked;
```

`.checked` returns a Boolean:

```text
true
false
```

---

## Event Listeners

Two controls affect the receipt rule:

- expense amount
- receipt checkbox

Therefore the page listens to both:

```javascript
amountInput.addEventListener('input', updateAmountRelatedMessages);
receiptCheckbox.addEventListener('change', handleReceiptChange);
```

The user should receive updated feedback when either input changes.

---

## Submit-Time Validation

The submit handler becomes the browser-side checkpoint:

```javascript
function handleSubmit(event) {
  event.preventDefault();

  const amount = Number(amountInput.value);

  if (requiresReceipt(amount) && !receiptCheckbox.checked) {
    formMessage.textContent =
      'Cannot continue: attach receipt evidence for an expense greater than $75.';
    receiptCheckbox.focus();
    return;
  }

  formMessage.textContent = 'Client-side checks passed.';
}
```

The `return` stops the function when a required condition has not been satisfied.

---

## HTML Validation vs. JavaScript Validation

Use HTML when the rule is simple and directly belongs to one control:

```html
<input type="number" min="0.01" required>
```

Use JavaScript when the rule depends on multiple values or conditions:

```text
IF amount > 75
AND receipt is not attached
THEN block the browser-side submission
```

---

## Important Architecture Reminder

Week 7 JavaScript improves UX and catches problems early.

It is **not the authoritative security/control layer**.

Later application/server logic must independently enforce critical business rules before an official transaction is accepted or persisted.

---

## What Happens Next

Week 7 remains entirely client-side, but the course moves faster after this checkpoint:

```text
Week 8
Finish/test client side + Milestone 2
JSON + HTTP + REST + first fetch() demonstration
    ↓
Week 9
REST/fetch + local backend concept
AWS Lambda + API Gateway
    ↓
Week 10
DynamoDB: save + retrieve transaction
    ↓
Weeks 11–12
End-to-end integration + final testing/release
    ↓
Week 13
Buffer + presentation preparation
    ↓
Weeks 14–15
Four final presentation sessions
```

The same business rules shown in the browser will later be enforced again by trusted backend logic before the transaction is stored.

---

## What Students Should Adapt

Students should not copy the expense thresholds unless those rules belong to their scenario.

Each team should use existing rules from its own project, for example:

- reservation requires a deposit above a defined amount,
- appointment requires additional information for a particular service,
- return requires manager review after a defined number of days,
- service ticket requires escalation for a particular severity.

The rule must match the team's own requirements, business rules, workflow, and data.

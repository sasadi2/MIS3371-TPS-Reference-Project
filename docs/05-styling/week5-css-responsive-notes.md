# Week 5 — CSS and Responsive Interface Notes

## Objective

Week 5 keeps the **same Expense Reimbursement transaction** from Weeks 1–4 and adds presentation and layout.

The system design does not change because CSS is introduced.

The progression is:

```text
Week 3 design
    ↓
Week 4 semantic HTML + form
    ↓
Week 5 CSS + responsive interface
    ↓
Week 6 JavaScript behavior
```

---

## 1. External Stylesheet

The HTML connects to CSS in the document `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

The stylesheet is stored separately:

```text
src/
├── index.html
└── styles.css
```

This separation is intentional:

- HTML describes **structure and meaning**.
- CSS describes **presentation and layout**.

---

## 2. CSS Rule Anatomy

Example:

```css
.card {
  padding: 24px;
  background: #ffffff;
}
```

- `.card` = selector
- `padding` = property
- `24px` = value
- `background` = property
- `#ffffff` = value

---

## 3. Why Classes Are Used

A class allows one style to be reused across multiple elements.

Example HTML:

```html
<section class="card">
```

Example CSS:

```css
.card {
  padding: 24px;
  background: #ffffff;
  border: 1px solid #dddddd;
}
```

The same class can be applied to multiple sections without duplicating the style.

---

## 4. Box Model and Spacing

The stylesheet uses:

```css
* {
  box-sizing: border-box;
}
```

This makes width calculations easier because the declared size includes padding and borders.

Important spacing concepts:

- `padding` = space **inside** an element
- `margin` = space **outside** an element
- `border` = edge around an element

Example:

```css
.card {
  margin-bottom: 22px;
  padding: 24px;
  border: 1px solid #dddddd;
}
```

---

## 5. Form Styling

The form controls share a consistent visual contract:

```css
input,
select,
textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #aaaaaa;
  border-radius: 6px;
}
```

This improves readability without changing the form's business meaning.

CSS does **not** decide:

- whether an expense is valid,
- whether director approval is required,
- what the official status is.

Those remain application/business responsibilities.

---

## 6. Flexbox Layout

Related fields use a reusable row:

```html
<div class="form-row">
  <div class="form-group">...</div>
  <div class="form-group">...</div>
</div>
```

CSS:

```css
.form-row {
  display: flex;
  gap: 18px;
}

.form-group {
  flex: 1;
}
```

This allows two related fields to share a row on larger screens.

The reference project intentionally uses **Flexbox rather than a more advanced layout system** because Flexbox is sufficient for this stage.

---

## 7. Responsive Behavior

The page should remain usable on a narrow browser or mobile-sized screen.

The reference stylesheet uses one media query:

```css
@media (max-width: 700px) {
  .form-row {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}
```

Above the breakpoint, related fields can sit next to each other.

Below the breakpoint, they stack vertically.

---

## 8. Focus and Hover

The interface includes visible interaction feedback:

```css
input:focus,
select:focus,
textarea:focus {
  outline: 3px solid rgba(200, 16, 46, 0.18);
  border-color: #c8102e;
}
```

and:

```css
button:hover {
  background: #980c23;
}
```

`:focus` is especially important for keyboard users.

---

## 9. Comprehensive Transaction Data

All data-dictionary fields remain visible in the reference interface, but only appropriate employee fields are editable.

### Employee-entered fields

- `employeeId`
- `expenseDate`
- `expenseCategory`
- `expenseAmount`
- `description`
- `receiptAttached`

### Derived / reference fields

- `employeeName`
- `department`
- `managerId`
- `receiptRequired`
- `directorApprovalRequired`

### System / control fields

- `transactionId`
- `status`

### Review / audit fields

- `submittedAt`
- `reviewedAt`
- `directorReviewedAt`
- `completedAt`
- `rejectionReason`

CSS changes how these items are presented. It does not change who is responsible for producing or controlling the underlying data.

---

## 10. What Is Still Missing

At the end of Week 5, the reference project intentionally has **no JavaScript**.

Therefore it does not yet:

- calculate `receiptRequired`,
- calculate `directorApprovalRequired`,
- react dynamically to form values,
- create an official transaction ID,
- change official status,
- call an API,
- save data.

That is expected.

Week 6 begins JavaScript and DOM/event behavior.

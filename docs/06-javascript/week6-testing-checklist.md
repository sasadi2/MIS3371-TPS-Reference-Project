# Week 6 — JavaScript Testing Checklist

## 1. File Connection

- [ ] `src/app.js` exists
- [ ] `index.html` includes `<script src="app.js" defer></script>`
- [ ] Browser console shows no JavaScript errors

## 2. Amount Behavior

Test the Expense Amount field.

### Blank amount
Expected: approval message is blank.

### Amount = `250`
Expected: `Standard approval path.`

### Amount = `5000`
Expected: `Standard approval path.`

### Amount = `5000.01`
Expected: `Director approval will be required.`

### Amount = `5600`
Expected: `Director approval will be required.`

## 3. Boundary Meaning

The business rule is **greater than** $5,000, not greater than or equal to $5,000.

Therefore:

```text
5000     -> standard approval path
5000.01  -> director approval required
```

## 4. Submit Behavior

- [ ] Clicking Submit does not navigate away from the page in the Week 6 demo
- [ ] Console shows the demo submit message
- [ ] Native required-field validation still operates before a valid submit event is handled

## 5. Known Week 6 Limitations

Do not expect the page to:

- require a receipt dynamically above $75,
- enforce all business rules,
- send JSON,
- call an API,
- save a transaction.

Week 7 expands validation and business-rule behavior.

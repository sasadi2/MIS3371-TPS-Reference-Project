# Responsibility Matrix

This matrix prevents the team from placing important behavior in the wrong system tier.

| Responsibility | Presentation | Application | Data |
|---|:---:|:---:|:---:|
| Display transaction form | ✅ |  |  |
| Collect employee input | ✅ |  |  |
| Show immediate required-field feedback | ✅ |  |  |
| Improve keyboard/accessibility behavior | ✅ |  |  |
| Perform optional client-side UX validation | ✅ |  |  |
| Authoritatively validate submitted transaction |  | ✅ |  |
| Apply receipt rule | UX only | ✅ |  |
| Apply >$5,000 approval rule | UX only later | ✅ |  |
| Authorize manager/director actions |  | ✅ |  |
| Generate official transaction ID |  | ✅ |  |
| Validate state transition |  | ✅ |  |
| Create trusted audit timestamp |  | ✅ |  |
| Store transaction ID |  |  | ✅ |
| Store official transaction data |  |  | ✅ |
| Store official status |  |  | ✅ |
| Persist audit/history |  |  | ✅ |

---

## Key Principle

The browser can help the user, but it is not the final authority.

For example:

```html
<input type="number" min="0.01" required>
```

is useful browser feedback.

Later, the application must still validate the submitted value because client-side behavior can be bypassed.

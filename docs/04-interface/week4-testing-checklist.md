# Week 4 Browser Testing Checklist
## Comprehensive Reference Page

## Page Structure

- [ ] Page loads without obvious structural errors
- [ ] Browser tab has a meaningful title
- [ ] Page has one clear `h1`
- [ ] Primary content is inside `main`
- [ ] Major data groups are separated into meaningful sections

## Employee-Entered Fields

- [ ] Employee ID is present
- [ ] Expense date uses a date input
- [ ] Expense category uses a select control
- [ ] Expense amount uses a numeric input
- [ ] Description uses a textarea
- [ ] Receipt indicator uses a checkbox
- [ ] Every editable field has a visible label
- [ ] Label `for` values match control `id` values
- [ ] Every submitted field has a `name`

## Comprehensive Data Visibility

Verify the page also shows:

- [ ] employeeName
- [ ] department
- [ ] managerId
- [ ] receiptRequired
- [ ] directorApprovalRequired
- [ ] transactionId
- [ ] status
- [ ] submittedAt
- [ ] reviewedAt
- [ ] directorReviewedAt
- [ ] completedAt
- [ ] rejectionReason

These should be visible as reference/system information rather than employee-editable controls.

## Native Constraint Tests

### Blank required field
Expected: browser prevents submission.

### Amount = 0
Expected: browser rejects it because `min="0.01"`.

### Amount = 184.50
Expected: accepted by native HTML validation.

### Amount = 5600
Expected: still accepted as valid data.

The page must not treat `$5,000` as the maximum valid amount.

## Keyboard Check

- [ ] Tab order through employee controls is logical
- [ ] Shift+Tab works in reverse
- [ ] Clicking a label focuses/toggles its associated control when appropriate

## Known Week 4 Limitations

The page does not yet dynamically calculate:

- `receiptRequired`
- `directorApprovalRequired`
- `status`
- timestamps

That behavior will be implemented in later weeks.

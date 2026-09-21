# User Stories and Acceptance Criteria

## US-01 — Submit an expense request

**As an employee, I want to submit a business expense so that I can request reimbursement.**

### Acceptance criteria

- Employee can provide required expense information.
- Amount must be numeric and greater than zero.
- Required fields cannot be left empty.
- A valid submitted request receives an official transaction ID.
- The request receives an initial official submitted/review status.

---

## US-02 — Know when a receipt is required

**As an employee, I want the system to tell me when receipt evidence is required so that my request is complete.**

### Acceptance criteria

- If `amount <= 75`, the receipt-threshold rule does not require a receipt.
- If `amount > 75`, receipt evidence is required.
- The application does not treat the `$75` threshold as a maximum valid expense amount.

---

## US-03 — Manager review

**As a manager, I want to review an employee expense request so that I can approve or reject it according to policy.**

### Acceptance criteria

- Only requests in an appropriate review state can receive a manager decision.
- Manager can approve or reject.
- The decision changes the official transaction state.
- The review event is auditable.

---

## US-04 — Director review for high-value expenses

**As a director, I want high-value expenses routed to me so that the organization follows its approval policy.**

### Acceptance criteria

- Expenses `<= $5,000` do not require director approval under this rule.
- Expenses `> $5,000` require director approval.
- `$5,600` is valid data; it is not rejected simply because it exceeds `$5,000`.
- The transaction cannot become fully approved until required director approval is completed.

---

## US-05 — Process an approved reimbursement

**As a finance user, I want to process only fully approved requests so that reimbursements are based on authorized transactions.**

### Acceptance criteria

- Finance cannot process a rejected request.
- A high-value request must have completed all required approvals.
- Completion is recorded as an official state.
- Completion time is auditable.

---

## US-06 — Understand transaction status

**As an employee, I want to know the current status of my request so that I understand where it is in the process.**

### Acceptance criteria

- The transaction has one official current status.
- The status is separate from the transaction ID.
- The transaction ID remains stable while status changes.

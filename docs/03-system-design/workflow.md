# Transaction Workflow
## Expense Reimbursement Request

Workflow models **actions, decisions, actors, and paths**.

It answers:

> **What happens next?**

---

## Main Workflow

```mermaid
flowchart TD
    A[Employee starts request] --> B[Enter expense information]
    B --> C[Submit request]
    C --> D{Required data valid?}

    D -- No --> E[Show validation feedback]
    E --> B

    D -- Yes --> F{Amount > $75?}
    F -- Yes --> G{Receipt provided?}
    G -- No --> H[Request receipt / prevent completion of submission]
    H --> B
    G -- Yes --> I[Create official submitted transaction]
    F -- No --> I

    I --> J[Manager reviews request]
    J --> K{Manager decision}

    K -- Reject --> R[Record rejection]
    K -- Approve --> L{Amount > $5,000?}

    L -- No --> M[Mark approved]
    L -- Yes --> N[Director reviews request]

    N --> O{Director decision}
    O -- Reject --> R
    O -- Approve --> M

    M --> P[Finance processes reimbursement]
    P --> Q[Mark transaction completed]

    R --> Z[End]
    Q --> Z
```

---

## Workflow Explanation

### Employee submission

The employee enters the transaction data and attempts submission.

The system first determines whether submitted values are usable. A missing employee ID or non-positive amount is a validation problem.

### Receipt decision

If the amount is greater than `$75`, receipt evidence is required.

This is a conditional business rule. It is not appropriate to make the receipt universally required because low-value requests do not require one under this reference policy.

### Manager review

Every valid submitted request is routed to manager review.

The manager may:

- approve, or
- reject.

### High-value routing

After manager approval, the system checks the amount:

- `amount <= 5000` → no director approval under BR-03
- `amount > 5000` → director approval required

### Finance processing

Only fully approved requests proceed to reimbursement processing.

---

## Exception / Failure Examples

A complete workflow should show more than the happy path.

Important exception paths include:

- invalid input,
- required receipt missing,
- manager rejection,
- director rejection.

Later course weeks may add technical failure handling such as API/database errors.

---

## Workflow vs. State Reminder

Examples of workflow actions:

- Employee submits request
- Manager reviews request
- Director approves request
- Finance processes reimbursement

Examples of states:

- Submitted
- Under Review
- Awaiting Director Approval
- Approved
- Completed
- Rejected

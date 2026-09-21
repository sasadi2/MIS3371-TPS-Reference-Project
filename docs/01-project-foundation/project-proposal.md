# Project Proposal
## Expense Reimbursement System

> **Reference only — use this to understand expected depth and organization.**

## 1. Proposed System

The proposed system is a web-based **Expense Reimbursement System** that allows employees to submit business expenses for review and reimbursement.

The system focuses on one primary transaction:

> **Expense Reimbursement Request**

The transaction begins when an employee prepares and submits an expense request and ends when the request is completed or rejected.

---

## 2. Business Need

A manual or fragmented reimbursement process can create several problems:

- Employees may omit required information.
- Receipts may be missing.
- Approval policies may be applied inconsistently.
- Employees may not know the current status of a request.
- Managers may receive incomplete submissions.
- High-value expenses may bypass required approval levels.
- Audit history may be difficult to reconstruct.
- Duplicate or inconsistent records may exist across email and spreadsheets.

The proposed system provides a structured transaction record and a consistent workflow.

---

## 3. Primary Users / Stakeholders

| Stakeholder | Primary Need |
|---|---|
| Employee | Submit a complete expense request and understand its status |
| Manager | Review requests and approve/reject within policy |
| Director | Review high-value expenses that require elevated approval |
| Finance / Accounts Payable | Process approved reimbursements |
| Auditor / Compliance | Review transaction history and policy evidence |
| System Administrator | Maintain reliable and secure operation |

---

## 4. Main Transaction

### Transaction name
**Expense Reimbursement Request**

### Transaction trigger
An employee has an eligible business expense that should be reimbursed.

### Transaction outcome
The request is either:

- completed and reimbursed, or
- rejected.

### Example transaction
Employee `E10427` submits a `$184.50` client-meal expense with a receipt. The request is reviewed by the employee's manager, approved, processed by Finance, and marked `Completed`.

---

## 5. Initial Scope

### In scope

- Capture employee and expense information
- Capture receipt indicator/information
- Validate required values
- Apply reimbursement business rules
- Route requests to the appropriate approval path
- Maintain an official transaction status
- Assign a unique transaction ID
- Record important timestamps
- Present transaction information to the user
- Support later persistence and audit history

### Out of scope for this course reference

- Real payroll integration
- Real banking/payment transfer
- OCR receipt extraction
- Corporate-card reconciliation
- Tax reporting
- Multi-currency conversion
- Production identity-provider integration
- Full enterprise accounting integration

---

## 6. Success Criteria

The reference system is successful when it demonstrates that a transaction can be:

1. entered through a usable interface,
2. validated,
3. evaluated against business rules,
4. assigned a controlled status,
5. routed through the correct approval path,
6. persisted as an official record,
7. retrieved and updated through a defined application/API flow, and
8. audited through transaction history.

Later course weeks will implement these capabilities progressively.

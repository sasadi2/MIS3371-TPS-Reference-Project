# Business Problem and Transaction Scope

## 1. Problem Statement

Employees need a reliable way to submit business expenses for reimbursement. A manual process based on email and spreadsheets can make it difficult to ensure that requests are complete, policy rules are followed consistently, approval responsibilities are clear, and status/history can be trusted.

The Expense Reimbursement System will create a consistent transaction record and a controlled approval workflow.

---

## 2. Business Objective

Create a transaction-processing workflow that makes reimbursement requests:

- easier to submit correctly,
- easier to review,
- consistent with approval policy,
- traceable,
- auditable, and
- ready for later cloud/API implementation.

---

## 3. Transaction Boundary

### Start
The employee begins a new reimbursement request.

### End
The request reaches either:

- `Completed`, or
- `Rejected`.

### System boundary

The reference system is responsible for:

- collecting transaction data,
- validating input,
- determining the required approval path,
- maintaining official transaction state,
- storing the transaction later in the semester,
- exposing the transaction later through an API,
- recording important events.

The reference system does **not** actually send money to the employee.

---

## 4. Main Scenario

1. Employee starts an expense request.
2. Employee enters expense information.
3. Employee submits the request.
4. The system validates required values.
5. The system checks whether a receipt is required.
6. The system determines the approval path.
7. The manager reviews the request.
8. High-value requests are routed for director approval.
9. Approved requests are sent for reimbursement processing.
10. The transaction is marked complete.

---

## 5. Important Exception Paths

The system must account for more than the happy path.

Examples:

- Required information is missing.
- Expense amount is zero or negative.
- A required receipt is missing.
- Manager rejects the request.
- Director rejects a high-value request.
- The system receives an invalid attempted state transition.
- A duplicate submission may need review later in the semester.

---

## 6. Assumptions

For the course reference project:

- Employees and reviewers already exist in an organization directory.
- Currency is USD.
- One request represents one expense item.
- A request belongs to one employee.
- Every employee has one assigned manager for approval.
- Finance processes an approved request after approval is complete.
- Authentication will be introduced later; Week 4 does not implement it.
- Database persistence and cloud services will be introduced later.

---

## 7. Non-Goals

The project intentionally avoids unnecessary enterprise complexity. It is designed to demonstrate the transaction lifecycle and system architecture clearly rather than reproduce every feature of a commercial expense-management platform.

# Stakeholders and Requirements

## 1. Stakeholder Analysis

| Stakeholder | Goal | Concern |
|---|---|---|
| Employee | Submit reimbursement correctly and understand status | Missing information, unclear status |
| Manager | Review appropriate requests efficiently | Incomplete requests, unclear policy |
| Director | Review only requests requiring elevated approval | High-value policy compliance |
| Finance | Process only fully approved requests | Incorrect status, missing approval |
| Auditor | Reconstruct what happened and when | Missing history or unreliable timestamps |
| Administrator | Maintain reliable operation | Security, access, maintainability |

---

## 2. Functional Requirements

### FR-01 — Create request
The system shall allow an employee to create an expense reimbursement request.

### FR-02 — Capture expense information
The system shall capture, at minimum:

- employee ID,
- expense date,
- category,
- amount,
- business description,
- receipt indicator.

### FR-03 — Validate required data
The system shall identify missing or unusable required values before a request is accepted for processing.

### FR-04 — Assign transaction identity
The application shall assign a unique transaction ID when a valid request becomes an official submitted transaction.

### FR-05 — Apply receipt rule
The system shall require receipt evidence when the expense amount is greater than `$75`.

### FR-06 — Apply approval threshold
The system shall route expenses greater than `$5,000` through director approval before final approval.

### FR-07 — Maintain official status
The application shall control valid transaction-state transitions.

### FR-08 — Support review decision
Authorized reviewers shall be able to approve or reject a request when it is in an appropriate review state.

### FR-09 — Record important events
The system shall record trusted timestamps for important events such as submission, review, approval, and completion.

### FR-10 — Preserve the official record
The data tier shall later persist the transaction ID, transaction data, official status, and audit/history information.

---

## 3. Nonfunctional Requirements

### NFR-01 — Usability
The transaction form should present fields in a clear order and provide meaningful labels.

### NFR-02 — Accessibility
The interface should use semantic HTML, explicit labels, logical keyboard order, and native controls when possible.

### NFR-03 — Security
Critical business rules, authorization, and official state transitions must not rely only on client-side code.

### NFR-04 — Reliability
The system should prevent invalid state transitions and preserve a consistent official record.

### NFR-05 — Maintainability
Field names, rules, statuses, and responsibilities should remain consistent across documentation and code.

---

## 4. Requirement Quality Check

A useful requirement should be:

- specific,
- testable,
- connected to a business need,
- clear about system responsibility,
- free of unnecessary implementation detail unless the technology is part of the course requirement.

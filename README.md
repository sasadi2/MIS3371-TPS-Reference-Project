# MIS 3371 — TPS I Reference Project
## Expense Reimbursement System

> **Instructor Reference Case Study — Do Not Copy**
>
> This repository demonstrates the expected **organization, depth, documentation quality, and semester progression** for the MIS 3371 capstone project. Students should use it as a reference for structure and quality. Your team's documentation, diagrams, business rules, data fields, and implementation must reflect **your own approved scenario**.

---

## Purpose of This Repository

The capstone project is not a collection of unrelated weekly assignments. It is one transaction-processing system that becomes more complete throughout the semester.

This reference project uses an **Expense Reimbursement System** to show how the pieces connect:

**Business problem → requirements → business rules → workflow → states → data → architecture → interface → behavior → API/cloud → deployment**

The repository will grow as the course progresses. Students are not expected to implement material that has not yet been covered in class.

### Current release: through Week 4

This version includes:

- Project foundation and scope
- Stakeholders and requirements
- User stories and acceptance criteria
- Business rules
- Traceability
- Workflow design
- State model
- Data dictionary
- Three-tier target architecture
- Responsibility matrix
- Semantic HTML transaction interface
- Accessible form controls
- Native browser constraints and basic testing

**Not implemented yet:** CSS, JavaScript, API calls, backend logic, database persistence, authentication, AWS deployment.

---

## Case Study Summary

Employees need a consistent way to submit business expenses for reimbursement. A manual or fragmented process can create incomplete submissions, unclear approval status, inconsistent policy enforcement, and weak auditability.

The proposed system allows an employee to submit an expense reimbursement request and provides a controlled path for review, approval, and completion.

### Main transaction

**Expense Reimbursement Request**

A request begins when an employee enters an eligible business expense and ends when the request is completed or rejected.

### Core business behavior

- Expense amount must be greater than zero.
- Receipt evidence is required when the amount is greater than $75.
- Expenses greater than $5,000 require director approval.
- The system must maintain a unique transaction ID.
- The official transaction status must be controlled by the application.
- Important actions must be auditable.

---

## Repository Structure

```text
MIS3371-TPS-Reference-Project/
│
├── README.md
├── docs/
│   ├── REFERENCE-GUIDE.md
│   ├── 01-project-foundation/
│   ├── 02-requirements/
│   ├── 03-system-design/
│   └── 04-interface/
└── src/
    └── index.html
```

---

## How to Use This Reference

When a class requirement asks your team to create a document or implementation artifact:

1. Read the assignment requirement first.
2. Open the corresponding reference file in this repository.
3. Study its **organization, level of detail, and connections to earlier documents**.
4. Build the equivalent artifact for your own approved transaction.
5. Do not replace your scenario with the Expense Reimbursement scenario.

A useful quality check is:

> **Can another person understand your system from your documentation without needing your team to explain missing pieces verbally?**

---

## Milestone Alignment

| Course Stage | Reference Evidence | Status |
|---|---|---|
| M1 — Project Foundation | Proposal, business problem, transaction scope, team charter | Complete |
| Requirements | Stakeholders, requirements, user stories, acceptance criteria, rules | Complete |
| Week 3 Design | Workflow, states, data dictionary, architecture, responsibility matrix | Complete |
| Week 4 Interface | Semantic HTML + accessible form | Complete |
| Week 5 | CSS + responsive user interface | Not released yet |
| Week 6–8 | JavaScript behavior, validation, business rules, testing | Not released yet |
| M3 | HTTP/JSON/Fetch + API/cloud integration | Not released yet |
| M4 | Release candidate, deployment, testing, final documentation | Not released yet |

---

## Reference Quality Standard

A strong capstone artifact should be:

- **Scenario-specific** — it clearly belongs to your approved transaction.
- **Consistent** — field names, rules, statuses, and responsibilities agree across documents.
- **Traceable** — implementation decisions connect back to requirements and business rules.
- **Complete enough to understand** — important assumptions are written down.
- **Simple enough to maintain** — avoid unnecessary complexity.
- **Professional** — organized, readable, and appropriate for a business systems project.

---

## Key Distinctions

### Workflow vs. state

- **Workflow** describes actions, decisions, actors, and paths.
- **State** describes what is currently true about the transaction.

Example:
- Workflow action: **Manager reviews request**
- Transaction state: **Under Review**

### Validation vs. business rule

- **Validation:** Is the value usable?
- **Business rule:** What should happen because of the value?

Example:
- `amount = -10` → invalid
- `amount = 5600` → valid, but director approval is required

### Transaction ID vs. status

- **Transaction ID:** Which transaction is this?
- **Status:** What is true about it now?

Example:
- `transactionId = EXP-2026-00418`
- `status = Under Review`

The ID remains stable while status changes.

---

## Week 4 Implementation Status

The current `src/index.html` intentionally contains:

- Semantic page structure
- A form
- Visible labels
- Appropriate HTML controls
- `id` and `name` attributes
- Native constraints such as `required`, `min`, and `step`
- `fieldset` and `legend`

The current implementation intentionally does **not** contain:

- Styling
- JavaScript behavior
- Conditional business-rule enforcement
- API integration
- Persistence
- Authentication

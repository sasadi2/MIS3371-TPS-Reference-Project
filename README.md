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

### Current release: through Week 7

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
- External CSS stylesheet
- Reusable CSS classes
- Form and content styling
- Flexbox layout
- Responsive behavior
- Focus and hover feedback

**Not implemented yet:** API calls, trusted backend enforcement, database persistence, authentication, AWS deployment.

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
│   ├── 04-interface/
│   ├── 05-styling/
│   ├── 06-javascript/
│   └── 07-validation-business-rules/
└── src/
    ├── index.html
    ├── styles.css
    └── app.js
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
| Week 5 | CSS + responsive user interface | Complete |
| Week 6 | JavaScript fundamentals, DOM, events, and first business-rule behavior | Complete |
| Week 7 | Conditional validation + additional business-rule behavior | Complete |
| Week 8 | Finish/test client side + Milestone 2 + JSON/HTTP/API introduction | Not released yet |
| Week 9 | REST + `fetch()` + local backend concept + AWS Lambda/API Gateway | Not released yet |
| Week 10 | DynamoDB persistence: save + retrieve transactions | Not released yet |
| Week 11 | End-to-end integration and debugging | Not released yet |
| Week 12 | Final testing + release candidate | Not released yet |
| Week 13 | Buffer + presentation preparation | Not released yet |
| Weeks 14–15 | Final project presentations (4 sessions) | Not released yet |


---

## Planned Second-Half Roadmap

The remaining course moves quickly from the completed client interface into a small serverless transaction-processing architecture:

- **Week 8:** finish and test the client-side system, complete Milestone 2, then introduce JSON, HTTP, REST, and a first `fetch()` example.
- **Week 9:** connect the browser to a backend concept, then move that logic into **AWS Lambda + API Gateway**.
- **Week 10:** add **DynamoDB** so teams can save and retrieve official transaction records.
- **Week 11:** complete end-to-end integration and debugging.
- **Week 12:** final testing and release-candidate work.
- **Week 13:** buffer and presentation preparation.
- **Weeks 14–15:** four final project presentation sessions.

The scope stays intentionally small: one main transaction path, one working API flow, and one persistent transaction record are more valuable than many partially implemented features.

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

## Week 7 Implementation Status

The current `src/index.html`, `src/styles.css`, and `src/app.js` now demonstrate:

- Semantic page structure
- A complete employee transaction form
- All data-dictionary fields represented on the page
- Visible labels and appropriate controls
- Native constraints such as `required`, `min`, and `step`
- External CSS
- Reusable classes
- Box-model spacing
- Styled form controls
- Flexbox layout
- Responsive behavior
- Visible focus and hover feedback
- External JavaScript connected with `defer`
- DOM selection and form-value reading
- Numeric conversion with `Number(...)`
- A reusable approval-rule function
- `input`, `change`, and `submit` event listeners
- Visible approval, receipt, and submit-result messages
- Conditional receipt rule based on amount + checkbox state
- Submit-time browser validation with an early `return`
- Boundary testing for `$75` and `$5,000` rules

The current implementation intentionally does **not** contain:

- Trusted server/application enforcement of business rules
- API integration
- Persistence
- Authentication

The project should now **look substantially complete and demonstrate its first browser-side behavior**, while still remaining intentionally incomplete as a full transaction-processing application.


## Week 7 Validation Status

The current `src/app.js` demonstrates a complete browser-side validation flow for two related business rules:

1. JavaScript reads the expense amount and receipt checkbox.
2. Reusable functions evaluate the `$75` receipt rule and `$5,000` approval rule.
3. `input` and `change` events keep visible feedback current.
4. The `submit` handler checks the conditional receipt requirement.
5. If the rule fails, the browser-side flow stops with an actionable message.
6. If checks pass, the page explains which approval path would apply.

This remains client-side behavior. The authoritative application/server tier must enforce the same critical rules later.

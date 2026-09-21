# Traceability Matrix

Traceability shows why a requirement exists and how it will eventually be verified.

| Business Need | Requirement | User Story | Rule(s) | Evidence / Test Direction |
|---|---|---|---|---|
| Complete submissions | FR-02, FR-03 | US-01 | BR-01 | Required fields and positive amount are checked |
| Receipt compliance | FR-05 | US-02 | BR-02 | Test amount below/above $75 with receipt absent/present |
| Consistent approvals | FR-06 | US-04 | BR-03, BR-08 | Test $5,000 and $5,000.01 boundaries |
| Reliable identity | FR-04 | US-01, US-06 | BR-04 | Verify unique stable transaction ID |
| Controlled lifecycle | FR-07, FR-08 | US-03, US-04 | BR-05, BR-06 | Attempt valid and invalid state transitions |
| Auditable history | FR-09, FR-10 | US-03, US-05 | BR-07 | Verify trusted timestamps/history records |
| Accessible entry | NFR-01, NFR-02 | US-01 | — | Keyboard, labels, semantic HTML checks |
| Trusted enforcement | NFR-03 | US-03, US-04 | BR-02, BR-03, BR-05, BR-08 | Confirm critical rules are enforced outside browser only |

---

## Why This Matters

A project is stronger when the team can answer:

- Why does this field exist?
- Which requirement does this feature satisfy?
- Which business rule controls this behavior?
- How will we test it?
- Which system tier is responsible?

If the team cannot trace an implementation decision back to a requirement or business need, the feature may be unnecessary or poorly defined.

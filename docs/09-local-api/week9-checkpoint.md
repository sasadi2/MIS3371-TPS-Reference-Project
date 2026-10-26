# Week 9 — Complete Local Frontend, Backend, and API Checkpoint (4 points)

## Required result
Continue your team's existing transaction system. Do not introduce a second HTML page or a parallel Week 9 browser script. Use the established `src/index.html`, `src/app.js`, and `src/styles.css` (adapt filenames if your approved project uses another clear structure). Connect your existing form to a local Express API using HTTP POST and JSON. The Express route delegates to your existing Week 8 backend/application business logic. **No AWS or database yet.**

## Reference files

- `src/index.html`: the one existing form; native HTML constraints and same IDs.
- `src/styles.css`: the existing style sheet, unchanged this week.
- `src/app.js`: existing live UI feedback plus one async submit listener with `fetch()`.
- `backend/backend.js`: existing `processExpense(expense)` validates all six reference inputs and returns a result.
- `backend/server.js`: `express.json()` + `express.static()` + one `POST /api/expenses` route. No duplicated business rules.
- `package.json`: Express dependency and `npm start` / `npm run test:backend` commands.
- `demo-requests/`: two manual JSON requests for API bypass/testing.

Our reference keys are `employeeId`, `expenseDate`, **`expenseCategory`**, `expenseAmount`, `description`, and `receiptAttached`. Category values are `client-meal`, `travel`, `lodging`, `office-supplies`, `other`. The reference uses `expenseCategory` throughout, not `category`; teams should use their own single consistent contract.

## How to run

Open the repository root in VS Code and run:

```bash
npm install
npm start
```

Visit `http://localhost:3000/` and submit the existing form. Open DevTools → Network and inspect the POST `expenses` request, JSON body, HTTP status (200 or 400), and JSON response. Stop the server with Control+C. To select another port, use `PORT=4000 npm start` on macOS/Linux.

In another terminal, run:

```bash
npm run test:backend
curl -i -X POST http://localhost:3000/api/expenses -H "Content-Type: application/json" --data-binary @demo-requests/rejected-no-receipt.json
curl -i -X POST http://localhost:3000/api/expenses -H "Content-Type: application/json" --data-binary @demo-requests/accepted-with-receipt.json
```

Expected: the $100 request without a receipt returns HTTP 400; with a receipt it returns HTTP 200 and `persisted: false`. These are local processing results only. `POST` does not automatically save a transaction. Browser validation improves UX but the backend must independently reject direct invalid JSON requests.

## Submission evidence / checkpoint review (4 points)

1. **1 point — Continuity:** Same existing HTML/CSS/JS frontend; one form, one submit handler, no duplicate `week9-api.js`/`week9.html`; scenario-specific six-field contract is consistent.
2. **1 point — Local Express:** JSON parsing, static frontend, working POST endpoint, startup through npm; route delegates business logic rather than reimplementing it.
3. **1 point — Connected flow:** Browser `fetch()` submits JSON; HTTP 200/400 and backend message are handled without page navigation; button is restored following the attempt.
4. **1 point — Evidence and teamwork:** Show successful and rejected flow with Network or direct API evidence, correct repo structure/access, leader activity tracker, and attributable member contributions.

Keep existing prior-week documentation and update only what Week 9 adds. No database, cloud deployment, authentication implementation, or full duplicate-protection system is required in this checkpoint.

// MIS 3371 — WEEK 7 REFERENCE JAVASCRIPT
// Week 7 goal: combine browser-side validation, business rules, DOM events,
// and useful messages before the project moves to integration/testing.
//
// Important: browser JavaScript improves the user experience, but critical
// business rules must still be enforced by trusted application/server logic later.

const MIN_EXPENSE_AMOUNT = 0.01;
const RECEIPT_THRESHOLD = 75;
const DIRECTOR_APPROVAL_THRESHOLD = 5000;

const form = document.querySelector('#expenseForm');
const amountInput = document.querySelector('#expenseAmount');
const receiptCheckbox = document.querySelector('#receiptAttached');
const approvalMessage = document.querySelector('#approvalMessage');
const receiptMessage = document.querySelector('#receiptMessage');
const formMessage = document.querySelector('#formMessage');


// ---------------------------------------------------------
// BUSINESS / VALIDATION FUNCTIONS
// ---------------------------------------------------------

function isAmountInAcceptedRange(amount) {
  return Number.isFinite(amount) && amount >= MIN_EXPENSE_AMOUNT;
}

function requiresReceipt(amount) {
  return amount > RECEIPT_THRESHOLD;
}

function requiresDirectorApproval(amount) {
  return amount > DIRECTOR_APPROVAL_THRESHOLD;
}


// ---------------------------------------------------------
// MESSAGE HELPERS
// ---------------------------------------------------------

function clearFormMessage() {
  formMessage.textContent = '';
  formMessage.className = 'form-message';
}

function clearReceiptMessage() {
  receiptMessage.textContent = '';
  receiptMessage.className = 'validation-message';
}


// ---------------------------------------------------------
// LIVE AMOUNT / APPROVAL FEEDBACK
// ---------------------------------------------------------

function updateApprovalMessage() {

  // If the field is empty, do not show a decision yet.
  if (amountInput.value === '') {
    approvalMessage.textContent = '';
    approvalMessage.className = 'decision-message';
    return;
  }

  const amount = Number(amountInput.value);

  // VALIDATE FIRST.
  // Do not apply approval-routing rules to an invalid amount.
  if (!isAmountInAcceptedRange(amount)) {
    approvalMessage.textContent =
      'Amount is outside the accepted range. Enter an amount greater than $0.00.';
    approvalMessage.className = 'decision-message error-message';
    return;
  }

  // Only valid amounts should reach the business-rule decision.
  if (requiresDirectorApproval(amount)) {
    approvalMessage.textContent = 'Director approval will be required.';
  } else {
    approvalMessage.textContent = 'Standard approval path.';
  }

  approvalMessage.className = 'decision-message';
}


// ---------------------------------------------------------
// RECEIPT FEEDBACK
// ---------------------------------------------------------

function updateReceiptMessage() {

  if (amountInput.value === '') {
    clearReceiptMessage();
    return;
  }

  const amount = Number(amountInput.value);

  // If the amount itself is invalid, stop here.
  // Receipt rules should not run on invalid transaction data.
  if (!isAmountInAcceptedRange(amount)) {
    clearReceiptMessage();
    return;
  }

  if (requiresReceipt(amount) && !receiptCheckbox.checked) {
    receiptMessage.textContent =
      'Receipt is required for expenses greater than $75.';
    receiptMessage.className =
      'validation-message error-message';

  } else if (requiresReceipt(amount) && receiptCheckbox.checked) {
    receiptMessage.textContent =
      'Receipt requirement satisfied.';
    receiptMessage.className =
      'validation-message success-message';

  } else if (receiptCheckbox.checked) {
    receiptMessage.textContent =
      'Receipt attached. It is optional for this amount.';
    receiptMessage.className =
      'validation-message success-message';

  } else {
    receiptMessage.textContent =
      'Receipt is not required for this amount.';
    receiptMessage.className =
      'validation-message info-message';
  }
}


// ---------------------------------------------------------
// EVENT HANDLERS
// ---------------------------------------------------------

function updateAmountRelatedMessages() {
  updateApprovalMessage();
  updateReceiptMessage();
  clearFormMessage();
}

function handleReceiptChange() {
  updateReceiptMessage();
  clearFormMessage();
}

function handleSubmit(event) {

  // No backend exists yet, so keep the page in place for the Week 7 demo.
  event.preventDefault();

  const amount = Number(amountInput.value);

  // Check basic amount validity BEFORE applying business rules.
  if (!isAmountInAcceptedRange(amount)) {
    formMessage.textContent =
      'Cannot continue: the expense amount is outside the accepted range.';
    formMessage.className =
      'form-message error-message';

    amountInput.focus();
    return;
  }

  // Conditional business rule:
  // expenses above $75 require receipt evidence.
  if (requiresReceipt(amount) && !receiptCheckbox.checked) {
    formMessage.textContent =
      'Cannot continue: attach receipt evidence for an expense greater than $75.';
    formMessage.className =
      'form-message error-message';

    receiptCheckbox.focus();
    return;
  }

  // A valid high-value amount is NOT rejected.
  // It simply follows a different approval path.
  if (requiresDirectorApproval(amount)) {
    formMessage.textContent =
      'Client-side checks passed. This request would route to director approval.';
  } else {
    formMessage.textContent =
      'Client-side checks passed. This request would follow the standard approval path.';
  }

  formMessage.className =
    'form-message success-message';
}


// ---------------------------------------------------------
// EVENT LISTENERS
// ---------------------------------------------------------

amountInput.addEventListener(
  'input',
  updateAmountRelatedMessages
);

receiptCheckbox.addEventListener(
  'change',
  handleReceiptChange
);

form.addEventListener(
  'submit',
  handleSubmit
);

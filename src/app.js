// MIS 3371 — WEEK 7 REFERENCE JAVASCRIPT
// Week 7 goal: combine browser-side validation, business rules, DOM events,
// and useful messages before the project moves to integration/testing.
//
// Important: browser JavaScript improves the user experience, but critical
// business rules must still be enforced by trusted application/server logic later.

const RECEIPT_THRESHOLD = 75;
const DIRECTOR_APPROVAL_THRESHOLD = 5000;

const form = document.querySelector('#expenseForm');
const amountInput = document.querySelector('#expenseAmount');
const receiptCheckbox = document.querySelector('#receiptAttached');
const approvalMessage = document.querySelector('#approvalMessage');
const receiptMessage = document.querySelector('#receiptMessage');
const formMessage = document.querySelector('#formMessage');

function requiresReceipt(amount) {
  return amount > RECEIPT_THRESHOLD;
}

function requiresDirectorApproval(amount) {
  return amount > DIRECTOR_APPROVAL_THRESHOLD;
}

function clearFormMessage() {
  formMessage.textContent = '';
  formMessage.className = 'form-message';
}

function updateApprovalMessage() {
  const amount = Number(amountInput.value);

  if (amountInput.value === '') {
    approvalMessage.textContent = '';
    return;
  }

  if (requiresDirectorApproval(amount)) {
    approvalMessage.textContent = 'Director approval will be required.';
  } else {
    approvalMessage.textContent = 'Standard approval path.';
  }
}

function updateReceiptMessage() {
  const amount = Number(amountInput.value);

  if (amountInput.value === '') {
    receiptMessage.textContent = '';
    receiptMessage.className = 'validation-message';
    return;
  }

  if (requiresReceipt(amount) && !receiptCheckbox.checked) {
    receiptMessage.textContent = 'Receipt is required for expenses greater than $75.';
    receiptMessage.className = 'validation-message error-message';
  } else if (requiresReceipt(amount) && receiptCheckbox.checked) {
    receiptMessage.textContent = 'Receipt requirement satisfied.';
    receiptMessage.className = 'validation-message success-message';
  } else if (receiptCheckbox.checked) {
    receiptMessage.textContent = 'Receipt attached. It is optional for this amount.';
    receiptMessage.className = 'validation-message success-message';
  } else {
    receiptMessage.textContent = 'Receipt is not required for this amount.';
    receiptMessage.className = 'validation-message info-message';
  }
}

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

  // Native HTML constraints handle required fields and amount > 0.
  // This custom JavaScript check handles a CONDITIONAL rule.
  if (requiresReceipt(amount) && !receiptCheckbox.checked) {
    formMessage.textContent =
      'Cannot continue: attach receipt evidence for an expense greater than $75.';
    formMessage.className = 'form-message error-message';
    receiptCheckbox.focus();
    return;
  }

  if (requiresDirectorApproval(amount)) {
    formMessage.textContent =
      'Client-side checks passed. This request would route to director approval.';
  } else {
    formMessage.textContent =
      'Client-side checks passed. This request would follow the standard approval path.';
  }

  formMessage.className = 'form-message success-message';
}

amountInput.addEventListener('input', updateAmountRelatedMessages);
receiptCheckbox.addEventListener('change', handleReceiptChange);
form.addEventListener('submit', handleSubmit);

// MIS 3371 — WEEK 6 REFERENCE JAVASCRIPT
// Week 6 goal: connect basic JavaScript behavior to the existing form.
// Full conditional validation and additional business rules continue in Week 7.

const DIRECTOR_APPROVAL_THRESHOLD = 5000;

const form = document.querySelector('#expenseForm');
const amountInput = document.querySelector('#expenseAmount');
const approvalMessage = document.querySelector('#approvalMessage');

function requiresDirectorApproval(amount) {
  return amount > DIRECTOR_APPROVAL_THRESHOLD;
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

function handleDemoSubmit(event) {
  // There is no API/backend in Week 6, so keep the page in place for testing.
  event.preventDefault();
  console.log('Week 6 demo: form submission intercepted; no backend is connected yet.');
}

amountInput.addEventListener('input', updateApprovalMessage);
form.addEventListener('submit', handleDemoSubmit);

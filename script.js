const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    // Handle input event for forward typing
    code.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && idx < codes.length - 1) {
            codes[idx + 1].focus(); // Focus on the next input field
        }
    });

    // Handle keydown event for backspace/deletion
    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (idx > 0 && !e.target.value) {
                // If the current input is empty, focus on the previous input and clear it
                codes[idx - 1].focus();
                codes[idx - 1].value = '';
            } else if (idx > 0 && e.target.value) {
                // If the current input has a value, just focus on the previous input
                codes[idx - 1].focus();
            }
        }
    });
});
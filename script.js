const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && idx > 0 && !e.target.value) {
            codes[idx - 1].focus(); // Focus on the previous input field
            codes[idx - 1].value = ''; // Clear the previous input field
        }
    });
});
const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && idx > 0 && !e.target.value) {
            codes[idx - 1].focus();
        }
    });
});
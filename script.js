const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
  code.addEventListener('input', (e) => {
    // Automatically focus the next input field after a short delay
    if (e.target.value.length === 1 && idx < codes.length - 1) {
      setTimeout(() => {
        codes[idx + 1].focus();
      }, 10); // 10ms delay
    }
  });

  code.addEventListener('keydown', (e) => {
    
    if (e.key === 'Backspace' && idx > 0 && e.target.value === '') {
      codes[idx - 1].focus();
    }
  });
});
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener("input", (e) => {
        const value = e.target.value;
        
       
        if (value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && index > 0) {
            codes[index].value = "";
            codes[index - 1].focus();
        }
    });
});

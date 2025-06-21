document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const stepsDisplay = document.getElementById('steps-display');
    const toggleButton = document.querySelector('.toggle-steps');

    // Clear Display
    function clearDisplay() {
        display.innerText = '0';
        stepsDisplay.innerText = '';
        stepsDisplay.style.display = 'none';
        toggleButton.innerText = 'Show Steps';
    }

    // Backspace
    function backspace() {
        display.innerText = display.innerText.slice(0, -1) || '0';
    }

    // Append to Display
    function appendToDisplay(value) {
        if (display.innerText === '0' && !isNaN(value)) {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }

    // Simplify Expression (Handle multiplication and division)
    function simplifyExpression(expression) {
        expression = expression.replace(/(\d)\(/g, '$1*(').replace(/\)(\d)/g, ')*$1');
        return expression
            .replace(/--/g, '+')
            .replace(/\+\+/g, '+')
            .replace(/\+-/g, '-')
            .replace(/-\+/g, '-')
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
    }

    // Calculate Result
    function calculateResult() {
        try {
            let expression = display.innerText;
            expression = simplifyExpression(expression);
            const result = eval(expression);
            stepsDisplay.innerText = display.innerText + ' = ' + result;
            display.innerText = result;
        } catch (e) {
            display.innerText = 'Error';
            stepsDisplay.innerText = 'Invalid Expression';
        }
        stepsDisplay.style.display = 'block';
        toggleButton.innerText = 'Hide Steps';
    }

    // Toggle Steps
    function toggleSteps() {
        if (stepsDisplay.style.display === 'none' || stepsDisplay.style.display === '') {
            stepsDisplay.style.display = 'block';
            toggleButton.innerText = 'Hide Steps';
        } else {
            stepsDisplay.style.display = 'none';
            toggleButton.innerText = 'Show Steps';
        }
    }

    // Handle Keyboard Input
    function handleKeyboardInput(event) {
        const key = event.key;
        if (!isNaN(key) || key === '.') {
            appendToDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            calculateResult();
        } else if (key === 'Backspace') {
            backspace();
        } else if (key === 'Escape') {
            clearDisplay();
        } else if ('/*-+'.includes(key)) {
            appendToDisplay(key);
        } else if (key === '(' || key === ')') {
            appendToDisplay(key);
        }
    }

    document.addEventListener('keydown', handleKeyboardInput);

    // Expose functions for global use
    window.clearDisplay = clearDisplay;
    window.backspace = backspace;
    window.appendToDisplay = appendToDisplay;
    window.calculateResult = calculateResult;
    window.toggleSteps = toggleSteps;
});

// ------------------------------
// MOBILE NAVIGATION TOGGLE (Hamburger Menu)
// ------------------------------
const menuToggle = document.getElementById("menuToggle");
if (menuToggle) {
  menuToggle.addEventListener("click", function(e) {
    e.stopPropagation();
    if (window.innerWidth < 768) {
      const navMenu = document.querySelector(".main-nav ul");
      if (navMenu) {
        if (navMenu.style.display === "flex") {
          navMenu.style.display = "none";
          menuToggle.classList.remove("active");
          menuToggle.innerHTML = "&#9776;";
        } else {
          navMenu.style.display = "flex";
          menuToggle.classList.add("active");
          menuToggle.innerHTML = "&times;";
        }
      }
    }
  });
  document.addEventListener("click", function(e) {
    if (window.innerWidth < 768) {
      const navMenu = document.querySelector(".main-nav ul");
      if (navMenu && !navMenu.contains(e.target) && e.target.id !== "menuToggle") {
        navMenu.style.display = "none";
        menuToggle.classList.remove("active");
        menuToggle.innerHTML = "&#9776;";
      }
    }
  });
}
window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    const navMenu = document.querySelector(".main-nav ul");
    if (navMenu) {
      navMenu.style.display = "flex";
    }
  }
});

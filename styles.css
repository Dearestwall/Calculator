/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: 'Roboto', sans-serif;
    background: #ff7e5f; /* Background color */
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-attachment: fixed;
}

/* Calculator Container */
.calculator {
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    width: 450px;  /* Increased width */
    height: auto; /* Height is auto to fit the content */
    max-height: 90vh; /* Limit height to 90% of the screen height */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto; /* Enable scrolling if content exceeds screen */
    position: relative; /* For positioning the 'Show Steps' button */
    padding-top: 60px; /* Extra space at the top to prevent overlap */
}

/* Display Container */
.display-container {
    width: 100%;
    margin-bottom: 15px;
}

/* Main Display Styling */
.display {
    width: 100%;
    padding: 15px;
    background-color: #222; /* Dark background to blend with the body */
    color: #fff;
    font-size: 2rem;
    text-align: right;
    border-radius: 8px;
    margin-bottom: 10px;
}

/* Steps Display */
.steps-display {
    width: 100%;
    padding: 8px;
    background-color: #444;
    color: #fff;
    font-size: 1.2rem;
    text-align: left;
    border-radius: 5px;
    display: none;
    margin-bottom: 15px;
}

/* Button Grid */
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; /* Reduced gap for a more compact layout */
    width: 100%;
}

/* Button Styles */
button {
    padding: 10px 12px; /* Reduced padding */
    font-size: 1.2rem;  /* Smaller font size */
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Operations Button */
.operation {
    background-color: #ff6f61;
    color: white;
}

.number {
    background-color: #f0f0f0;
    color: #333;
}

.equals {
    background-color: #33cc33;
    color: white;
}

.clear {
    background-color: #d32f2f;
    color: white;
}

.backspace {
    background-color: #ffa500;
    color: white;
}

.toggle-steps {
    background-color: #0288d1;
    color: white;
    grid-column: span 4;
    margin-bottom: 10px;
    transition: background-color 0.3s ease;
    padding: 5px 10px;
    font-size: 1rem;
    position: absolute;
    top: 15px; /* Align the button slightly lower to avoid overlap */
    right: 10px; /* Align the button to the top-right corner */
    border-radius: 8px;
}

/* Hover Effects */
button:hover {
    background-color: #333;
    color: white;
    transform: scale(1.1);
}

/* Media Queries */
@media (max-width: 600px) {
    .calculator {
        width: 90%;
        padding: 15px;
    }

    .display {
        font-size: 1.8rem;
    }

    button {
        font-size: 1rem; /* Slightly smaller font size for smaller screens */
        padding: 12px 14px; /* Adjusted padding */
    }

    .toggle-steps {
        font-size: 0.9rem;
        padding: 4px 8px; /* Smaller button padding */
    }
}

@media (max-width: 380px) {
    .calculator {
        width: 100%;
        padding: 10px;
    }

    .display {
        font-size: 1.5rem;
    }

    button {
        font-size: 0.9rem; /* Smaller font size for very small screens */
        padding: 10px 12px; /* Smaller padding */
    }
}

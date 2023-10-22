window.onload = function() {
    // Get the text element
    const writtenElement = document.querySelector("#written");

    // Create a new element to display the animated string
    const animatedStringElement = document.createElement("div");
    
    // Append the animated string element to the parent element of the text element
    writtenElement.appendChild(animatedStringElement);

    // Split the text into an array of lines
    const lines = writtenElement.textContent.split("\n");

    // Create a counter to keep track of the current line
    let currentLineIndex = 0;

    // Create a counter to keep track of the current character within the line
    let currentCharIndex = 0;

    // Create a timer to animate the string
    const timer = setInterval(() => {
        // Check if there are more lines to display
        if (currentLineIndex < lines.length) {
            // Get the current line
            const currentLine = lines[currentLineIndex];

            // Add the next character to the animated string
            animatedStringElement.textContent += currentLine[currentCharIndex];

            // Increment the character index
            currentCharIndex++;

            // If the end of the line is reached, move to the next line
            if (currentCharIndex === currentLine.length) {
                animatedStringElement.textContent += "\n";
                currentLineIndex++;
                currentCharIndex = 0;
            }
        } else {
            // If all lines are displayed, stop the timer
            clearInterval(timer);
        }
    }, 100);
};

// Button.js
// Exported function printButton takes in text to display on the button
// and an id to element which the button is appended to.
import "styles";

export const Button = (text, targetId) => {
    let button = document.createElement("button");
    button.innerHTML = text;

    document.getElementById(targetId).appendChild(button);
}

// P.js
// Exported function printP takes in text content to add to P tag
// and an id to element which the P tag is appended to.

export const Paragraph = (text, targetId) => {
    let pTag = document.createElement("p");
    pTag.innerHTML = text;

    document.getElementById(targetId).appendChild(pTag);
}

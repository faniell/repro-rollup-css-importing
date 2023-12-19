// P.js
// Exported function printP takes in text content to add to P tag
// and an id to element which the P tag is appended to.

const Paragraph = (text, targetId) => {
    let pTag = document.createElement("p");
    pTag.innerHTML = text;

    document.getElementById(targetId).appendChild(pTag);
};

function injectP(text, targetId) {
    Paragraph(text, targetId);
}

export { injectP as default };

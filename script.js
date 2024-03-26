//your JS code here. If required.
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("sizeInfo").innerHTML = `<h1>Width: ${width} Height: ${height}</h1>`;
});

// Initial setup to display the initial window size
const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;
document.getElementById("sizeInfo").innerHTML = `<h1>Width: ${initialWidth} Height: ${initialHeight}</h1>`;

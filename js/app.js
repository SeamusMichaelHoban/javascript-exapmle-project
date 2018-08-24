// Make h1 in header have different text
// Make nav ul li elements get larger when you hover over them
// Add another element to the main element
// Dynamically change the color of the background on the footer when the userselects key down
// Change the font size of the paragraphs in the main element when the user clicks them
// Change the text in the footer when the user clicks it
// Remove the h1 element in the header
// Put something in the place of the h1 in the header
// Change the text in one of the paragraph tags in the main element
// Change the size of the header element to 200px using grid syntax

function header() {
    document.getElementsByTagName("h1")[0].style.fontFamily = "cursive";
}
function Nav() {
    document.getElementById("unordered").style.fontSize = "25px";
}
function AddP() {
    document.getElementById("xtra").style.display = "flex";
    document.getElementById("xtra").style.fontSize = "64px";
    document.getElementsByTagName("p")[0].innerText = "Bike Night";
}
function Back() {
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#39FF14";
}
function ChangeP() {
    document.getElementsByTagName("p")[0].style.fontSize = "25px";
    document.getElementsByTagName("p")[1].style.fontSize = "35px";
    document.getElementsByTagName("p")[2].style.fontSize = "45px";
}
function Replace() {
    var x = document.getElementById("orig");
    var y = document.getElementById("swap");

    if (x.style.display == "none") {
        x.style.display = "";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "flex";
    }
}
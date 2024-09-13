var skillbtn = document.querySelector("#skillbtn");
var skillDiv = document.querySelector("#Skills");
var edubtn = document.querySelector("#eduBtn");
var eduDiv = document.querySelector("#Education");
var wrkbtn = document.querySelector("#wrkbtn");
var wrkDiv = document.querySelector("#work");
var container = document.querySelector("#content");
function showDiv(button, section, showText, hideText) {
    if (section.style.display === "flex") {
        section.style.display = "none";
        button.innerHTML = showText;
    }
    else {
        section.style.display = "flex";
        button.innerHTML = hideText;
    }
}
skillbtn.addEventListener("click", function () {
    showDiv(skillbtn, skillDiv, "Show Skills", "Hide Skills");
});
edubtn.addEventListener("click", function () {
    showDiv(edubtn, eduDiv, "Show Education", "Hide Education");
});
wrkbtn.addEventListener("click", function () {
    showDiv(wrkbtn, wrkDiv, "Show Work Experience", "Hide Work Experience");
});

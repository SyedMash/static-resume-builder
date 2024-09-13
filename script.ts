const skillbtn = document.querySelector("#skillbtn") as HTMLButtonElement;
const skillDiv = document.querySelector("#Skills") as HTMLDivElement;
const edubtn = document.querySelector("#eduBtn") as HTMLButtonElement;
const eduDiv = document.querySelector("#Education") as HTMLDivElement;
const wrkbtn = document.querySelector("#wrkbtn") as HTMLButtonElement;
const wrkDiv = document.querySelector("#work") as HTMLDivElement;
const container = document.querySelector("#content") as HTMLDivElement;

function showDiv(
  button: HTMLButtonElement,
  section: HTMLDivElement,
  showText: string,
  hideText: string
) {
  if (section.style.display === "flex") {
    section.style.display = "none";
    button.innerHTML = showText;
  } else {
    section.style.display = "flex";
    button.innerHTML = hideText;
  }
}

skillbtn.addEventListener("click", () => {
  showDiv(skillbtn, skillDiv, "Show Skills", "Hide Skills");
});

edubtn.addEventListener("click", () => {
  showDiv(edubtn, eduDiv, "Show Education", "Hide Education");
});

wrkbtn.addEventListener("click", () => {
  showDiv(wrkbtn, wrkDiv, "Show Work Experience", "Hide Work Experience");
});

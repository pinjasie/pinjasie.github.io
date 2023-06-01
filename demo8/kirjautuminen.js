//linkitetään tiedosto index.html:ään
document.addEventListener("DOMContentLoaded", onkoKirjautunut);
function onkoKirjautunut() {
if(localStorage.getItem("kirjautunut") === "kylla") {
    document.getElementById('tervetulo-teksti').textContent += localStorage.getItem("nimi");
document.getElementById("kirjautumislomake").style.display = "none";
}
}
function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

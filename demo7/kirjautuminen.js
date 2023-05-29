//linkitetään tiedosto index.html:ään
document.addEventListener("DOMContentLoaded", onkoKirjautunut);
function onkoKirjautunut() {
    let kirjautunut = 'true';
if(kirjautunut === 'true') {
    document.getElementById('tervetulo-teksti').textContent += ' Pinja!';
}
}
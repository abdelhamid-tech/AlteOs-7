// heure
function updateTime() {
  const d = new Date();
  document.getElementById("time").textContent =
    d.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"}) +
    "  " +
    d.toLocaleDateString();
}
setInterval(updateTime, 1000);
updateTime();

// batterie réelle
navigator.getBattery().then(b => {
  function update() {
    document.getElementById("bat").style.width = (b.level * 100) + "%";
  }
  update();
  b.addEventListener("levelchange", update);
});

// météo réelle simple (géoloc + API libre sans clé)
fetch("https://wttr.in/?format=j1")
  .then(r => r.json())
  .then(d => {
    document.getElementById("temp").textContent = d.current_condition[0].temp_C + "°C";
    document.getElementById("cond").textContent = d.current_condition[0].weatherDesc[0].value;
  });

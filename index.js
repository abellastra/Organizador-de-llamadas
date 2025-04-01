const button = document.querySelector("#button");
const tabla = document.getElementById("table");
const spanDuracionTotal = document.getElementById("duracionTotalDllamada");
const spanDuracionPromedio = document.getElementById("duracionPromedio");
const h2NohayLlamadas = document.getElementById("noHayLlamadas");
let lladas = [];
listar_llamadas(lladas);

button.addEventListener("click", () => {
  let nLlamadas = Number(document.getElementById("numerosFicticios").value);
  lladas = [];
  generarLlamadas(nLlamadas);
  listar_llamadas(lladas);
  calcularDuraciondeTiempo(lladas);
});

function generarLlamadas(n) {
  for (let i = 0; i < n; i++) {
    let origen = Math.floor(
      Math.random() * (9999999999 - 1111111111) + 1111111111
    );
    let destino = Math.floor(
      Math.random() * (9999999999 - 1111111111) + 1111111111
    );
    let duracion = Math.floor(Math.random() * (600 - 30 + 1) + 30);
    lladas.push({ origen, destino, duracion });
  }
}

function listar_llamadas(lladas) {
  const tbody = document.getElementById("idLlamadas");
  tbody.innerHTML = "";
  if (lladas.length === 0) {
    tabla.style.display = "none";
    h2NohayLlamadas.innerHTML = "NO HAY LLAMADAS";
  } else {
    tabla.style.display = "";
    h2NohayLlamadas.style.display = "none";
    lladas.forEach((llamada) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
    <td>${llamada.origen}</td>
    <td>${llamada.destino}</td>
    <td>${llamada.duracion}</td>
    `;
      tbody.appendChild(tr);
    });
  }
}

function calcularDuraciondeTiempo(lladas) {
  if (lladas.length > 0) {
    let duracionTotalDeLlamadas = 0;
    let promedioDeLlamadas = 0;

    for (let i = 0; i < lladas.length; i++) {
      duracionTotalDeLlamadas = duracionTotalDeLlamadas + lladas[i].duracion;
    }
    promedioDeLlamadas = parseInt(duracionTotalDeLlamadas / lladas.length);

    spanDuracionTotal.innerHTML = `duracion total ${duracionTotalDeLlamadas} seg `;
    spanDuracionPromedio.innerHTML = `duracion promedio  ${promedioDeLlamadas} seg `;
  }
}

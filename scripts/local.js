var anoAtual = document.getElementById("anoatual");
anoAtual.textContent = new Date().getFullYear();

var ultimaModificacao = document.getElementById("ultimaModificacao");
ultimaModificacao.textContent = "Última modificação: " + document.lastModified;

var temperatura = 9;
var vento = 12;

function calcularSensacaoTermica(temperatura, vento) {
  return (13.12 + 0.6215 * temperatura - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temperatura * Math.pow(vento, 0.16)).toFixed(1);
}

var sensacaoTermica = document.getElementById("sensacaoTermica");

if (temperatura <= 10 && vento > 4.8) {
  sensacaoTermica.textContent = calcularSensacaoTermica(temperatura, vento) + " °C";
} else {
  sensacaoTermica.textContent = "N/A";
}
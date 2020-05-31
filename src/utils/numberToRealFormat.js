export default function numberToReal(numero) {
  var numero = numero.toFixed(2).split('.');
  numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero[0];
}

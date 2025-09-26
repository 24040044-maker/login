function calcularNomina() {
  const costo = parseFloat(document.getElementById("costo").value);
  const normales = 40;
  const extras = 5;

  if (isNaN(costo) || costo <= 0) {
    alert("ingrese un costo por hora válido.");
    return;
  }

  const pagoNormal = normales * costo;
  const pagoExtra = extras * costo * 2; 
  const subtotal = pagoNormal + pagoExtra;
  const ispt = subtotal * 0.10;
  const pago = subtotal - ispt;

  document.getElementById("subtotal").value = subtotal.toFixed(2);
  document.getElementById("ispt").value = ispt.toFixed(2);
  document.getElementById("pago").value = pago.toFixed(2);
}
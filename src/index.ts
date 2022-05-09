// Ejercicio 1 Cálculo de Descuento

let producto: number = 450.5;
let descuento: number = producto * 0.1;

console.log("El precio final es: ", producto - descuento);

// Ejercicio 2: Autos de carrera

let vuelta: number | null = Number(prompt("Tiempo de la primer vuelta"));
let vuelta2: number | null = Number(prompt("Tiempo de la segunda vuelta"));
let vuelta3: number | null = Number(prompt("Tiempo de la tercer vuelta"));
let vuelta4: number | null = Number(prompt("Tiempo de la cuarta vuelta"));

let tiempoTotal: number = vuelta + vuelta2 + vuelta3 + vuelta4;

let promedioVuetlas: number = tiempoTotal / 4;

console.log("El tiempo total fue: " + tiempoTotal, "minutos.");
console.log("El promedio entre vueltas fue: " + promedioVuetlas, "minutos.");

// Ejercicio Aplicar descuento

let monto: number = 3000;
let cantidad: number = 3;
let descuento: number = 0.1;

let total: number = monto * cantidad;
let descuentoDeCompra: number = monto * descuento;
let totalConDescuento: number = total - descuentoDeCompra;

if (total >= 1000) {
  console.log(
    "Usted recibió un descuento del 10%, el monto a pagar es: " +
      totalConDescuento
  );
} else {
  console.log("El precio a pagar es: " + total);
}

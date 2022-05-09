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

// Ejercicio Par/Impar

let numero: number | null = Number(prompt("Ingrese un número"));

if (numero === 0) {
  alert("El número ingresado es 0");
} else if (numero % 2 === 0) {
  alert("El número ingresado es par");
} else {
  alert("El número ingresado es impar");
}

// Ejercicio Descuento Octubre

let precioUnitario: number | null = Number(
  prompt("Ingrese precio del producto")
);
let cantidad: number | null = Number(
  prompt("Ingrese cantidad de los productos")
);
let mes: String | null = String(prompt("Ingrese mes de su cumpleaños"));
let descuento: number = precioUnitario * 0.15;
let precioConDescuento: number = precioUnitario - descuento;

if (mes === "octubre") {
  alert(
    "Su compra tiene un 15% de descuento, el total a pagar es: " +
      precioConDescuento
  );
} else {
  alert("El total a pagar es: " + precioUnitario);
}

// Ejercicio Eureka

let contraseña: string = "eureka";
let contador: number = 0;

while (contador < 3) {
  let claveIntento: string | null = prompt("Ingrese la clave");
  if (contraseña === claveIntento) {
    console.log("Clave válida");
    contador = 3;
  } else {
    if (contador < 3) {
      alert("Contraseña incorrecta, intente de nuevo");
      contador++;
    }
  }
}
if (claveIntento !== contraseña) {
  alert("Ha superado el maximo de intentos");
}

// Ejercicio Suma entre números

let num1: number = Number(prompt("Ingrese un número"));
let num2: number = Number(prompt("Ingrese otro número más"));

let suma: number = num1;

for (num1; num1 < num2; num1++) {
  suma = suma + num1 + 1;
}

console.log("La suma total es: " + suma);

// Ejercicio Tablas de multiplicación

let numero: number = Number(prompt("Ingrese un número"));
let hasta: number = Number(prompt("Ingrese otro número"));

for (let i: number = 1; i <= hasta; i++) {
  console.log(numero, "x" + i, "=", +numero * i);
}

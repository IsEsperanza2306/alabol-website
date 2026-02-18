// =============================================
// OPORTUNIDADES DE SUBASTA - Alabol Car Broker
// =============================================
// Israel: Edita este archivo para agregar o quitar autos.
// Solo cambia los datos aquí, no toques el HTML.
//
// Campos:
//   id          → Número único (1, 2, 3...)
//   marca       → Marca del auto
//   modelo      → Modelo específico
//   anio        → Año
//   tipo        → "sedan", "suv", "pickup", "deportivo"
//   origen      → "mexico" o "usa"
//   foto        → URL de la foto (pega link de imagen)
//   danio       → Descripción del daño (lo que quieras que vea el cliente)
//   precioTotal → Precio final para el cliente (TODO incluido)
//   precioMercado → Precio promedio en MercadoLibre/agencias
//   fechaLimite → Fecha de la subasta "YYYY-MM-DD"
//   disponible  → true (visible) o false (oculto)
//   notas       → Notas extra que ve el cliente
// =============================================

const OPORTUNIDADES = [
    {
        id: 1,
        marca: "Toyota",
        modelo: "RAV4 XLE",
        anio: 2022,
        tipo: "suv",
        origen: "mexico",
        foto: "",
        danio: "Cosmético leve — golpe en defensa trasera",
        precioTotal: 285000,
        precioMercado: 480000,
        fechaLimite: "2026-02-25",
        disponible: true,
        notas: "Motor y transmisión en perfecto estado"
    },
    {
        id: 2,
        marca: "Honda",
        modelo: "Civic EX",
        anio: 2021,
        tipo: "sedan",
        origen: "mexico",
        foto: "",
        danio: "Daño frontal menor — aire desplegado",
        precioTotal: 195000,
        precioMercado: 380000,
        fechaLimite: "2026-02-26",
        disponible: true,
        notas: "Solo 35,000 km recorridos"
    },
    {
        id: 3,
        marca: "RAM",
        modelo: "1500 Classic",
        anio: 2020,
        tipo: "pickup",
        origen: "usa",
        foto: "",
        danio: "Daño lateral — puertas y panel",
        precioTotal: 320000,
        precioMercado: 580000,
        fechaLimite: "2026-02-28",
        disponible: true,
        notas: "Motor HEMI 5.7L, 4x4"
    },
    {
        id: 4,
        marca: "Nissan",
        modelo: "Sentra SR",
        anio: 2023,
        tipo: "sedan",
        origen: "mexico",
        foto: "",
        danio: "Daño por granizo — carrocería",
        precioTotal: 210000,
        precioMercado: 410000,
        fechaLimite: "2026-03-01",
        disponible: true,
        notas: "Mecánicamente perfecto, solo lámina"
    },
    {
        id: 5,
        marca: "Ford",
        modelo: "Explorer Limited",
        anio: 2021,
        tipo: "suv",
        origen: "usa",
        foto: "",
        danio: "Frontal leve — faro y defensa",
        precioTotal: 390000,
        precioMercado: 720000,
        fechaLimite: "2026-03-03",
        disponible: true,
        notas: "Piel, techo solar, 3 filas"
    },
    {
        id: 6,
        marca: "Chevrolet",
        modelo: "Silverado LT",
        anio: 2019,
        tipo: "pickup",
        origen: "mexico",
        foto: "",
        danio: "Trasero — caja y defensa",
        precioTotal: 280000,
        precioMercado: 520000,
        fechaLimite: "2026-02-27",
        disponible: true,
        notas: "Motor 5.3L V8, doble cabina"
    }
];

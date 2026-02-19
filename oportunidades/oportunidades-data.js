// ============================================
// OPORTUNIDADES DE SUBASTA — ALABOL CAR BROKER
// ============================================
// Última actualización: 18 Febrero 2026
// Subastas:
//   - LVA México — 19 Feb 2026 (MAÑANA)
//   - Hilco Acetec — 26 Feb 2026
// ============================================

const OPORTUNIDADES = [

    // ========== SUBASTA 19 FEB 2026 — LVA MÉXICO ==========
    // Subasta Pública con Martillero en Vivo — 11:00 AM
    // CDMX (Benito Juárez) — Fotos pendientes (sin branding)

    {
        marca: 'Jeep',
        modelo: 'Grand Cherokee 4x4 Limited 5.7L V8',
        anio: 2018,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'EXCELENTES CONDICIONES GENERALES. Motor V8 5.7L. Solo 44,633 km',
        precioTotal: 350000,
        precioMercado: 750000,
        fechaLimite: '2026-02-19',
        foto: '',
        notas: '🔥 MAÑANA 19 FEB — Excelentes condiciones, bajo kilometraje. Ubicación: CDMX',
        disponible: true
    },

    {
        marca: 'Jeep',
        modelo: 'Grand Cherokee 5.7L',
        anio: 2021,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'Carrocería en regulares condiciones, interiores en regular estado, OPERABLE. 58,125 km',
        precioTotal: 400000,
        precioMercado: 850000,
        fechaLimite: '2026-02-19',
        foto: '',
        notas: '🔥 MAÑANA 19 FEB — Modelo reciente, operable. Ubicación: CDMX',
        disponible: true
    },

    {
        marca: 'BMW',
        modelo: '750Li Excellence V8 4.4L Biturbo',
        anio: 2017,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Carrocería en buenas condiciones, vestiduras en piel en buenas condiciones, controles al volante. BLINDADO NIVEL 3. 51,800 km',
        precioTotal: 500000,
        precioMercado: 1200000,
        fechaLimite: '2026-02-19',
        foto: '',
        notas: '🔥 MAÑANA 19 FEB — BMW Serie 7 BLINDADO Nivel 3 en buenas condiciones. Ubicación: CDMX',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Tahoe LTZ Blindada Nivel IV Plus',
        anio: 2015,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'Carrocería en buenas condiciones, interiores en buen estado, vestiduras en piel, controles al volante, OPERABLE',
        precioTotal: 350000,
        precioMercado: 700000,
        fechaLimite: '2026-02-19',
        foto: '',
        notas: '🔥 MAÑANA 19 FEB — Tahoe blindada Nivel IV Plus por TPS, en buenas condiciones. Ubicación: CDMX',
        disponible: true
    },

    {
        marca: 'Mitsubishi',
        modelo: 'Montero Limited',
        anio: 2018,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'Carrocería en regulares condiciones, parabrisas estrellado, interiores en regular estado, ENCIENDE. 81,016 km',
        precioTotal: 200000,
        precioMercado: 450000,
        fechaLimite: '2026-02-19',
        foto: '',
        notas: '🔥 MAÑANA 19 FEB — SUV premium japonesa, enciende y opera. Ubicación: CDMX',
        disponible: true
    },

    {
        marca: 'Nissan',
        modelo: 'Kicks Advance 1.6L CVT',
        anio: 2023,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'Carrocería en regulares condiciones, interior en regular estado, vestiduras en tela, controles en volante, OPERABLE. 58,269 km',
        precioTotal: 180000,
        precioMercado: 380000,
        fechaLimite: '2026-02-19',
        foto: '',
        notas: '🔥 MAÑANA 19 FEB — Modelo 2023, casi nueva, operable. Ubicación: CDMX',
        disponible: true
    },

    {
        marca: 'Jaecoo',
        modelo: 'J7 Refine SUV 1.6 Turbo',
        anio: 2024,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'Carrocería en buenas condiciones, interior en buen estado, vestiduras en vinipiel, controles en volante, OPERABLE. 19,941 km',
        precioTotal: 250000,
        precioMercado: 500000,
        fechaLimite: '2026-02-19',
        foto: '',
        notas: '🔥 MAÑANA 19 FEB — SUV 2024 casi nueva, en buenas condiciones. Ubicación: CDMX',
        disponible: true
    },

    // ========== SUBASTA 26 FEB 2026 — HILCO ACETEC ==========
    // Fotos reales descargadas de cada lote

    // --- DEPORTIVOS ---

    {
        marca: 'Dodge',
        modelo: 'Charger SXT 3.6L V6',
        anio: 2022,
        tipo: 'deportivo',
        origen: 'mexico',
        danio: 'Condiciones físicas regulares, detalles estéticos. 105,469 km. Motor V6 3.6L, transmisión automática 8 velocidades',
        precioTotal: 175000,
        precioMercado: 450000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/charger-2022.jpg',
        notas: '🔥 Precio de salida: $175,000 MXN — 11 unidades disponibles. Ubicación: Querétaro',
        disponible: true
    },

    {
        marca: 'Dodge',
        modelo: 'Charger SXT 3.6L V6',
        anio: 2022,
        tipo: 'deportivo',
        origen: 'mexico',
        danio: 'Condiciones físicas regulares, detalles estéticos. Motor V6 3.6L, transmisión automática 8 velocidades',
        precioTotal: 175000,
        precioMercado: 450000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/charger-2022.jpg',
        notas: '🔥 Precio de salida: $175,000 MXN — Segunda unidad. Ubicación: Querétaro',
        disponible: true
    },

    // --- SEDANES ---

    {
        marca: 'Volkswagen',
        modelo: 'Vento Comfortline 1.6 Tip',
        anio: 2017,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Auto en condiciones de operación — Precio reservado',
        precioTotal: 100000,
        precioMercado: 220000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/vento-2017.jpg',
        notas: '💰 Precio reservado (se define en subasta). Ubicación: Monterrey, Nuevo León',
        disponible: true
    },

    {
        marca: 'Volkswagen',
        modelo: 'Vento Comfortline',
        anio: 2018,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Auto en condiciones de operación — Precio reservado',
        precioTotal: 110000,
        precioMercado: 240000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/vento-2018.jpg',
        notas: '💰 Precio reservado (se define en subasta). Ubicación: Yucatán',
        disponible: true
    },

    // --- SUVs ---

    {
        marca: 'Jeep',
        modelo: 'Grand Cherokee',
        anio: 2014,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'SUV premium — Precio reservado',
        precioTotal: 180000,
        precioMercado: 350000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/grand-cherokee-2014.jpg',
        notas: '💰 Precio reservado (se define en subasta). Ubicación: Monterrey, Nuevo León',
        disponible: true
    },

    {
        marca: 'Jeep',
        modelo: 'Grand Cherokee',
        anio: 2015,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'SUV premium — Precio reservado',
        precioTotal: 200000,
        precioMercado: 380000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/grand-cherokee-2015.jpg',
        notas: '💰 Precio reservado (se define en subasta). Ubicación: Monterrey, Nuevo León',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Suburban',
        anio: 2015,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'SUV de lujo familiar — Precio reservado',
        precioTotal: 250000,
        precioMercado: 480000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/suburban-2015.jpg',
        notas: '💰 Precio reservado (se define en subasta). Ubicación: Monterrey, Nuevo León',
        disponible: true
    },

    {
        marca: 'Mazda',
        modelo: 'CX-7',
        anio: 2010,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'SUV compacta — Precio de salida confirmado',
        precioTotal: 50000,
        precioMercado: 150000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/mazda-cx7.jpg',
        notas: '🔥 Precio de salida: $50,000 MXN. Ubicación: Quintana Roo',
        disponible: true
    },

    {
        marca: 'Lincoln',
        modelo: 'Navigator',
        anio: 2008,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'SUV de lujo clásica — Precio de salida confirmado',
        precioTotal: 93000,
        precioMercado: 200000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/navigator-2008.jpg',
        notas: '🔥 Precio de salida: $93,000 MXN. Ubicación: Guanajuato',
        disponible: true
    },

    // --- PICK-UPS ---

    {
        marca: 'Ford',
        modelo: 'F-350 KTP XL 6.2L Gas AT',
        anio: 2016,
        tipo: 'pickup',
        origen: 'mexico',
        danio: 'Pickup heavy duty — Precio reservado',
        precioTotal: 280000,
        precioMercado: 520000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/f350-2016.jpg',
        notas: '💰 Precio reservado (se define en subasta). Ubicación: Querétaro',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Silverado',
        anio: 2020,
        tipo: 'pickup',
        origen: 'mexico',
        danio: 'Pickup americana reciente — Precio reservado',
        precioTotal: 300000,
        precioMercado: 550000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/silverado-2020.jpg',
        notas: '💰 Precio reservado (se define en subasta). Ubicación: Querétaro',
        disponible: true
    },

    {
        marca: 'Chrysler',
        modelo: 'Ram 4000',
        anio: 2017,
        tipo: 'pickup',
        origen: 'mexico',
        danio: 'Pickup de carga pesada — Precio reservado',
        precioTotal: 200000,
        precioMercado: 400000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/ram-4000.jpg',
        notas: '💰 Precio reservado (se define en subasta). Ubicación: Guanajuato',
        disponible: true
    },

];

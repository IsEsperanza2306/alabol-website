// ============================================
// OPORTUNIDADES DE SUBASTA — ALABOL CAR BROKER
// ============================================
// Última actualización: 18 Febrero 2026
// Subastas:
//   - LVA México — 19 Feb 2026 (MAÑANA)
//   - Hilco Acetec — 26 Feb 2026
// Total: 25 oportunidades
// ============================================

const OPORTUNIDADES = [

    // =============================================
    // SUBASTA 19 FEB 2026 — LVA MÉXICO
    // Subasta Pública con Martillero en Vivo — 11:00 AM
    // =============================================

    // --- GAMA BAJA / ECONÓMICOS (LVA) ---

    {
        marca: 'Nissan',
        modelo: 'March Active Cargo 1.6L',
        anio: 2016,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Carrocería en regular estado, interiores en malas condiciones, falta asiento copiloto y trasero, ENCIENDE. 84,048 km',
        precioTotal: 50000,
        precioMercado: 140000,
        fechaLimite: '2026-02-19',
        foto: 'fotos/march-cargo.jpg',
        notas: '🔥 MAÑANA 19 FEB — Auto económico, enciende. Requiere trabajo en interiores. CDMX',
        disponible: true
    },

    {
        marca: 'Nissan',
        modelo: 'March Active Cargo 1.6L',
        anio: 2017,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Carrocería en regulares condiciones, interior en mal estado, falta asiento trasero, ENCIENDE',
        precioTotal: 55000,
        precioMercado: 155000,
        fechaLimite: '2026-02-19',
        foto: 'fotos/march-cargo.jpg',
        notas: '🔥 MAÑANA 19 FEB — Auto económico, enciende. Requiere trabajo en interiores. CDMX',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Aveo LS T/M',
        anio: 2022,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Carrocería en regulares condiciones con leves rayones, interiores en regular estado. Se desconoce si enciende',
        precioTotal: 80000,
        precioMercado: 220000,
        fechaLimite: '2026-02-19',
        foto: 'fotos/aveo-2022.jpg',
        notas: '🔥 MAÑANA 19 FEB — Modelo 2022 casi nuevo. Se desconoce si enciende. Ciudad Juárez, Chihuahua',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Aveo LS T/M',
        anio: 2022,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Carrocería en regulares condiciones con leves rayones, interiores en regular estado. Se desconoce si enciende',
        precioTotal: 80000,
        precioMercado: 220000,
        fechaLimite: '2026-02-19',
        foto: 'fotos/aveo-2022.jpg',
        notas: '🔥 MAÑANA 19 FEB — Modelo 2022 casi nuevo. Se desconoce si enciende. La Paz, B.C.',
        disponible: true
    },

    {
        marca: 'Volkswagen',
        modelo: 'Vento Comfortline 1.6L',
        anio: 2016,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Carrocería en regulares condiciones, leves golpes y rayones, interiores en regular estado. Se desconoce condiciones mecánicas',
        precioTotal: 75000,
        precioMercado: 190000,
        fechaLimite: '2026-02-19',
        foto: 'fotos/vento-2016.jpg',
        notas: '🔥 MAÑANA 19 FEB — Sedán económico. Cd. del Carmen, Campeche',
        disponible: true
    },

    // --- GAMA MEDIA-ALTA / PREMIUM (LVA) ---

    {
        marca: 'Volkswagen',
        modelo: 'Vento Comfortline 1.6 Tip',
        anio: 2017,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Carrocería en regulares condiciones, interiores en regular estado, OPERABLE',
        precioTotal: 90000,
        precioMercado: 220000,
        fechaLimite: '2026-02-19',
        foto: 'fotos/vento-2016.jpg',
        notas: '🔥 MAÑANA 19 FEB — Sedán operable, buen estado general. CDMX',
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
        foto: 'fotos/kicks-2023.jpg',
        notas: '🔥 MAÑANA 19 FEB — Modelo 2023, casi nueva, operable. CDMX',
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
        foto: 'fotos/jaecoo7-2024.jpg',
        notas: '🔥 MAÑANA 19 FEB — SUV 2024 casi nueva, buenas condiciones. CDMX',
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
        foto: 'fotos/montero-2018.jpg',
        notas: '🔥 MAÑANA 19 FEB — SUV premium japonesa, enciende. CDMX',
        disponible: true
    },

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
        foto: 'fotos/grand-cherokee-lva-2018.jpg',
        notas: '🔥 MAÑANA 19 FEB — Excelentes condiciones, bajo kilometraje. CDMX',
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
        foto: 'fotos/grand-cherokee-lva-2021.jpg',
        notas: '🔥 MAÑANA 19 FEB — Modelo reciente, operable. CDMX',
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
        foto: 'fotos/bmw-750li-2017.jpg',
        notas: '🔥 MAÑANA 19 FEB — BMW Serie 7 BLINDADO Nivel 3, buenas condiciones. CDMX',
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
        foto: 'fotos/tahoe-ltz-2015.jpg',
        notas: '🔥 MAÑANA 19 FEB — Tahoe blindada Nivel IV Plus, buenas condiciones. CDMX',
        disponible: true
    },

    // =============================================
    // SUBASTA 26 FEB 2026 — HILCO ACETEC
    // Fotos reales descargadas de cada lote
    // =============================================

    // --- GAMA BAJA / ECONÓMICOS (HILCO) ---

    {
        marca: 'Chevrolet',
        modelo: 'Aveo',
        anio: 2016,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Automóvil — Precio reservado (se define en subasta)',
        precioTotal: 50000,
        precioMercado: 130000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/aveo-lot43602.jpg',
        notas: '💰 Precio reservado. Estimado: ~$50k. Ubicación: Baja California Sur',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Aveo LT',
        anio: 2017,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Automóvil Paquete LT — Precio reservado (se define en subasta)',
        precioTotal: 55000,
        precioMercado: 150000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/aveo-lot43602.jpg',
        notas: '💰 Precio reservado. Estimado: ~$55k. Ubicación: Cancún, Quintana Roo',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Aveo LT',
        anio: 2017,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Automóvil Paquete LT — Precio reservado (se define en subasta)',
        precioTotal: 55000,
        precioMercado: 150000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/aveo-lot43607.jpg',
        notas: '💰 Precio reservado. Estimado: ~$55k. Ubicación: Mérida, Yucatán',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Aveo Sedán Manual',
        anio: 2017,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Automóvil Paquete 1SM Sedán Manual — Precio reservado (se define en subasta)',
        precioTotal: 55000,
        precioMercado: 150000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/aveo-lot43608.jpg',
        notas: '💰 Precio reservado. Estimado: ~$55k. Ubicación: Querétaro',
        disponible: true
    },

    // --- DEPORTIVOS (HILCO) ---

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
        notas: '🔥 Precio de salida: $175,000 MXN — 11 unidades disponibles. Querétaro',
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
        notas: '🔥 Precio de salida: $175,000 MXN — Segunda unidad. Querétaro',
        disponible: true
    },

    // --- SEDANES GAMA MEDIA (HILCO) ---

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
        notas: '💰 Precio reservado. Monterrey, Nuevo León',
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
        notas: '💰 Precio reservado. Yucatán',
        disponible: true
    },

    // --- SUVs (HILCO) ---

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
        notas: '💰 Precio reservado. Monterrey, Nuevo León',
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
        notas: '💰 Precio reservado. Monterrey, Nuevo León',
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
        notas: '💰 Precio reservado. Monterrey, Nuevo León',
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
        notas: '🔥 Precio de salida: $50,000 MXN. Quintana Roo',
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
        notas: '🔥 Precio de salida: $93,000 MXN. Guanajuato',
        disponible: true
    },

    // --- PICK-UPS (HILCO) ---

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
        notas: '💰 Precio reservado. Querétaro',
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
        notas: '💰 Precio reservado. Querétaro',
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
        notas: '💰 Precio reservado. Guanajuato',
        disponible: true
    },

];

// ============================================
// OPORTUNIDADES DE SUBASTA — ALABOL CAR BROKER
// ============================================
// Última actualización: 18 Febrero 2026
// Subasta Hilco Acetec — 26 Feb 2026
// ============================================

const OPORTUNIDADES = [

    // ========== SUBASTA 26 FEB 2026 — HILCO ACETEC ==========
    // Subasta Multimarcas — subastashilcoacetec.mx

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
        foto: 'fotos/charger-2022.webp',
        notas: '🔥 Precio de salida confirmado: $175,000 MXN — 11 unidades disponibles. Ubicación: Querétaro',
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
        foto: 'fotos/charger-2022.webp',
        notas: '🔥 Precio de salida confirmado: $175,000 MXN — Segunda unidad del mismo lote. Ubicación: Querétaro',
        disponible: true
    },

    // --- SEDANES ---

    {
        marca: 'Volkswagen',
        modelo: 'Vento Comfortline 1.6 Tip',
        anio: 2017,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Auto en condiciones de operación — Precio reservado (se define en subasta)',
        precioTotal: 100000,
        precioMercado: 220000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/vento-2017.webp',
        notas: '💰 Precio reservado. Estimado conservador: ~$100k. Ubicación: Monterrey, Nuevo León',
        disponible: true
    },

    {
        marca: 'Volkswagen',
        modelo: 'Vento Comfortline',
        anio: 2018,
        tipo: 'sedan',
        origen: 'mexico',
        danio: 'Auto en condiciones de operación — Precio reservado (se define en subasta)',
        precioTotal: 110000,
        precioMercado: 240000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/vento-2018.webp',
        notas: '💰 Precio reservado. Estimado conservador: ~$110k. Ubicación: Yucatán',
        disponible: true
    },

    // --- SUVs ---

    {
        marca: 'Jeep',
        modelo: 'Grand Cherokee',
        anio: 2014,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'SUV premium — Precio reservado (se define en subasta)',
        precioTotal: 180000,
        precioMercado: 350000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/grand-cherokee-2014.webp',
        notas: '💰 Precio reservado. Estimado conservador: ~$180k. Ubicación: Monterrey, Nuevo León',
        disponible: true
    },

    {
        marca: 'Jeep',
        modelo: 'Grand Cherokee',
        anio: 2015,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'SUV premium — Precio reservado (se define en subasta)',
        precioTotal: 200000,
        precioMercado: 380000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/grand-cherokee-2015.webp',
        notas: '💰 Precio reservado. Estimado conservador: ~$200k. Ubicación: Monterrey, Nuevo León',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Suburban',
        anio: 2015,
        tipo: 'suv',
        origen: 'mexico',
        danio: 'SUV de lujo familiar — Precio reservado (se define en subasta)',
        precioTotal: 250000,
        precioMercado: 480000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/suburban-2015.webp',
        notas: '💰 Precio reservado. Estimado conservador: ~$250k. Ubicación: Monterrey, Nuevo León',
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
        foto: 'fotos/mazda-cx7.webp',
        notas: '🔥 Precio de salida confirmado: $50,000 MXN. Oportunidad de entrada baja. Ubicación: Quintana Roo',
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
        foto: 'fotos/navigator-2008.webp',
        notas: '🔥 Precio de salida confirmado: $93,000 MXN. Ubicación: Guanajuato',
        disponible: true
    },

    // --- PICK-UPS ---

    {
        marca: 'Ford',
        modelo: 'F-350 KTP XL 6.2L Gas AT',
        anio: 2016,
        tipo: 'pickup',
        origen: 'mexico',
        danio: 'Pickup heavy duty — Precio reservado (se define en subasta)',
        precioTotal: 280000,
        precioMercado: 520000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/f350-2016.webp',
        notas: '💰 Precio reservado. Estimado conservador: ~$280k. Ubicación: Querétaro',
        disponible: true
    },

    {
        marca: 'Chevrolet',
        modelo: 'Silverado',
        anio: 2020,
        tipo: 'pickup',
        origen: 'mexico',
        danio: 'Pickup americana reciente — Precio reservado (se define en subasta)',
        precioTotal: 300000,
        precioMercado: 550000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/silverado-2020.webp',
        notas: '💰 Precio reservado. Estimado conservador: ~$300k. Ubicación: Querétaro',
        disponible: true
    },

    {
        marca: 'Chrysler',
        modelo: 'Ram 4000',
        anio: 2017,
        tipo: 'pickup',
        origen: 'mexico',
        danio: 'Pickup de carga pesada — Precio reservado (se define en subasta)',
        precioTotal: 200000,
        precioMercado: 400000,
        fechaLimite: '2026-02-26',
        foto: 'fotos/ram-4000.webp',
        notas: '💰 Precio reservado. Estimado conservador: ~$200k. Ubicación: Guanajuato',
        disponible: true
    },

];

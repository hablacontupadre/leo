import React, { useState, useEffect } from 'react';

const CartaPostal = () => {
    const [fechaActual, setFechaActual] = useState('');

    const obtenerFecha = () => {
        const hoy = new Date();
        const dia = hoy.getDate();
        const mes = hoy.getMonth();
        const anio = hoy.getFullYear();

        const meses = [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
        ];

        return `${dia} de ${meses[mes]} de ${anio}`;
    };

    useEffect(() => {
        setFechaActual(obtenerFecha())
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-teal-100 via-blue-200 to-cyan-100 p-4">
            <div className="w-full max-w-[600px] bg-white shadow-lg p-8 rotate-1 font-['Caveat',cursive] text-blue-800 text-lg">
                <div className="mb-4 text-right">
                    Madrid, {fechaActual}
                </div>
                <div className="mb-6 text-xl">
                    Querida Leonor,
                </div>
                <div className="mb-6 leading-relaxed">
                    ¡Hola desde Madrid! Espero que todo vaya bien.

                    Llevo un tiempo pensando que podríamos ser la punta de lanza europea de toda Hispoamérica.

                    Creemos un Mercado Común Hispanoamericano y, de manera orgánica, España se convertirá un hub logístico. Seríamos la puerta de entrada de mercancías a la Unión Europea. Las rutas marítimas serían más cortas y se amortizaría la inversión en AVE. Por no decir que seríamos imparables tanto cultural como económicamente.

                    ¿Puedes hablar con tu padre y comentárselo?
                </div>
                <div className="text-right text-xl">
                    Muy tuya, España
                </div>
            </div>
        </div>
    );
};

export default CartaPostal;
import React, { useState, useEffect } from 'react';

function Relogio() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const horario = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(horario);
        };
    }, []);

    return (
        <div>
            <p style={{ fontWeight: 'bold', fontSize: '30px', margin: 20 }}> Relógio - {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Relogio;
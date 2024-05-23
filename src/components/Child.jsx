import React, { useState } from 'react';

export const Child = ({ name, setName, addMessage }) => {
    const sendMessage = ()=>{
        addMessage('Este es e mensaje del hijo');
    };
    const changeName = () => {
        setName("Nuevo Nombre Hijo");
    };
    
    return(
        <div>
          <h2>Componente Child</h2>
          <p>Nombre: { name }</p>
          <button onClick={ sendMessage }>Enviar mensaje</button>
          <button onClick={ changeName }>Cambiar nombre</button>
        </div>
    );
};

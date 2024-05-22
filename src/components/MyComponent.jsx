import React from 'react';

export const MyComponent = () => {
    const name = "Ines";
    const repository = "https://github.com/MoiRouhs/component-practice";
    const student = {
        name:"Carlos",
        lastName:"Rocha",
        mobile: '3187940XXX',
        linkedProfile:"https://co.linkedin.com/in/carlos-andres-rocha-salguero/es"
    };
    console.log('student:',student);
    
    return(
       <div>
        <h2>Primer Componente</h2>
        <h3>Temas de React</h3>
        <ul>
          <li className="item001">Componentes</li>
          <li className="item002">Eventos</li>
          <li className="item003">Estados</li>
          <li className="item004">Comunicacion</li>
        </ul>
        <h3>Datos Profesor</h3>
        <p>Nombre: { name }</p>
        <p>Repositorio: { repository }</p>
        <h3>Datos Estudiante</h3>
        <p>Nombre: { student.name }</p>
        <p>Apellido: { student.lastName }</p>
        <p>Telefono: { student.mobile }</p>
        <p>LinkId Perfil: { student.linkedProfile }</p>
        
      </div>
    );
}

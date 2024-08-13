import React from 'react';
import './Presentation.css'; 

const Presentation = () => {
  return (
    <div className="presentation-container">
      <h1 className="presentation-title">¡Hola! Soy Miguel Díaz Velasco</h1>
      
      <div className="presentation-content">
        <p>
          Me apasiona el desarrollo frontend porque me encanta crear experiencias 
          de usuario atractivas e intuitivas. Creo que el frontend es la combinación 
          perfecta entre creatividad y lógica, y estoy emocionado de poder aportar 
          mis habilidades a proyectos que hagan la diferencia.
        </p>

        <div className="reasons">
          <h2>¿Por qué quiero unirme al grupo de trabajo de Frontend?</h2>
          <ul className="reasons-list">
            <li>Me encanta resolver problemas complejos de UI/UX.</li>
            <li>Tengo experiencia en React, CSS y JavaScript moderno.</li>
            <li>Quiero colaborar y aprender de otros desarrolladores.</li>
            <li>Soy proactivo y disfruto el trabajo en equipo.</li>
          </ul>
        </div>

        <div className="cta-section">
          <p>¡Espero que me consideren para el equipo!</p>
          <button className="cta-button" onClick={() => window.open("https://www.linkedin.com/in/miguel-diazvelasco/")}>Conoce más sobre mí</button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

import React from 'react';
import PropTypes from 'prop-types';

export const ThirdComponent = ({ name, lastName, card }) => {
   
    return(
        <div>
          <h2>Tercer Componente</h2>
          <h3>Comunicación entre Componentes</h3>
          <ul>
            <li>{ name }</li>
            <li>{ lastName }</li>
            <li>{ card.allergies }</li>
          </ul>
        </div>
    );
};

ThirdComponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    card: PropTypes.object
}

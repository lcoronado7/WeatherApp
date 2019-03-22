import React from 'react';


const Location = ({ city }) =>(
  /*const {city} =props; Se hace de uso de destructuring si el nombre de la propiedad y
  de la variable en la que se va almacenar es igual
  Tambien se puede pasar por paramentro en vez de props el destructuring {city} y se obtiene unicamente la ciudad
  Ejemplo const Location =({city}) => ...
  Como tambien se puede hacer uso del this.props
  Ejemplo const Location =(props) => ... y se obtiene la ciudad asi const city =props.city; esto se debe realizar con un
  arrow function con return y {};
  */
    <div>
      <h1>
        {city}
      </h1>
    </div>

);


export default Location;

import React from 'react'; // importamos la libreria de React
import '../hojas_de_estilo/Testimonio.css';


function Testimonio(props) {
    // agregamos una función componente
    return (
        // retorna un elemento  JSX
        <div className='contener-testimonio'>
            <img // agregar una imagen
                className='imagen-testimonio'
                src={require(`../imagenes/${props.imagen}.png`)} // los 2 puntos es para ubicarnos en la carpeta SRC, osea un nivel hacia arriba
                alt='foto de Emma'
            />

      <div className="contener-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div> // contenenor principal con clase especifica
    );
}

export default Testimonio; // exportación por defecto
// parametro para importat el componente
// puede existir importación nombrada  y exportación por defecto
// la exportación por defecto dice que este va ser el último elemento importable de este archivo
// la otra si se puede exportar varios componentes de este archivo
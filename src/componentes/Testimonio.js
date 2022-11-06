import React from 'react'; // importamos la libreria de React
import '../hojas_de_estilo/Testimonio.css';


function Testimonio() {
    // agregamos una función componente
    return (
        // retorna un elemento  JSX
        <div className='contener-testimonio'>
            <img // agregar una imagen
                className='imagen-testimonio'
                src={require("../imagenes/imagen_3.png")} // los 2 puntos es para ubicarnos en la carpeta SRC, osea un nivel hacia arriba
                alt='foto de Emma'
            />

            <div className="contener-texto-testimonio">
                <p className="nombre-testimonio"> <b>Emma Bostian</b> en Suecia</p>
                <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
                <p className="texto-testimonio">

                    "Siempre he tenido problemas para aprender JavaScript. He tomado
                    muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
                    Estudiar JavaScript, así como estructuras de datos y algoritmos en
                    freeCodeCamp me dio las habilidades y la confianza que necesitaba para
                    conseguir el trabajo de mis sueños como ingeniero de software en
                    Spotify."
                </p>
            </div>
        </div> // contenenor principal con clase especifica
    );
}

export default Testimonio; // exportación por defecto
// parametro para importat el componente
// puede existir importación nombrada  y exportación por defecto
// la exportación por defecto dice que este va ser el último elemento importable de este archivo
// la otra si se puede exportar varios componentes de este archivo
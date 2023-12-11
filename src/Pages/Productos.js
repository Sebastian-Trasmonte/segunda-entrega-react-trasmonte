import { Link } from "react-router-dom"
import ListaArticulos from "../asserts/articulos"

function Productos() {

    return (

        <div>
            <h1>Productos</h1>
            <div>
                {ListaArticulos.map((producto) => {
                    return (
                        <article>
                            <h5>{producto.modelo}</h5>
                            <img src={producto.imagen} alt="imagen de calzado"/>
                            <Link to="">Mas info</Link>

                        </article>
                    )
                }
                )
                }
            </div>
        </div>
    )

}

export default Productos
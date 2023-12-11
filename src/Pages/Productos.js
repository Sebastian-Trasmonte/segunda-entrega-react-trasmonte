import { Link } from "react-router-dom"
import ListaArticulos from "../asserts/articulos"
import "bulma/css/bulma.css"
import "../Styles.css"

const Arts = require.context("../img/")

function Productos() {

    return (

        <div>
            <h1>Productos</h1>
            <div className="columns">
                {ListaArticulos.map((producto) => {
                    return (
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={Arts(`./${producto.imagen}`)} alt="imagen de calzado" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{producto.modelo}</p>
                                    </div>
                                </div>
                                <Link to="">Mas info</Link>
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )

}

export default Productos
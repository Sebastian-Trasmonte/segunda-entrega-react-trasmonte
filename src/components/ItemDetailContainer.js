import { useNavigate, useParams } from "react-router-dom"
import ArregloArticulos from "../asserts/articulos"
import "bulma/css/bulma.css"
import "../Styles.css"
import { useEffect, useState } from "react"

const imgArts = require.context("../img/")



function ItemDetailtContainer() {
    const { idProducto } = useParams()

    const [articulo, setArticulo] = useState([])

    const navigateTo = useNavigate()


    useEffect(() => {

            console.log(idProducto)


        if (idProducto) {

            const productoFiltrado = FiltroArticulo(idProducto)
            setArticulo(productoFiltrado)


        } else {

            navigateTo("*")

        }



    }, [idProducto])

    function FiltroArticulo(idProducto) {

        return ArregloArticulos.find((articulo) => articulo.id == idProducto)

    }

    return (

        <div>
            <div className="columns">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={imgArts(`./${articulo.imagen}`)} alt="imagen de calzado" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{articulo.modelo}</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )

}

export default ItemDetailtContainer
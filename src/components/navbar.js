import "bulma/css/bulma.css"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import CartWidget from "../components/CartWidget"

function Navbar() {
    return (

        <nav class="navbar is-info" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" Link to="Home">
                    <img src={logo} width="80" height="80" />
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        <Link to="/Productos">Productos</Link>
                    </a>

                    <a class="navbar-item">
                    <Link to="/Mayorista">Area Mayorista</Link>
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        <Link to="/Categorias">Categorias</Link>
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Urban Street
                            </a>
                            <a class="navbar-item">
                                Urbano
                            </a>
                            <a class="navbar-item">
                                Premium
                            </a>
                            <a class="navbar-item">
                                Dama
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <CartWidget />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
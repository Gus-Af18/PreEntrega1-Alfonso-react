import CartWidget from "./CartWidget/CartWidget"
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => {
    return (
        <header>
            <h1 className="title-eco">Ecommerce</h1>
            <section>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Animal Box</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Servicios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Horarios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link "href="#">Galeria</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link "href="#"><CartWidget/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </section>
        </header>
    )
}

export default NavBar
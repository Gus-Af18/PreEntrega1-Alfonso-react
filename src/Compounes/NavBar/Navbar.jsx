import CartWidget from "./CartWidget/CartWidget"
import './NavBar.css'
const NavBar = () => {
    return (
        <header>
            <h1 className="title-eco">Ecommerce</h1>
            <section>
            <nav>
                <h2 className="title-main">Animal Box</h2>
                    <div>
                        <button className="button">Servicios</button>
                        <button className="button">Horarios</button>
                        <button className="button">Galeria</button>
                    </div>
                    <CartWidget/>  
            </nav>
            </section>
        </header>
    )
}

export default NavBar
import CartWidget from "./CartWidget/CartWidget"
const NavBar = () => {
    return (
        <header>
            <h1>Ecommerce</h1>
            <section>
            <nav>
                <h2>Animal Box</h2>
                    <div>
                        <button>Servicios</button>
                        <button>Horarios</button>
                        <button>Galeria</button>
                    </div>
                    <CartWidget/>  
            </nav>
            </section>
        </header>
    )
}

export default NavBar
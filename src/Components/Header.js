import CarWidget from "./CarWidget";

const Header = () => {

    return (

        <div className="flex-header">
            <header /* style={{background: "lightblue"}} */ className="header">
                <div className="intro">
                    Proyecto React
                </div>

                <div className="div-nav">
                    <ul className="nav">
                        <li>
                            Inicio
                        </li>
                        <li>
                            Enlace
                        </li>
                        <li>
                            Redes
                        </li>
                    </ul>
                </div>

                <CarWidget />

            </header>
        </div>
    )
}

export default Header;
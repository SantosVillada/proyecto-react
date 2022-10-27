import { BiCartAlt } from "react-icons/bi";

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

                <div className="icono">
                    <p> <BiCartAlt />  </p>
                    <div className="noti"> <span>2</span></div>
                </div>
                

            </header>
        </div>
    )
}

export default Header;
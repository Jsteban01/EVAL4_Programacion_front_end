import {Link} from "react-router-dom"
import PerfilFragment from "./PerfilFragment";
import Inacap from "../assets/imagenes/inacap.jpg"
import Analista from "../assets/imagenes/analista_p.jpg"
import Ciudad from "../assets/imagenes/ciudad.jpg"

//componente
const Perfil = () => {


    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Jorge Steban Duran</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                    <a className="nav-link" href="#"><Link to="/">Perfil</Link> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Link to="/galeria">Galeria</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Link to="/comentarios">Ir a comentarios</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="jumbotron text-center mb-4">
                    <h1>¿Quien soy?</h1>
                    <p>Soy un chico extranjero Univercitario de 20 años que vive en la ciudad de calama desde el año
                        2019, vine a chile a estudiar y a pasar tiempo con mi padre. Mi fecha de nacimiento es: '23/05/2002'.</p>


                </div>


                <div className="row">
                    <div className="col-4">
                        <PerfilFragment
                            imagen={Inacap}
                            titulo="¿DONDE ESTUDIO?"
                            textoDescripcion="Actualmente estudio en la Univercidad Tecnologica 'Inacap' cede 'Calama' dirección 'Av.Granaderos 3250'." />
                    </div>


                    <div className="col-4">
                        <PerfilFragment
                            imagen={Analista}
                            titulo="¿QUE ESTUDIO?"
                            textoDescripcion="Actualmente estoy estudiando el tecnico de 'Analista Programador' sin embargo planeo continuar y terminar como 'Ingeniero en Informatica'." />
                    </div>

                    <div className="col-4">
                        <PerfilFragment
                            imagen={Ciudad}
                            titulo="¿DE DONDE SOY?"
                            textoDescripcion="Soy un chico 'Colombiano' de una ciudad llamada 'Buenaventura', vivi en esa ciudad mas de 10 años, tambien vivi en 'Barranquilla' durante 4 años ." />
                    </div>

                </div>


            </div>
        </>
    )

}

export default Perfil
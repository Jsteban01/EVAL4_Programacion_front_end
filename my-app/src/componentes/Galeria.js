import {Link} from "react-router-dom"
import foto1 from "../assets/imagenes/IMG-20190325-WA0006.jpeg";
import foto2 from "../assets/imagenes/Screenshot_20190414-111141_Video Player.jpg";
import foto3 from "../assets/imagenes/Screenshot_20190414-111205_Video Player.jpg";
import foto4 from "../assets/imagenes/Screenshot_20190414-111742_Video Player.jpg";
import foto5 from "../assets/imagenes/Screenshot_20190414-111803_Video Player.jpg";
import foto6 from "../assets/imagenes/Screenshot_20190414-111300_Video Player.jpg";



//componente
const Galeria = () => {

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
                    <h1>GALERIA</h1>
                </div>

                <div className="row">
                    <div className="col-4">
                        <img src={foto1} className="card-img-top" alt="..." />
                    </div>

                    <div className="col-4">
                        <img src={foto2} className="card-img-top" alt="..." />
                    </div>

                    <div className="col-4">
                        <img src={foto3} className="card-img-top" alt="..." />
                    </div>
                </div><br/>

                <div className="row">
                    <div className="col-4">
                        <img src={foto4} className="card-img-top" alt="..." />
                    </div>

                    <div className="col-4">
                        <img src={foto5} className="card-img-top" alt="..." />
                    </div>

                    <div className="col-4">
                        <img src={foto6} className="card-img-top" alt="..." />
                    </div>
                </div><br/>

            </div>
        </>
    )

}

export default Galeria
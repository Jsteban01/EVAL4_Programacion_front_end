import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom";
import volcan from "../assets/imagenes/volcan.jpg";


const Comentarios = () => {


    const [comentar, setComentar] = useState("")
    const [terminosContrato, setTerminosContrato] = useState(false)

    const handleComentar = (evento) => {
        setComentar(evento.target.value)
    }

    const handleTerminos = (evento) => {
        setTerminosContrato(!terminosContrato)
    }

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
                    <h1>COMENTARIOS</h1>
                </div>


                <div className="row">
                    <div className="col-4 border">
                        <img src={volcan} className="card-img-top" alt="..." />
                    </div>

                    <div className="col-4 border">
                        <h2>Comentar</h2>
                        <label htmlFor="usuario">Mensaje</label>
                        <br/>
                        <input type="text"
                               placeholder="Deja tu comentario"
                               onChange={handleComentar}/>

                        <br/>
                        {comentar === "billgates" &&
                            <p>YA EXISTE ESTE USUARIO</p>
                        }
                        <br/>

                        <input type="checkbox"
                               checked={terminosContrato}
                               onChange={handleTerminos}
                               name="terminos"/>

                        <label htmlFor="terminos">Agregar emoticon 👍​</label>
                        <br/> <br/>

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>

                    <div className="col-4 border">
                        <ul className="list-group">
                            <li className="list-group-item bg-secondary">Comentarios ​💬​</li>
                            <li className="list-group-item">Es muy bonito ​​😍​</li>
                            <li className="list-group-item">Woooooow ​​😍​😮​</li>
                            <li className="list-group-item">¿Donde queda ese lugar?</li>
                            <li className="list-group-item">Que maravillosa vista.​🏔️​</li>
                            <li className="list-group-item">magnifico ​​👍​</li>
                        </ul>
                    </div>
                </div><br/>

            </div>
        </>
    )
}

export default Comentarios
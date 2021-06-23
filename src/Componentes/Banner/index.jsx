import './estilos.css';
import fotoBanner from '../../imagens/foto-banner.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
    <div className="container" >
       <div className="row">
       <div className="col-12 col-lg-6 texto-banner mt-3">
           <h1>Aqui seu dia fica mais doce!</h1> 
           <Link className="btn btn-primary mt-3 p-3" to="/produtos">SHOP NOW</Link>
        </div>
        <div className="col-12 col-lg-6 ">
            <img className="img-fluid" src={fotoBanner} alt="" />
        </div>
       </div>   
    </div>

    )
}

export default Banner;
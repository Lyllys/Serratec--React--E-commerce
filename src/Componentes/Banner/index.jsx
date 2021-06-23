import './estilos.css';
import fotoBanner from '../../imagens/foto-banner.jpg';
const Banner = () => {
    return (
    <div className="container" >
       <div className="row">
       <div className="col-12 col-lg-6 texto-banner mt-3">
           <h1>Aqui seu dia fica mais doce!</h1> 
        </div>
        <div className="col-12 col-lg-6 ">
            <img className="img-fluid" src={fotoBanner} alt="" />
        </div>
       </div>   
    </div>

    )
}

export default Banner;
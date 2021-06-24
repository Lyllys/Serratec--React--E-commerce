import './estilos.css';
import fotoBanner from '../../imagens/foto-banner-1.jpg';
import fotoBannerDois from '../../imagens/foto-banner-2.jpg';
import fotoBannerTres from '../../imagens/foto-banner-3.jpg';
import fotoBannerQuatro from '../../imagens/foto-banner-4.jpg';
import fotoBannerCinco from '../../imagens/foto-banner-5.jpg';
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
                    {/* <img className="img-fluid" src={fotoBanner} alt="" /> */}

                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="img-fluid d-block w-100" src={fotoBanner} alt="" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={fotoBannerDois} alt="" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={fotoBannerTres} alt="" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={fotoBannerQuatro} alt="" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={fotoBannerCinco} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Banner;
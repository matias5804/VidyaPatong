import PUno from "../../assets/iconos/pUno.png"
import PDos from "../../assets/iconos/pDos.png"
import PTres from "../../assets/iconos/pTres.png"
import PCuatro from "../../assets/iconos/pCuatro.png"
import PCinco from "../../assets/iconos/pCinco.png"
import vidyaComentario from "../../assets/iconos/logoPrimeroIcon.png"


// Import Swiper React components
import Swiper from "swiper"
import SwiperSlide from "swiper"
// Import Swiper styles



import "./carousel.css";

// import required modules
import { Navigation } from "swiper";

const Carousel = () => {
    return (
        <>
          <Swiper navigation={true} modules={[Navigation]} 
            breakpoints={{
                spaceBetween:10,
                // when window width is >= 768px
                768: {
                
                slidesPerView: 2,
                spaceBetween:10,
                },
            }}

          className="mySwiper">
            <SwiperSlide >
                <img src={vidyaComentario} id="cervezaComent" alt="cerveza"/> 
                <p>
                Se nota el amor que le pone a cada litro de cerveza artesanal, atendido por sus dueños.
                </p>
                <div className="divAvatarComentario">
                    
                    <img src={PTres} id="avatar"  alt="Franco Campassi"/>
                    <h5>Franco Campassi </h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={vidyaComentario} id="cervezaComent" alt="cerveza"/> 
                <p>
                Me tocó conocerlos en un evento privado. Excelente servicio, muy buena cerveza y mención especial para la Atención ! En los eventos como en las noches a veces surgen inesperados, estuvieron ahí Actuaron como lo pedía la circunstancia !Hace un buen rato ya, que trabajo con ellos!
                </p>
                <div className="divAvatarComentario">
                    <img src={PCinco} id="avatar" alt="Victoria Virginillo"/>
                    <h5>Maria Victoria Virginillo</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={vidyaComentario} id="cervezaComent" alt="cerveza"/> 
                <p>
                La mejor microcervecería de Buenos Aires. Amante de la cerveza artesanal, hoy en día a mis 36 años comienzo a elegir que además de cerveza artesanal sea de calidad y al encontrar a Eliot Ness encontré calidad extrema. Puedo beber más de DOS LITROS sin sentirme mal, pesado, la verdad es que tiene un gusto suave y aromas distintos a cualquier artesanal que he estado bebiendo a través de distintos bares de la Ciudad. 
                </p>
                <div className="divAvatarComentario">
                    <img src={PUno} id="avatar"  alt="May Sydick"/>
                    <h5>May Sydick</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={vidyaComentario} id="cervezaComent" alt="cerveza"/> 
                <p>
                Excelente! Recomiendo 100%! Muy buena atención! La cerveza riquísima! Sin dudas, los elijo una y otra vez...
                </p>
                <div className="divAvatarComentario">
                    <img src={PDos} id="avatar"  alt="Hugo James"/>
                    <h5>Hugo James</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={vidyaComentario} id="cervezaComent" alt="cerveza"/> 
                <p>
                Alquile varias veces las Choperas de Cerveza Artesanal y jamás me fallaron en la entrega, tiempo y formas. Siempre conservan el buen sabor y los aromas que los caracteriza como fabricantes de Cerveza Artesanal. Me las han entregado siempre en horario y no vivo a la vuelta de la fábrica, es por eso que destaco el compromiso que asumen. Besos, hablamos pronto para la próxima reunión. Sole de Belgrano.
                </p>
                <div className="divAvatarComentario">
                    <img src={PCuatro} id="avatar"  alt="Soledad Pestrech"/>
                    <h5>Soledad Piestrech</h5>
                </div>
            </SwiperSlide>
            
          </Swiper>
        </>
      );
}

export default Carousel
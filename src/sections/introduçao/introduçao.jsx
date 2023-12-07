import './introduçao.css';
import Img from '../../assets/sentadoNaMesa.jpg'
import { Image,Col } from 'react-bootstrap';

export function Introduçao(){
    return(
        <section className="hero">

            <div className="hero_conteudo">
                <div className="hero_img">
                  
                        <Image src={Img} className='imagem_hero'  alt='imagem de perfil' />
                   
                 </div>

                <div className="hero_texto">
                    <h1>Tudo bem <span>não estar bem</span> o tempo todo</h1>
                    <p>Agende agora uma sessão de terapia e se conheça melhor.</p>
                    <a href="#" className="btn_outline" ><i className="bxl-whatsapp"></i>agende seu horário</a>
                </div>

            </div>
    
        </section>
    )
}


                  //  <img src={Img} alt=""  className='imagem_hero'/>
              
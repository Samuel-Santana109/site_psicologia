import './introduçao.scss';
import Img from '../../assets/sentadoNaMesa.jpg'
import { Image } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsapp } from '../../componentes/Links/Links';

export function Introduçao(){
    return(
        <section id="Home" className="hero">

            <h1>Rogerio gurgel</h1>

            <div className="hero_conteudo">

                <div className="hero_img">
                  <Image src={Img} className='imagem_hero'  alt='imagem de perfil' />
                </div>

                <div className="hero_texto">
                    <h1>Tudo bem <span>não estar bem</span> o tempo todo</h1>
                    <p>Agende agora uma sessão de terapia e se conheça melhor.</p>
                    <a
                    {...whatsapp}
                     className="btn_outline" 
                     >
                       <FaWhatsapp />  <span>agende seu horário</span>
                    </a>
                </div>

            </div>
    
        </section>
    )
}


                  //  <img src={Img} alt=""  className='imagem_hero'/>
              
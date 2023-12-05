import './introduçao.css';
import Img from '../../assets/sentadoNaMesa.jpg'

export function Introduçao(){
    return(
        <section className="hero">

            <div className="hero_conteudo">
                <div className="hero_img">
                    <img src={Img} alt=""  className='imagem'/>
                </div>

                <div className="hero_texto">
                    <h1>Tudo bem <span>não estar bem</span> o tempo todo</h1>
                    <p>Agende agora uma sessão de terapia e se conheça melhor.</p>
                    <a href="" className="btn_outline" ><i className="bxl-whatsapp"></i><span>agende seu horário</span></a>
                </div>

            </div>
    
        </section>
    )
}
import './sobreMim.scss'
import Img from '../../assets/fotoInstagram.png'

export function SobreMim(){
    return(
       <section className='sectionSobreMIm'>
            <h1>Sobre Mim</h1>

            <div className='conTeudo'>
                
                <div className='DivSobreMimImagem'>
                    <img src={Img} alt="" />
                </div>

                <div className='divTextoSobreMim'>
                    <p>Rogério Gurgel, psicólogo formado pela Universidade Uninassau, especializado em Terapia Cognitivo Comportamental, tem seis anos de experiência atendendo adultos e casais. Suas especialidades incluem Gestão de Pessoas e Terapia Familiar. Ele oferece terapia presencial e online em Águas Claras, com horários flexíveis. Aceita várias formas de pagamento e mantém presença ativa nas redes sociais para compartilhar conteúdo relevante sobre saúde mental e bem-estar.</p>
                </div>
            </div>

       </section>
    )
}   
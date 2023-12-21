import './duvidas.scss'
import Img from '../../assets/palestrando.jpg'
import { CaixaDeTexto } from '../../componentes/caixaDeTexto/caixaDeTexto.jsx'

export function Duvidas(){
    return(
       <section id="Duvidas" className='sectionDuvidasSobremim'>
            <div>
                <h1>Duvidas</h1>
            </div>

            <div className='SobreMimconTeudo'>
                
                <div className='divDuvidasImagem'>
                    <img src={Img} alt="" />
                </div>

                <div className='divTexto'>
                    <div>
                        <CaixaDeTexto
                            title="Por que fazer terapia ?"
                            item="Fazer psicoterapia possibilita o autoconhecimento, a solução de conflitos e a melhora da saúde mental. É nela que o paciente olha para si mesmo e pensa nas razões que levam à determinados pensamentos ou atitudes em relação a uma área de sua vida"
                        />
                    </div>
                    <div>
                        <CaixaDeTexto
                            title="Qual a duração de uma terapia ?"
                            item="Não há uma resposta única, porque depende muito das questões que estão sendo trabalhadas pelo paciente, de quão complexas e arraigadas são, bem como da frequência com que se realiza a psicoterapia. Isso sim, os atendimentos costumam durar 50 minutos e ser realizados semanal ou quinzenalmente."
                        />
                    </div>
                     <div>
                         <CaixaDeTexto
                            title="É preciso revelar todos os segredos ao psicólogo ?"
                            item="Você, enquanto paciente, é quem decide sobre o que se fala durante a psicoterapia. Você não precisa falar sobre temas que resultam ser incômodos, especialmente no princípio, quando o vínculo de confiança com o profissional está sendo estabelecido. Aos poucos você vai se conectando com sigo mesma/o e permitindo que os conteúdos emerjam."
                        />
                     </div>
                     <div>
                         <CaixaDeTexto
                            title="Como saber que preciso de terapia ?"
                            item=" Se você sente que experimenta um mal-estar crescente, se tem sintomas de algum transtorno, padrões tóxicos ou se deseja ampliar seu autoconhecimento para viver uma vida mais plena e equilibrada, saiba que é um forte candidato para fazer terapia. O mais importante é entender que terapia não é coisa de doido, e que se trata de um processo benéfico a qualquer idade."
                        />
                     </div>
                </div>
            </div>

       </section>
    )
}   
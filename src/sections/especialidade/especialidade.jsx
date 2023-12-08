import './especialidade.css'
import { CardFunçao } from '../../componentes/cards/cards'

export function Especialidade(){
    return(
        <section id="servicos" className="servicos">
          <div className="titulo_servicos"><h1>Especialidade</h1></div>

                <div className="servico_conteudo">
                    <div>
                        <CardFunçao
                            imagem="https://cdn.pixabay.com/photo/2019/11/20/20/02/couple-4641033_640.jpg"
                            titulo="Casais"
                            text="Construindo relacionamentos fortes juntos, passo a passo."
                            button="Entre em Contato"
                        />
                        <CardFunçao
                            imagem="https://cdn.pixabay.com/photo/2015/06/28/23/02/depression-824998_640.jpg"
                            titulo="Adultos"
                            text="O caminho para uma vida mais plena e equilibrada."
                            button="Entre em Contato"
                        />
                        <CardFunçao
                            imagem="https://images.pexels.com/photos/19255740/pexels-photo-19255740/free-photo-of-varandas-galerias-varanda-sacada.jpeg?auto=compress&cs=tinysrgb&w=400"
                            titulo="Terapia Familiar"
                            text="Unindo laços, fortalecendo vínculos: A família em primeiro lugar."
                            button="Entre em Contato"
                        />

                    </div>
                    
                    <div>
                        <CardFunçao
                            imagem="https://cdn.pixabay.com/photo/2017/11/12/22/51/woman-2944070_640.jpg"
                            titulo="Terapia Cognitiva Comportamental"
                            text="Desenvolvendo uma mente mais saudável e equilibrada"
                            button="Entre em Contato"
                        />
                        <CardFunçao
                            imagem="https://cdn.pixabay.com/photo/2014/11/02/09/15/despair-513528_640.jpg"
                            titulo="Gestão de Pessoas"
                            text="Potencializando o capital humano para o sucesso organizacional."
                            button="Entre em Contato"
                        />
                        <CardFunçao
                            imagem="https://cdn.pixabay.com/photo/2014/11/02/09/15/despair-513528_640.jpg"
                            titulo="Síndrome do Impostor"
                            text="Superando dúvidas e alcançando o verdadeiro potencial."
                            button="Entre em Contato"
                        />

                    </div> 
                </div>
        
        </section>
    )
}   


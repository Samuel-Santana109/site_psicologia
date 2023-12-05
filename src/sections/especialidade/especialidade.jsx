import './especialidade.css'
import { CardFunçao } from '../../componentes/cards/cards'

export function Especialidade(){
    return(
        <section id="servicos" className="servicos">
          <div className="titulo_servicos"><h1>Especialidade</h1></div>

                <div className="servico_conteudo">
                    <div>
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2017/05/30/11/17/heart-2356621_640.png"
                        titulo="Casais"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg"
                        titulo="Adultos"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                        <CardFunçao
                        imagem="https://media.istockphoto.com/id/1463772932/pt/foto/visiting-family-psychologist.jpg?s=612x612&w=0&k=20&c=df-9ZzyZJ6m0FE1we2K8raROdkUN2T8wINEHS9k632k="
                        titulo="Terapia Familiar"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                    </div>
                    
                    <div>
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2015/06/28/23/02/depression-824998_640.jpg"
                        titulo="Terapia Cognitiva Comportamental"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2017/11/12/22/51/woman-2944070_640.jpg"
                        titulo="Gestão de Pessoas"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2021/12/02/22/02/mental-6841357_640.png"
                        titulo="Sindrome do ImposTor"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                    </div> 
                </div>
        
        </section>
    )
}   


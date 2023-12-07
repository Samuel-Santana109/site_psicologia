import './especialidade.css'
import { CardFunçao } from '../../componentes/cards/cards'

export function Especialidade(){
    return(
        <section id="servicos" className="servicos">
          <div className="titulo_servicos"><h1>Especialidade</h1></div>

                <div className="servico_conteudo">
                    <div>
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg"
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
                        imagem="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg"
                        titulo="Terapia Familiar"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                    </div>
                    
                    <div>
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg"
                        titulo="Terapia Cognitiva Comportamental"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg"
                        titulo="Gestão de Pessoas"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                        <CardFunçao
                        imagem="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg"
                        titulo="Sindrome do ImposTor"
                        text="Some quick example text to build on the card title and make up the bu"
                        button="Entre em Contato"
                        />
                    </div> 
                </div>
        
        </section>
    )
}   


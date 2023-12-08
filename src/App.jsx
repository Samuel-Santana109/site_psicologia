
import Footer from './componentes/footer/footer'
import { Header } from './componentes/header/header'
import { Duvidas } from './sections/duvidas/duvidas'
import { Especialidade } from './sections/especialidade/especialidade'
import { Introduçao } from './sections/introduçao/introduçao'
import { SobreMim } from './sections/sobreMim/sobreMim' 

function App() {
  return (
      <>
        <Header />
        <Introduçao id="Home"/>
        <SobreMim id="SobreMim"/>
        <Especialidade id="Especialidades"/>
        <Duvidas id="Duvidas"/>   
        <Footer />
      </>
  )
}

export default App

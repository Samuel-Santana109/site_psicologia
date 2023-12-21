import Accordion from 'react-bootstrap/Accordion';
import './caixaDeTexto.scss'

export function CaixaDeTexto({item, title}){
    return(
    <Accordion className='caixaPrincipal'>
      <Accordion.Item eventKey="0" className='p-1'>
        <Accordion.Header><h4>{title}</h4></Accordion.Header>
        <Accordion.Body className='textP text-center'>
          <p>{item}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


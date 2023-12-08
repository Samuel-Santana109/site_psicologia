import Accordion from 'react-bootstrap/Accordion';
import './caixaDeTexto.scss'

export function CaixaDeTexto({item, title}){
    return(
    <Accordion className='caixaPrincipal'>
      <Accordion.Item eventKey="0" className='p-1'>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body className='text-center'>
          {item}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


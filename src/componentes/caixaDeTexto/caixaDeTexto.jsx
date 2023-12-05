import Accordion from 'react-bootstrap/Accordion';

export function CaixaDeTexto({title, item }) {
  return (
    <Accordion defaultActiveKey="0" className='caixa'>
          <Accordion.Item eventKey="0">
        <Accordion.Header className="custom-header">{title}</Accordion.Header>
        <Accordion.Body className="custom-body">
         {item}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import './card.scss'

export function CardFunçao({ imagem, titulo, text, button, link }) {
    return (
        <Card className="card">
            <Card.Img 
                className='cardImagem'
                variant="top"
                src={imagem} 
                alt="Imagem"
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                }}
            />

            <Card.Body className='cardBody'>
                <Card.Title>
                    <h4>{titulo}</h4>
                </Card.Title>
                <Card.Text >
                    <p>{text}</p>
                </Card.Text>
                    <a className="customButton" href={link} target='_blank'   rel="noreferrer">
                        {button}
                    </a>
            </Card.Body>
        </Card>
    );
}

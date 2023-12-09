import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.scss'

export function CardFunçao({ imagem, titulo, text, button }) {
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
                <Button >
                    {button}
                </Button>
            </Card.Body>
        </Card>
    );
}

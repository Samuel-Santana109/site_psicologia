import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.css'

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

            <Card.Body style={{ display: 'flex', flexDirection:'column' }}>
                <Card.Title style={{ fontFamily: 'Arial', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {titulo}
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Arial', fontSize: '1rem' }}>
                    {text}
                </Card.Text>
                <Button variant="primary" style={{ textTransform: 'uppercase' }}>
                    {button}
                </Button>
            </Card.Body>
        </Card>
    );
}

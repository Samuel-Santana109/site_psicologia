import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function CardFunçao({ imagem, titulo, text, button }) {
    return (
        <Card style={{ width: '25rem', display: 'flex', flexDirection:'column' }}>
            <Card.Img 
                style={{ height: '25rem'}}
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

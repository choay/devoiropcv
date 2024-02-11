import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

function Realisations() {
  return (
    <>
    <Image src="/banner.jpg" className='container-fluid p-0' style={{height:80}}/>

    <div className='container'>
        <div className='row my-2'>
            <h2 className='text-center'>PORTFOLIO</h2>
            <p className='text-center'>Voici quelques-unes de mes réalisations.</p>
            <div className='col-sm col-md-4'>
                <Card>
                    <Card.Img variant="top" src="/pumpkin-1768857_640.jpg" />
                        <Card.Body>
                            <Card.Title>Fresh food</Card.Title>
                            <Card.Text>
                                Réalisation d'un site avec commande en ligne.
                            </Card.Text>
                        <Button variant="outline-primary">Voir</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Site réalisé avec PHP et MySQL</Card.Footer>
                </Card>
            </div>
            <div className='col-sm col-md-4'>
                <Card>
                    <Card.Img variant="top" src="/sushi-boat-4746036_640.jpg" />
                        <Card.Body>
                            <Card.Title>Restaurant Akira</Card.Title>
                            <Card.Text>
                                Réalisation d'un site vitrine
                            </Card.Text>
                        <Button variant="outline-primary">Voir</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Site réalisé avec WordPress</Card.Footer>
                </Card>
            </div>
            <div className='col-sm col-md-4'>
                <Card>
                    <Card.Img variant="top" src="/woman-1834827_640.jpg" />
                        <Card.Body>
                            <Card.Title>Espace bien-etre</Card.Title>
                            <Card.Text>
                            Réalisation d'un site vitrine pour un patricien de bien-etre.
                            </Card.Text>
                        <Button variant="outline-primary">Voir</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Site réalisé en HTML/CSS</Card.Footer>
                </Card>
            </div>
            
            </div>
        </div>
   
    </>
  );
}

export default Realisations;
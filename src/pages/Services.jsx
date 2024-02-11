import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function Services() {
    return (
        <>
                <Image src="/banner.jpg" className='container-fluid p-0' style={{height:80}}/>
                
                <div className='container shadow p-3 my-2 bg-white rounded'>
                    
                    <h2>MON OFFRE DE SERVICES</h2>
                    <p>Voici les prestation sur lesquelles je peux intervenir</p>
                    <div className='row'>
                        <div className='col-sm'>
                <Card className='my-2'>
                    <Card.Body>
                    <img style={{width:25}} src='/icon-2.png' alt=''/>
                        <Card.Title>UX DESIGN</Card.Title>
                        <Card.Text>
                        L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.
                        </Card.Text>
        
                    </Card.Body>
                </Card>
                </div>
                <div className='col-sm'>
                <Card>
                    <Card.Body>
                    <img style={{width:25}} src='/icon-1.png' alt=''/>
                        <Card.Title>DEVELOPPEMENT WEB</Card.Title>
                        <Card.Text>
                        Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.
                        </Card.Text>
        
                    </Card.Body>
                </Card>
                </div>
                <div className='col-sm'>
                <Card>
                    <Card.Body>
                        <img style={{width:25}} src='/icon-3.png' alt=''/>
                        <Card.Title>REFERENCEMENT</Card.Title>
                        <Card.Text>
                        Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.
                        </Card.Text>
        
                    </Card.Body>
                </Card>
                </div>
            </div>
            </div>
        </>
    );
}

export default Services;
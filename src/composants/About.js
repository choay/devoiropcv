
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
  return (
    <>
    <div className='container shadow p-3 my-2 bg-white rounded'>
        <div className='row'>
            <div className='col-sm'>
                <Card style={{ width: '100%', border:'0' }}>
                    <Card.Body>
                    <Card.Title className='text-left'><h2 id='about'>A propos</h2></Card.Title>
           
                    <Card.Text className='text-left'>
                    Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>integrateur-développeur web</strong> au CEF, Au cours de cette formation j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web. Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>. j'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                    </Card.Text>
                    </Card.Body>
                </Card>
        </div>
            <div className='col-sm'>
                <Card style={{ width: '100%', border:'0' }}>
                <Card.Img variant="top" src="/photo-de-profile.jpg" />
                <Card.Body>
                <Card.Title className='text-left'><h2>Mes compétences</h2></Card.Title>

                <div className='text-left'>
                    <label>HTML</label>
                    <ProgressBar variant="success" now={80} label="80%"/>
                    <label>CSS</label>
                    <ProgressBar variant="info" now={60} label="60%"/>
                    <label>JavaScript</label>
                    <ProgressBar variant="warning" now={60} label="60%"/>
                    <label>Bootstrap</label>
                    <ProgressBar variant="danger" now={50} label="50"/>
                </div>  

                </Card.Body>
            </Card>
               </div>
            </div>
        </div>
    </>
  );
}

export default About;
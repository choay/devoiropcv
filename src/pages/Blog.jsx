import { Image } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Blog(){
    return(
        <>
            <Image src="/banner.jpg" className='container-fluid p-0' style={{height:80}}/>

        <div className='container'>
        <div className='row my-2'>
            <h2 className='text-center'>BLOG</h2>
            <p className='text-center'>Retrouvez ici quelques articles sur le développement web.</p>
            <div className='col-sm col-md-4 my-2'>
                <Card>
                    <Card.Img variant="top" src="/code.jpg" />
                        <Card.Body>
                            <Card.Title>Coder son site en HTML/CSS</Card.Title>
                            <Card.Text>
                            Some quick exemple text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Publié le 01 avril 2024</Card.Footer>
                </Card>
            </div>
            <div className='col-sm col-md-4 my-2'>
                <Card>
                    <Card.Img variant="top" src="/blog2.jpg" />
                        <Card.Body>
                            <Card.Title>Vendre ses produits sur le web</Card.Title>
                            <Card.Text>
                            Some quick exemple text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Publié le 01 avril 2024 </Card.Footer>
                </Card>
            </div>
            <div className='col-sm col-md-4 my-2'>
                <Card>
                    <Card.Img variant="top" src="/blog-3.jpg" />
                        <Card.Body>
                            <Card.Title>Se positionner sur Google</Card.Title>
                            <Card.Text>
                            Some quick exemple text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Publié le 01 avril 2024</Card.Footer>
                </Card>
            </div>
            <div className='col-sm col-md-4 my-2'>
                <Card>
                    <Card.Img variant="top" src="/blog-4.jpg" />
                        <Card.Body>
                            <Card.Title>Coder son site en HTML/CSS</Card.Title>
                            <Card.Text>
                            Some quick exemple text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Publié le 01 avril 2024</Card.Footer>
                </Card>
            </div>
            <div className='col-sm col-md-4 my-2'>
                <Card>
                    <Card.Img variant="top" src="/blog-5.jpg" />
                        <Card.Body>
                            <Card.Title>Vendre ses produits sur le web</Card.Title>
                            <Card.Text>
                            Some quick exemple text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Publié le 01 avril 2024 </Card.Footer>
                </Card>
            </div>
            <div className='col-sm col-md-4 my-2'>
                <Card>
                    <Card.Img variant="top" src="/blog-6.jpg" />
                        <Card.Body>
                            <Card.Title>Apprendre à coder</Card.Title>
                            <Card.Text>
                            Some quick exemple text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Publié le 01 avril 2024</Card.Footer>
                </Card>
            </div>
            
            </div>
        </div>
        </>
    )
}
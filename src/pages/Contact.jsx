import { Button } from "react-bootstrap";
import { Form, Image } from "react-bootstrap";
import React from "react";





export default function Contact(){
    return(
        <>
        <Image src="/banner.jpg" className='container-fluid p-0' style={{height:80}}/>
        <div className="m-0 h-100vh"
        style={{
            backgroundImage : 'url("/background.jpg")',
            
            }}>
            
            <div className="fluid py-2"
                style={{
                    backgroundColor:'rgba(0,105, 255, 0.5)',

                }}>

            
                <div className="container bg-white my-3 shadow p-3 mb-5 bg-body rounded">
                    <div className="row">
                        <h2>ME CONTACTER</h2>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                        <div className="col-sm">
                        <h3>Formulaire de contact</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Votre nom" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Votre adresse email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="number" placeholder="Votre numéro de téléphone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Sujet" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Votre message" rows={3} />
                            </Form.Group>
                            <Button variant="primary">Envoyez</Button>
                        </Form>
                        </div>
                        <div className="col-sm">
                            <h3>Mes coordonnées</h3>
                            <ul>
                                <li>55 Rue Laure Dieblod 6909 Lyon,France.</li>
                                <li>Télephone: 0610203040</li>
                            </ul>
                            
                            <div className="map-area">
                                <iframe className="container" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.643134709491!2d4.7934366757779445!3d45.778341712424535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb643ef3646f%3A0x6c1fcfa9cc31347a!2s52%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1707570467809!5m2!1sfr!2sfr" width="600" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
        </div>
         
        </>
    )
}
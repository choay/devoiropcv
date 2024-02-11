import About from "../composants/About"
import Button from 'react-bootstrap/Button';
import { useContext } from "react"
import React from "react";
import { UserContext } from "../App";



export default function Home(){    

    const {user, setUser} = useContext(UserContext);
    return(
        <>
            <div id="top" className="img-fluid" 
            style={{
                backgroundImage : 'url("/photo-accueil.jpg")',
                backgroundSize : 'cover',
                height : '100vh'
            }}>
            
            <div className="text-white d-flex flex-column justify-content-center"
            style={{
                backgroundColor : 'rgba(0,0,0,0.3)',
                height : '100vh'
            }}>
                <div className="d-flex flex-column justify-content-end">
                    <p className="fs-1"id="presentation">Bonjour, je suis <a target="_blank" href="https://nh2pfc-5173.csb.app/">{user.name}</a></p>
                    <h1 className="fs-4" id="titre">Développeur web full stack </h1>
                    <a href="#about"><Button>En savoir plus</Button></a>

                </div>
            </div>
            </div>

        <About/>
    </>   
       
    )
}
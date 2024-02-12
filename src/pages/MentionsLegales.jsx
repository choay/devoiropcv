import Accordion from 'react-bootstrap/Accordion';
import { useContext } from 'react';
import { UserContext } from '../App';

function MentionsLegales(){
    const {user, setUser} = useContext(UserContext);
    return(
        <>
        <div className='container pt-5'>
        <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header>éditeur du site</Accordion.Header>
            <Accordion.Body>
            <p className='text-left fs-4'>{user.name}</p>
                <ul className='text-left'>
                    
                    <li>adresse : 55 rue laure Diedold 69009 Lyon, France </li>
                    <li><a className='text-primary' href="tel:0123456789">01.23.45.67.89</a></li>
                    <li><a className='text-primary' href="mailo:john.doe@gmail.com">john.doe@gmail.com</a></li>
                </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
                    <p className='text-left fs-4'>Vercel</p>
                <ul className='text-left'>
                    
                    <li><a className='text-primary' href='https://vercel.com/'>www.vercel.com</a></li>
                </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>

                <p className='text-left'>Site développé par John Doe, étudiant du CEF.<br/>
                Les images libres de droit sont issues du site <code>Pixabay</code></p>
            </Accordion.Body>
            </Accordion.Item>

    </Accordion>
      </div>  
        </>
    )
}


export default MentionsLegales;
import React from "react"
import { Link } from "react-router-dom";

function Footer(){ 
return(
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-left">
        <div className="row">
            

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">john doe</h5>
                <ul className="list-unstyled">
                    <li>40 Rue Laure Diebold 69009 Lyon, France</li>
                    <li>téléphone : 06 20 30 40 50</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Liens utiles</h5>
                <ul className="list-unstyled">
                    <Link to='/'>ACCUEIL</Link>
                    <li><a href="Services">Services</a></li>
                    <li><a href="Contact">Me contacter</a></li>
                    <li><a href="MentionsLegales">Mentions légages</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Mes dernières réalisations</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Fresh food</a></li>
                    <li><a href="#!">Restaurant Akira</a></li>
                    <li><a href="#!">Espace bien-etre</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Mes derniers articles</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Coder son site en HTML/CSS</a></li>
                    <li><a href="#!">vendre ses produits sur le web</a></li>
                    <li><a href="#!">Se positionner sur Google</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© Designed by <a className='text-info' href ="https://ljqj9w.csb.app/" target="_blank">John Doe</a>
        
    </div>

</footer>
)
}
export default Footer;
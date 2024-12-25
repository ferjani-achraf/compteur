import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();
const handleLogout = () => {
    navigate('/'); 
  };
  const handleAbout = () => {
    navigate('/about');
  };

  const handleLayout = () => {
    navigate('/layout');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div>
      <h1>This is the home page</h1>
      
      <div className="navigation-buttons">
      <button onClick={handleLogout}>Log Out</button>
        <button onClick={handleAbout}>About</button>
        <button onClick={handleLayout}>Layout</button>
        <button onClick={handleContact}>Contact</button>
      </div>
      <footer>
        <div className="footer-content">
          <div className="footer-section about">
            <h3>À propos de nous</h3>
            <p>Nous sommes une entreprise dédiée à fournir les meilleurs services à nos clients.</p>
          </div>
          <div className="footer-section links">
            <h3>Liens utiles</h3>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Politique de confidentialité</a></li>
              <li><a href="#terms">Conditions d'utilisation</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contactez-nous</h3>
            <p>Email: achraf</p>
            <p>Téléphone: +216 96264840 </p>
          </div>
          <div className="footer-section social">
            <h3>Suivez-nous</h3>
            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MonSite. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};


export default Home;

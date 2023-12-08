
import {FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { instagram, whatsapp, tiktok } from '../Links/Links';

import '../../style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer p-4 bg-dark text-white">

      <div className="container text-center">

        <div className="row">

          <div className="col-md-6">
            <h4>Sobre Nós</h4>
            <p>Sou psicologo para  ajudar no seu crescimento </p>
          </div>

          <div className="col-md-6">
            <h4>Contato</h4>
            <address>
              <p><i className="bi bi-geo-alt"></i> EsTou aqui para  ajudar nas suas necessidades pessoais </p>
              <p><i className="bi bi-envelope"></i> E-mail: rogerioo@xxxxxx</p>
              <p><i className="bi bi-telephone"></i> Telefone: +55 (61) 9277-1319</p>
            </address>
          </div>

        </div> 

      </div>

      <hr />

      <div className="footer-bottom p-2">
        <div className="container text-center">
          <p>&copy; TECH WORLD {new Date().getFullYear()}</p>
        </div>
      </div>
  
      <div className='d-flex justify-content-center'>
        <a {...tiktok} className="btn btn-outline-light btn-floating m-1" href="" role="button">
          
          <FaTiktok />
        </a>
        <a {...instagram} className="btn btn-outline-light btn-floating m-1" href="" role="button">
          
          <FaInstagram />
        </a>
        <a {...whatsapp}className="btn btn-outline-light btn-floating m-1" href="556192771319" role="button">
          
          <FaWhatsapp />
        </a>
        
      </div>

      <hr />
      <div className="text-center p-3">
        © 2023 Desenvolvimento: 
        <a className="text-white" href="https://mdbootstrap.com/">Tech World</a>
      </div>
    </footer>
  );
};

export default Footer;

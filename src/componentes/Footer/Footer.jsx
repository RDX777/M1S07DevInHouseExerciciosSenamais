import "./footer.css"
import { Facebook, Instagram, Telephone, Whatsapp } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="footer-div-endereco">
          <h3>Endereço</h3>
          <label>Rua dos zumbis, S\N - Raccoon City - Umbrella</label>
          <label><Telephone /> (12) 3456-7890</label>
          <label><Whatsapp /> (12) 9 1234-5678</label>
        </div>
        <div className="footer-div-funcionamento">
          <h3>Horario de Funcionamento</h3>
          <label>Segunda a sexta: 11:00 as 15:00 e 17:00 as 23:00</label>
          <label>Sábado: 11:00 as 14:00 e 18:00 as 00:00</label>
          <label>Domingo: Fechado</label>
        </div>
        <div className="footer-div-redessociais">
          <h3>Redes sociais</h3>
          <a href="https://www.facebook.com"><Facebook /> Facebook</a>
          <a href="https://www.instagram.com"><Instagram /> Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
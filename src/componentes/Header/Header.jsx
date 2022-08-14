import "./header.css"
import Logo from "../../assets/imagens/icons8-talheres-96.png"
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <img className="nav-imagem" src={Logo} alt="Logo" />
        <h1> Restaurante Food in house of devs</h1>
        <div className="nav-cardapio">
          <h1>Cardápio</h1>
          <ul>
            <li>Opção1</li>
            <li>Opção2</li>
            <li>Opção2</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export {Header}
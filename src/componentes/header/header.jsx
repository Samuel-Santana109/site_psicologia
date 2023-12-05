import './header.css'
//import Img from '../../assets/Logotipo psicologia psicólogo azul escuro branco linhas.jpg'

export function Header() {
  return (
    <header className="header-1" id="header">
        <div className="navbar container flex">
            <div className="brand">
                <a href="#">
                    <img src="#" alt="logo-raysa"></img>
                </a>
            </div>

            <nav className="nav" id="nav">
                <ul className="nav_menu">
                    <li className="nav_item"><a href="#" className="nav_link">home</a></li>
                    <li className="nav_item"><a href="#sobre-mim" className="nav_link">sobre mim</a></li>
                    <li className="nav_item"><a href="#servicos" className="nav_link">especialidades</a></li>
                    <li className="nav_item"><a href="#duvidas" className="nav_link">duvidas</a></li>
                    <li className="nav_item"><a href="#agendamento" className="nav_link">agendamento</a></li>
                </ul>
            </nav>

            <div className="nav-hamburguer" id="nav-hamburguer">
                <i className="bx bx-menu"></i>
            </div>
        </div>
    </header>
  )
}



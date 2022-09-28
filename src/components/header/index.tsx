import './style.css'
import foto from '../../assets/Screenshot_1.png'

function HeaderNav() {
  return (
    <nav className="BarraNavLateralPrincipal" id="barraLateral">
        <a className="linkFoto" href="#sobreMim">
            <span className="fotoNavLateral"><img className="fotoNavLateral1" src={foto} alt="minha foto" /></span>
        </a>
        <ul className="barraNavLateral">
            <li className="itensLaterais"><a id="itensLaterais1" href="#sobreMim">Sobre Mim</a></li>
            <li className="itensLaterais"><a id="itensLaterais1" href="#skills">Skills</a></li>
            <li className="itensLaterais"><a id="itensLaterais1" href="#formacao">Formação</a></li>
            <li className="itensLaterais"><a id="itensLaterais1" href="#experiencia">Experiências</a></li>
        </ul>
    </nav>
  )
}

export default HeaderNav

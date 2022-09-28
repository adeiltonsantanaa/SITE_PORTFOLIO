import './style.css'

function SobreMim() {
  return (
    <section className="sobreMim" id="sobreMim">
        <div className="sobreMimSecao">
            <h1 className="nomeMaiorh1">
                <span className="primeiroNome">Adeilton</span><br/> <span className="sobrenome">Santana</span><br/>
                <span className="primeiroNome">Aguiar</span> <span className="sobrenome">Filho</span>
            </h1>
            <div className="enderecoEmail">
                Brasília - DF · E-mail:
                <a id="enviarEmail" href="mailto:filhoaguiar20@gmail.com">filhoaguiar20@gmail.com</a>
            </div>
            <p className="descricaoSobreMim">Desenvolvedor Java, focando meus estudos na criação de APIs Restful!</p>
            <div className="redeSociais">
                <a href="https://www.linkedin.com/in/adeilton-santana-520092220/" target="_blank">
                    <img id="redeSocial1" height="60px" width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                </a>
                <a href="https://github.com/adeiltonsantanaa" target="_blank">
                    <img id="redeSocial2" height="60px" width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a href="https://twitter.com/s_aguiarf" target="_blank">
                    <img id="redeSocial3" height="60px" width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default SobreMim

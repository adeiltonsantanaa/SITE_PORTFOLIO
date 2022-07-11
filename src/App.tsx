import './App.css'
import HeaderNav from './components/header'
import SobreMim from './components/sobreMim'
import Exp from './components/experiencia'
import Formacao from './components/formacao'
import Skills from './components/skills'

function App() {
  return (
    <>
      <HeaderNav />
      <div className='container'>
        <SobreMim/>
        <hr className="linha"/>
        <Exp/>
        <hr className="linha"/>
        <Formacao/>
        <hr className="linha"/>
        <Skills/>
      </div>
    </>
  )
}

export default App

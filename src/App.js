import './App.css';
import Profile from './assests/profile.jpg';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header>
          <h2>JoãoVictor.Dev</h2>
          <ul className='menu'>
            <li>Projetos</li>
            <li>Contatos</li>
          </ul>
        </header>

        <section>
          <div className='left'>
            <img src={Profile} alt='profile image' />
            <strong>João Victor</strong>
            <span> Olar me chamo João Victor e sou sergipano, apreciador de artes marciais e outros esportes como corrida e escalada. Em 2020 tive meu primeiro contato com programação, ao final de 2022 Ingressei no curso de Sistemas de Informação na faculdade descomplica e em 2023 iniciei minha jornada em um curso intensivo como aluno de Desenvolvimento de Software Full Stack ministrado pela Cubos Academy. </span>
          </div>
          <div className='right'>
            <strong>16/05/2023</strong>
            <h2>Introdução ao react</h2>
            <span>Aqui iremos falar sobre como o react é uma biblioteca de extrema importancia na vida do desenvolvedor web</span>
            <a href='#'>Ler mais</a>
          </div>
        </section>

        <footer>
          <ul className='menu'>
            <li>Projestos</li>
            <li>Contatos</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;

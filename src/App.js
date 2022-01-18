import './App.css';
import aguila from './media/Products/Aguila.png'
import costenia from './media/Products/Costeña.png'
import poker from './media/Products/Poker.png'
import logo from './media/barrel-logo.png'

function App() {
  return (
    <div classNameName="App">
      <header>
        <ul className="nav-bar">
          <li>
            <img src={logo} alt="logo-deposito" className="logo"/>
          </li>
          <li>
            <button className="button mainButton">Nuevo Pedido</button>
          </li>
          <li>
            <div className="search">
              <input placeholder="Search Product" type="search" name="search" className="inpSearch"/>
                <i className="fas fa-search iconSearch"></i>
            </div>
          </li>
          <li>
            <button className="button secondaryButton">Iniciar Sesion</button>
          </li>
          <li>
            <button className="button mainButton">Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1 className="titlePage">Avaible Products</h1>
          <ul className="containerProducts">
            <li className="cardProduct">
              <div className="containerImg">
                <img src={aguila} alt="aguila_beer"/>
              </div>
              <span className="titleProduct">Aguila</span>
              <div className="footerCard">
                <span className="titleProduct">100</span>
                <i className="fas fa-heart hearthIcon"></i>
                <span className="titleProduct">70</span>
                <i className="fas fa-comment-dots"></i>
                <span className="titleProduct">600</span>
                <i className="fas fa-eye"></i>
              </div>
            </li>
            <li className="cardProduct">
              <div className="containerImg">
                <img src={costenia} alt="costenia_beer"/>
              </div>
              <span className="titleProduct">Costeña</span>
              <div className="footerCard">
                <span className="titleProduct">80</span>
                <i className="fas fa-heart hearthIcon"></i>
                <span className="titleProduct">30</span>
                <i className="fas fa-comment-dots"></i>
                <span className="titleProduct">500</span>
                <i className="fas fa-eye"></i>
              </div>
            </li>
            <li className="cardProduct">
              <div className="containerImg">
                <img src={poker} alt="poker_beer" />
              </div>
              <span className="titleProduct">Poker</span>
              <div className="footerCard">
                <span className="titleProduct">50</span>
                <i className="fas fa-heart hearthIcon"></i>
                <span className="titleProduct">15</span>
                <i className="fas fa-comment-dots"></i>
                <span className="titleProduct">200</span>
                <i className="fas fa-eye"></i>
              </div>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

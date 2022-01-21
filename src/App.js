import 'styles/styles.css';
import ProductCard from 'components/ProductCard';
import aguila from 'media/Products/Aguila.png'
import costenia from 'media/Products/Costeña.png'
import poker from 'media/Products/Poker.png'
import logo from 'media/barrel-logo.png'

function App() {
  return (
    <div classNameName="App">
      <header>
        <ul className="nav-bar">
          <li>
            <img src={logo} alt="logo-deposito" className="logo" />
          </li>
          <li>
            <button className="button mainButton">Nuevo Pedido</button>
          </li>
          <li>
            <div className="search">
              <input placeholder="Search Product" type="search" name="search" className="inpSearch" />
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
            <ProductCard img={aguila} name='Aguila' qLikes='100' qComments='45' qViews='200'  />
            <ProductCard img={poker} name='Poker' qLikes='300' qComments='145' qViews='500'  />
            <ProductCard img={costenia} name='Costeña' qLikes='200' qComments='115' qViews='260'  />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );

  
}

export default App;

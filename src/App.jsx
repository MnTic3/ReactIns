import 'styles/styles.css';
import Index from 'pages/Index';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ProductDetail from 'pages/ProductDetail';
import Layout from 'Layouts/Layout';
import ProductPoker from 'pages/ProductPoker';
import Test from 'pages/Test';

function App() {

  return (
    <div className="App">
      <Router >
        <Layout>
          <Routes>
            <Route path='/aguila' element={<ProductDetail />} />
            <Route path='/poker' element={<ProductPoker />} />
            <Route path='/' element={<Index />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );


}

export default App;

import 'styles/styles.css';
import Index from 'pages/Index';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />}/>
        </Routes>


      </Router>
    </div>
  );


}

export default App;

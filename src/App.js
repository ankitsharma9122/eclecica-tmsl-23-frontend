
import './App.css';
import Headers from "./components/Headers/Headers.js";
import Blog from './components/Blog/Blog';
import ComponentRouter from "../src/components/Routes/ComponentRoutes"
import Footer from './components/Footer/Footer';

function App() {
  return (
     <div style={{width:"100%"}}>
      <Headers/>
      <ComponentRouter/>
      <Footer/>
      </div>
  );
}

export default App;

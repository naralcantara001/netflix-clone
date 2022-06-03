import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Main } from "./components/Main";
import './index.css';
function App() {
  return (
    <div className="container">
      <Home />
      <Main />
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;

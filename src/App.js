// import Count from "./Count"
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './css/styles.css';
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import NotFound from "./pages/NotFound";



function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/about" element={<About> </About>} />
        <Route path="*" element={<NotFound> </NotFound>} />
      </Routes>
      <Footer></Footer>
      
    </>
  );
}

export default App;

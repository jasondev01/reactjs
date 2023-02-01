import Main from "./components/Main";
import './css/styles.css';
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/layout/MainLayout";



function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Main></Main>} />
          <Route path="/about" element={<About> </About>} />
          <Route path="*" element={<NotFound> </NotFound>} />
        </Route>
      </Routes>

    </>
  );
}

export default App;

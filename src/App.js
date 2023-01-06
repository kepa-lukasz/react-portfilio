import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import Navbar from './components/main/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container } from 'react-bootstrap';
import TicTac from './components/tictac';
import Jokes from './components/jokes';
import Er404 from './components/main/er404'
import Day from './components/unusual_days';
import Footer from "./components/main/footer"
import Cookies from "./components/main/cookies";
import SwitchElement from "./components/main/switch"
import { useState } from 'react';

function App() {
  //set default value for theme
  const [theme, setTheme] = useState("bg-light text-black p-0")
  let themeHandler = ""
  //change classes for dark or light theme
  const handleClick = (isDark) => {
    themeHandler = (isDark) ? "bg-dark text-white p-0" : "bg-light text-black p-0"
    setTheme(themeHandler)
  }
  return (
    <HashRouter>
      <Container fluid className={theme} style={{ minHeight: "100vh" }}>

        <Cookies />
        <Container fluid className="fixed-top text-light bg-success" style={{boxShadow : "0 0 5px #198754"}}>
          <SwitchElement handleClick={handleClick} />
        </Container>

        <Container className='p-0 pt-3' fluid style={{marginTop : "3vh"}}>
          <Navbar />

          <Jokes />
          <Row className='m-0'>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tictac' element={<TicTac />} />
              <Route path='/unusual_day' element={<Day />} />
              <Route path='/*' element={<Er404 />} />
            </Routes>
          </Row>

          <Footer style={{ alignSelf: "flex-end" }} />
        </Container>
      </Container>
    </HashRouter>
  );
}

export default App;
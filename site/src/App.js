import {useState, useEffect} from 'react';
import LoginPage from "./pages/Login/LoginPage";
import AppPage from "./pages/App/AppPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import './App.css';


function App() {
  const [c, setC] = useState(<></>);

  const handleNavigation = (link) => {
    if(link === 'app'){
      setC(<AppPage navHandler={handleNavigation}/>);
    } else if(link === '/'){
      setC(<LoginPage navHandler={handleNavigation}/>);
    } else {
      setC(<NotFoundPage/>);
    }
  }

  useEffect(()=>{
    setC(<LoginPage navHandler={handleNavigation}/>);
  },[]);

  return c;
}

export default App;
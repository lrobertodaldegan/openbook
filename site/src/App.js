import {useState, useEffect} from 'react';
import LoginPage from "./pages/Login/LoginPage";
import AppPage from "./pages/App/AppPage";
import AdminPage from "./pages/Admin/AdminPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import './App.css';


function App() {
  const [c, setC] = useState(<></>);

  const handleNavigation = (user, link) => {
    if(link === 'app'){
      setC(<AppPage user={user} navHandler={handleNavigation}/>);
    } else if(link === 'admin'){
      setC(<AdminPage user={user} navHandler={handleNavigation}/>);
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
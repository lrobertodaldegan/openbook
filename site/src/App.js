import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pages } from './pages/Pages.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {Pages.map(page => <Route key={page.id} 
                                    path={page.path} 
        element={page.component} />)}
      </Routes>
    </Router>
  );
}

export default App;

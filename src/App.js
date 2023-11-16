import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './container/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index path='/' element={<Main />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
